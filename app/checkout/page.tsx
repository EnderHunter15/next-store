'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const orderId = typeof window !== 'undefined' ? searchParams.get('orderId') : null;
  const cartId = typeof window !== 'undefined' ? searchParams.get('cartId') : null;

  useEffect(() => {
    if (orderId && cartId) {
      axios
        .post('/api/payment', { orderId, cartId })
        .then((response) => setClientSecret(response.data.clientSecret))
        .catch((error) => console.error('Error fetching client secret:', error));
    }
  }, [orderId, cartId]);

  if (!orderId || !cartId || !clientSecret) {
    return <p>Loading...</p>;
  }

  return (
    <div className='checkout'>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

export const dynamic = 'force-dynamic';
export const runtime = 'edge';
export const preferredRegion = 'auto';
