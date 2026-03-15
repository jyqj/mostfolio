import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ConditionalShell from '@/components/ConditionalShell';

const playfair = localFont({
  src: [
    {
      path: '../public/fonts/PlayfairDisplay-Variable.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/PlayfairDisplay-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = localFont({
  src: '../public/fonts/DMSans-Variable.ttf',
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
