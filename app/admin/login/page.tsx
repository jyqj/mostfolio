'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.replace('/admin');
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-login__card">
        <div className="admin-login__brand">MOSTFOLIO</div>
        <div className="admin-login__subtitle">Admin Access</div>

        {error && <div className="admin-login__error">{error}</div>}

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="admin-login__input"
          autoFocus
          required
        />

        <button
          type="submit"
          className="admin-login__btn"
          disabled={loading || !password}
        >
          {loading ? 'Authenticating…' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
