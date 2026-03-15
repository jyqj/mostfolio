'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products, type Category } from '@/lib/data';

export default function AdminProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'All'>('All');

  const filtered = products.filter(p => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-header__title">Products</h1>
        <p className="admin-header__subtitle">
          {products.length} products in catalog (read-only from data source)
        </p>
      </div>

      <div className="admin-table-wrap">
        <div className="admin-table-toolbar">
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="admin-table-search"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value as Category | 'All')}
            className="admin-table-filter"
          >
            <option value="All">All Categories</option>
            <option value="Rings">Rings</option>
            <option value="Chains">Chains</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: 60 }}>Image</th>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th style={{ textAlign: 'right' }}>Price</th>
              <th>Material</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="admin-table__empty">
                  No products found matching your criteria.
                </td>
              </tr>
            ) : (
              filtered.map(p => (
                <tr key={p.id}>
                  <td>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={48}
                      height={48}
                      className="admin-table__img"
                    />
                  </td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--admin-text-dim)' }}>
                    {p.id}
                  </td>
                  <td style={{ fontWeight: 500 }}>{p.name}</td>
                  <td><span className="admin-cat">{p.category}</span></td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>${p.price}</td>
                  <td style={{ fontSize: 13, color: 'var(--admin-text-muted)' }}>
                    {p.specifications.material}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
