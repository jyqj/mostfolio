import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface Payment {
  id: string;
  orderId: string;
  method: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  createdAt: string;
}

async function readJSON<T>(filename: string): Promise<T[]> {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

async function writeJSON<T>(filename: string, data: T[]): Promise<void> {
  const filePath = path.join(DATA_DIR, filename);
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// ─── Payments ────────────────────────────────────────────────────────────

export async function getPayments(): Promise<Payment[]> {
  return readJSON<Payment>('payments.json');
}

export async function getPaymentById(id: string): Promise<Payment | undefined> {
  const payments = await getPayments();
  return payments.find(p => p.id === id);
}

export async function createPayment(payment: Omit<Payment, 'id' | 'createdAt'>): Promise<Payment> {
  const payments = await getPayments();
  const newPayment: Payment = {
    ...payment,
    id: `pay-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  payments.push(newPayment);
  await writeJSON('payments.json', payments);
  return newPayment;
}

export async function updatePayment(id: string, updates: Partial<Payment>): Promise<Payment | null> {
  const payments = await getPayments();
  const idx = payments.findIndex(p => p.id === id);
  if (idx === -1) return null;
  payments[idx] = { ...payments[idx], ...updates, id };
  await writeJSON('payments.json', payments);
  return payments[idx];
}

export async function deletePayment(id: string): Promise<boolean> {
  const payments = await getPayments();
  const filtered = payments.filter(p => p.id !== id);
  if (filtered.length === payments.length) return false;
  await writeJSON('payments.json', filtered);
  return true;
}

// ─── Orders ──────────────────────────────────────────────────────────────

export async function getOrders(): Promise<Order[]> {
  return readJSON<Order>('orders.json');
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  const orders = await getOrders();
  return orders.find(o => o.id === id);
}

export async function createOrder(
  order: Omit<Order, 'id' | 'createdAt'>
): Promise<Order> {
  const orders = await getOrders();
  const newOrder: Order = {
    ...order,
    id: `ord-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  await writeJSON('orders.json', orders);
  return newOrder;
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | null> {
  const orders = await getOrders();
  const idx = orders.findIndex(o => o.id === id);
  if (idx === -1) return null;
  orders[idx] = { ...orders[idx], ...updates, id };
  await writeJSON('orders.json', orders);
  return orders[idx];
}

export async function deleteOrder(id: string): Promise<boolean> {
  const orders = await getOrders();
  const filtered = orders.filter(o => o.id !== id);
  if (filtered.length === orders.length) return false;
  await writeJSON('orders.json', filtered);
  return true;
}
