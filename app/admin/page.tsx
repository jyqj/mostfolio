'use client';

import { useState, useEffect } from 'react';
import { products } from '@/lib/data';
import Link from 'next/link';
import type { Route } from 'next';

interface Stats {
  products: number;
  orders: number;
  payments: number;
  revenue: number;
  categories: Record<string, number>;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function loadStats() {
      const [ordersRes, paymentsRes] = await Promise.all([
        fetch('/api/admin/orders'),
        fetch('/api/admin/payments'),
      ]);

      const orders = ordersRes.ok ? await ordersRes.json() : [];
      const payments = paymentsRes.ok ? await paymentsRes.json() : [];

      const categories: Record<string, number> = {};
      products.forEach(p => {
        categories[p.category] = (categories[p.category] || 0) + 1;
      });

      const revenue = payments
        .filter((p: { status: string }) => p.status === 'completed')
        .reduce((sum: number, p: { amount: number }) => sum + p.amount, 0);

      setStats({
        products: products.length,
        orders: orders.length,
        payments: payments.length,
        revenue,
        categories,
      });
    }
    loadStats();
  }, []);

  if (!stats) {
    return (
      <div className="animate-fade-in">
        <div className="admin-header opacity-50">
          <h1 className="admin-header__title">Dashboard</h1>
          <p className="admin-header__subtitle">Loading overview…</p>
        </div>
        <div className="admin-stats">
          {[1,2,3,4].map(i => (
             <div key={i} className="admin-stat-card" style={{ height: 120, opacity: 0.2, background: 'var(--admin-surface-2)' }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-header__title">Dashboard</h1>
        <p className="admin-header__subtitle">Welcome back. Here&apos;s your store at a glance.</p>
      </div>

      <div className="admin-stats">
        <Link href={"/admin/products" as Route} className="admin-stat-card" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-card__label">Total Products</div>
          <div className="admin-stat-card__value">{stats.products}</div>
          <div className="admin-stat-card__sub">
            {Object.entries(stats.categories).map(([cat, count]) => (
              <span key={cat} style={{ marginRight: 12 }}>{cat}: {String(count)}</span>
            ))}
          </div>
        </Link>

        <Link href={"/admin/orders" as Route} className="admin-stat-card" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-card__label">Total Orders</div>
          <div className="admin-stat-card__value">{stats.orders}</div>
          <div className="admin-stat-card__sub">Across all statuses</div>
        </Link>

        <Link href={"/admin/payments" as Route} className="admin-stat-card" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-card__label">Payments</div>
          <div className="admin-stat-card__value">{stats.payments}</div>
          <div className="admin-stat-card__sub">Transactions recorded</div>
        </Link>

        <Link href={"/admin/payments" as Route} className="admin-stat-card" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-card__label">Revenue</div>
          <div className="admin-stat-card__value">${stats.revenue.toLocaleString()}</div>
          <div className="admin-stat-card__sub">From completed payments</div>
        </Link>
      </div>

      {/* Recent orders quick view */}
      <div className="admin-table-wrap">
        <div className="admin-table-toolbar">
          <span style={{ fontSize: 14, fontWeight: 500 }}>Quick Overview</span>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Products</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stats.categories).map(([cat, count]) => {
              const catProducts = products.filter(p => p.category === cat);
              const minPrice = Math.min(...catProducts.map(p => p.price));
              const maxPrice = Math.max(...catProducts.map(p => p.price));
              return (
                <tr key={cat}>
                  <td><span className="admin-cat">{cat}</span></td>
                  <td>{String(count)}</td>
                  <td>${minPrice} — ${maxPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
