'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { BarChart3, Gem, Package, CreditCard, LogOut, type LucideIcon } from 'lucide-react';
import './admin.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (pathname === '/admin/login') return;

    let cancelled = false;
    fetch('/api/admin/auth')
      .then(res => {
        if (cancelled) return;
        if (!res.ok) {
          router.replace('/admin/login');
          setAuthenticated(false);
        } else {
          setAuthenticated(true);
        }
      })
      .catch(() => {
        if (cancelled) return;
        router.replace('/admin/login');
        setAuthenticated(false);
      });

    return () => { cancelled = true; };
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.replace('/admin/login');
  };

  // Login page — render without shell
  if (pathname === '/admin/login') {
    return <div className="admin-root">{children}</div>;
  }

  // Loading state
  if (authenticated === null) {
    return (
      <div className="admin-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--admin-bg)' }}>
        <div style={{ 
          color: 'var(--admin-accent)', 
          fontFamily: 'var(--font-display, serif)', 
          fontSize: '24px', 
          letterSpacing: '4px',
          animation: 'adminFadeInOut 1.5s infinite ease-in-out'
        }}>
          MOSTFOLIO
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes adminFadeInOut {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}} />
      </div>
    );
  }

  if (!authenticated) return null;

  const navItems: { href: string; label: string; icon: LucideIcon }[] = [
    { href: '/admin', label: 'Dashboard', icon: BarChart3 },
    { href: '/admin/products', label: 'Products', icon: Gem },
    { href: '/admin/orders', label: 'Orders', icon: Package },
    { href: '/admin/payments', label: 'Payments', icon: CreditCard },
  ];

  return (
    <div className="admin-root">
      <div className="admin-shell">
        <aside className="admin-sidebar">
          <div className="admin-sidebar__brand">MOSTFOLIO</div>
          <div className="admin-sidebar__label">Admin Panel</div>
          <nav className="admin-sidebar__nav">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-sidebar__link ${pathname === item.href ? 'admin-sidebar__link--active' : ''}`}
              >
                <span className="icon"><item.icon size={18} /></span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="admin-sidebar__footer">
            <button onClick={handleLogout} className="admin-sidebar__logout">
              <span className="icon"><LogOut size={18} /></span>
              <span>Logout</span>
            </button>
          </div>
        </aside>
        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
}
