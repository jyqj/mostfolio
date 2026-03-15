import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import ConditionalShell from '@/components/ConditionalShell';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MOSTFOLIO LLC — Premium Men\'s Jewelry',
  description:
    'Forge your legacy with MOSTFOLIO LLC. Premium men\'s rings, chains, and bracelets crafted for the modern gentleman.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <ConditionalShell>{children}</ConditionalShell>
    </html>
  );
}
