'use client';

import { useState } from 'react';
import { BookingModal } from './BookingModal';
import { CardFooter } from '@/components/ui/card';

export function BookingSection({ tripDestination }: { tripDestination: string }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBook = async (data: { name: string; email: string }) => {
    setLoading(true);
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        trip: tripDestination,
      }),
    });

    setLoading(false);

    if (res.ok) {
      alert('Booking successful!');
      setShowModal(false);
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <CardFooter>
      <button
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
        type="button"
      >
        Book This Trip
      </button>
      {showModal && (
        <BookingModal
          onBook={handleBook}
          onClose={() => setShowModal(false)}
          loading={loading}
        />
      )}
    </CardFooter>
  );
}