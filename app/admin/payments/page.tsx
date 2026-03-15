'use client';

import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

interface Payment {
  id: string;
  orderId: string;
  method: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId: string;
  createdAt: string;
}

const STATUS_OPTIONS = ['all', 'pending', 'completed', 'failed', 'refunded'] as const;
const METHODS = ['Credit Card', 'Debit Card', 'PayPal', 'Apple Pay', 'Google Pay', 'Wire Transfer', 'Crypto'] as const;

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    orderId: '',
    method: 'Credit Card',
    amount: 0,
    status: 'pending' as Payment['status'],
    transactionId: '',
  });

  const loadPayments = async () => {
    const url = `/api/admin/payments${statusFilter !== 'all' ? `?status=${statusFilter}` : ''}`;
    const res = await fetch(url);
    if (res.ok) setPayments(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    const url = `/api/admin/payments${statusFilter !== 'all' ? `?status=${statusFilter}` : ''}`;
    fetch(url)
      .then(res => res.ok ? res.json() : [])
      .then(data => { setPayments(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [statusFilter]);

  const handleCreate = async () => {
    if (!form.orderId || form.amount <= 0) return;
    await fetch('/api/admin/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setShowModal(false);
    setForm({ orderId: '', method: 'Credit Card', amount: 0, status: 'pending', transactionId: '' });
    loadPayments();
  };

  const handleStatusChange = async (id: string, status: string) => {
    await fetch(`/api/admin/payments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    loadPayments();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this payment record?')) return;
    await fetch(`/api/admin/payments/${id}`, { method: 'DELETE' });
    loadPayments();
  };

  const completedTotal = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-header__title">Payments</h1>
        <p className="admin-header__subtitle">
          Track and manage payment transactions
          {completedTotal > 0 && ` — $${completedTotal.toLocaleString()} completed`}
        </p>
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
            + New Payment
          </button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Order ID</th>
              <th>Method</th>
              <th style={{ textAlign: 'right' }}>Amount</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Date</th>
              <th style={{ width: 80 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={8} className="admin-table__empty">Loading…</td></tr>
            ) : payments.length === 0 ? (
              <tr><td colSpan={8} className="admin-table__empty">No payment records. Create one to get started.</td></tr>
            ) : (
              payments.map(payment => (
                <tr key={payment.id}>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{payment.id}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--admin-text-muted)' }}>{payment.orderId}</td>
                  <td>{payment.method}</td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>${payment.amount.toLocaleString()}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--admin-text-dim)' }}>
                    {payment.transactionId || '—'}
                  </td>
                  <td>
                    <select
                      value={payment.status}
                      onChange={e => handleStatusChange(payment.id, e.target.value)}
                      className="admin-table-filter"
                      style={{ width: 'auto', fontSize: 12, padding: '6px 30px 6px 10px' }}
                    >
                      {STATUS_OPTIONS.filter(s => s !== 'all').map(s => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ fontSize: 13, color: 'var(--admin-text-muted)' }}>
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        onClick={() => handleDelete(payment.id)}
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

      {/* New Payment Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal__header">
              <h2 className="admin-modal__title">New Payment</h2>
              <button className="admin-modal__close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="admin-modal__body">
              <div className="admin-field">
                <label className="admin-field__label">Order ID</label>
                <input
                  className="admin-field__input"
                  value={form.orderId}
                  onChange={e => setForm(f => ({ ...f, orderId: e.target.value }))}
                  placeholder="ord-xxx"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Payment Method</label>
                <select
                  className="admin-field__select"
                  value={form.method}
                  onChange={e => setForm(f => ({ ...f, method: e.target.value }))}
                >
                  {METHODS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Amount ($)</label>
                <input
                  className="admin-field__input"
                  type="number"
                  min={0}
                  step="0.01"
                  value={form.amount || ''}
                  onChange={e => setForm(f => ({ ...f, amount: parseFloat(e.target.value) || 0 }))}
                  placeholder="0.00"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Transaction ID</label>
                <input
                  className="admin-field__input"
                  value={form.transactionId}
                  onChange={e => setForm(f => ({ ...f, transactionId: e.target.value }))}
                  placeholder="txn_xxxxx (optional)"
                />
              </div>
              <div className="admin-field">
                <label className="admin-field__label">Status</label>
                <select
                  className="admin-field__select"
                  value={form.status}
                  onChange={e => setForm(f => ({ ...f, status: e.target.value as Payment['status'] }))}
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                  <option value="refunded">Refunded</option>
                </select>
              </div>
            </div>
            <div className="admin-modal__footer">
              <button onClick={() => setShowModal(false)} className="admin-btn admin-btn--ghost">Cancel</button>
              <button
                onClick={handleCreate}
                className="admin-btn admin-btn--primary"
                disabled={!form.orderId || form.amount <= 0}
              >
                Create Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
