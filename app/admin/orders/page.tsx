'use client';

import { useState, useEffect } from 'react';
import { Trash2, X } from 'lucide-react';
import { products } from '@/lib/data';

interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  createdAt: string;
}

const STATUS_OPTIONS = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const;

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // New order form state
  const [form, setForm] = useState({
    customerName: '',
    customerEmail: '',
    shippingAddress: '',
    status: 'pending' as Order['status'],
    selectedProduct: '',
    quantity: 1,
  });
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const loadOrders = async () => {
    const url = `/api/admin/orders${statusFilter !== 'all' ? `?status=${statusFilter}` : ''}`;
    const res = await fetch(url);
    if (res.ok) setOrders(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    const url = `/api/admin/orders${statusFilter !== 'all' ? `?status=${statusFilter}` : ''}`;
    fetch(url)
      .then(res => res.ok ? res.json() : [])
      .then(data => { setOrders(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [statusFilter]);

  const addItem = () => {
    const product = products.find(p => p.id === form.selectedProduct);
    if (!product) return;
    const existing = orderItems.find(i => i.productId === product.id);
    if (existing) {
      setOrderItems(orderItems.map(i =>
        i.productId === product.id ? { ...i, quantity: i.quantity + form.quantity } : i
      ));
    } else {
      setOrderItems([...orderItems, {
        productId: product.id,
        productName: product.name,
        quantity: form.quantity,
        price: product.price,
      }]);
    }
    setForm(f => ({ ...f, selectedProduct: '', quantity: 1 }));
  };

  const removeItem = (productId: string) => {
    setOrderItems(orderItems.filter(i => i.productId !== productId));
  };

  const handleCreate = async () => {
    if (!form.customerName || !form.customerEmail || orderItems.length === 0) return;
    const totalAmount = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    await fetch('/api/admin/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: form.customerName,
        customerEmail: form.customerEmail,
        shippingAddress: form.shippingAddress,
        status: form.status,
        items: orderItems,
        totalAmount,
      }),
    });
    setShowModal(false);
    setForm({ customerName: '', customerEmail: '', shippingAddress: '', status: 'pending', selectedProduct: '', quantity: 1 });
    setOrderItems([]);
    loadOrders();
  };

  const handleStatusChange = async (id: string, status: string) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    loadOrders();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this order?')) return;
    await fetch(`/api/admin/orders/${id}`, { method: 'DELETE' });
    loadOrders();
  };

  const totalAmount = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-header__title">Orders</h1>
        <p className="admin-header__subtitle">Manage customer orders and fulfillment</p>
      </div>

      <div className="admin-table-wrap">
        <div className="admin-table-toolbar">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="admin-table-filter"
          >
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>{s === 'all' ? 'All Status' : s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
          <div style={{ flex: 1 }} />
          <button onClick={() => setShowModal(true)} className="admin-btn admin-btn--primary">
            + New Order
          </button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th style={{ textAlign: 'right' }}>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th style={{ width: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} className="admin-table__empty">Loading…</td></tr>
            ) : orders.length === 0 ? (
              <tr><td colSpan={7} className="admin-table__empty">No orders yet. Create one to get started.</td></tr>
            ) : (
              orders.map(order => (
                <tr key={order.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{order.id}</td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{order.customerName}</div>
                    <div style={{ fontSize: 12, color: 'var(--admin-text-dim)' }}>{order.customerEmail}</div>
                  </td>
                  <td>
                    {order.items.map(i => (
                      <div key={i.productId} style={{ fontSize: 13 }}>
                        {i.productName} × {i.quantity}
                      </div>
                    ))}
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>${order.totalAmount.toLocaleString()}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={e => handleStatusChange(order.id, e.target.value)}
                      className="admin-table-filter"
                      style={{ width: 'auto', fontSize: 12, padding: '6px 30px 6px 10px' }}
                    >
                      {STATUS_OPTIONS.filter(s => s !== 'all').map(s => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ fontSize: 13, color: 'var(--admin-text-muted)' }}>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="admin-action-btn admin-action-btn--danger"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* New Order Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal__header">
              <h2 className="admin-modal__title">New Order</h2>
              <button className="admin-modal__close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="admin-modal__body">
              <div className="admin-field">
                <label className="admin-field__label">Customer Name</label>
                <input
                  className="admin-field__input"
                  value={form.customerName}
                  onChange={e => setForm(f => ({ ...f, customerName: e.target.value }))}
                  placeholder="John Doe"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Customer Email</label>
                <input
                  className="admin-field__input"
                  type="email"
                  value={form.customerEmail}
                  onChange={e => setForm(f => ({ ...f, customerEmail: e.target.value }))}
                  placeholder="john@example.com"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Shipping Address</label>
                <textarea
                  className="admin-field__textarea"
                  value={form.shippingAddress}
                  onChange={e => setForm(f => ({ ...f, shippingAddress: e.target.value }))}
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Status</label>
                <select
                  className="admin-field__select"
                  value={form.status}
                  onChange={e => setForm(f => ({ ...f, status: e.target.value as Order['status'] }))}
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>

              {/* Add items */}
              <div className="admin-field">
                <label className="admin-field__label">Add Products</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <select
                    className="admin-field__select"
                    style={{ flex: 1 }}
                    value={form.selectedProduct}
                    onChange={e => setForm(f => ({ ...f, selectedProduct: e.target.value }))}
                  >
                    <option value="">Select Product…</option>
                    {products.map(p => (
                      <option key={p.id} value={p.id}>{p.name} — ${p.price}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={e => setForm(f => ({ ...f, quantity: parseInt(e.target.value) || 1 }))}
                    className="admin-field__input"
                    style={{ width: 70 }}
                  />
                  <button onClick={addItem} className="admin-btn admin-btn--ghost admin-btn--sm" disabled={!form.selectedProduct}>
                    Add
                  </button>
                </div>
              </div>

              {orderItems.length > 0 && (
                <div style={{ background: 'var(--admin-surface-2)', borderRadius: 'var(--admin-radius-sm)', padding: 12 }}>
                  {orderItems.map(item => (
                    <div key={item.productId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', fontSize: 13 }}>
                      <span>{item.productName} × {item.quantity}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontWeight: 500 }}>${(item.price * item.quantity).toLocaleString()}</span>
                        <button onClick={() => removeItem(item.productId)} className="admin-action-btn admin-action-btn--danger" style={{ fontSize: 11 }}><X size={12} /></button>
                      </div>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid var(--admin-border)', marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                    <span>Total</span>
                    <span>${totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="admin-modal__footer">
              <button onClick={() => setShowModal(false)} className="admin-btn admin-btn--ghost">Cancel</button>
              <button
                onClick={handleCreate}
                className="admin-btn admin-btn--primary"
                disabled={!form.customerName || !form.customerEmail || orderItems.length === 0}
              >
                Create Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
