import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn(
    '[Stripe] STRIPE_SECRET_KEY is not set. Payment features will not work.\n' +
    'Add it to .env.local to enable Stripe Checkout.'
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  typescript: true,
});

export default stripe;
