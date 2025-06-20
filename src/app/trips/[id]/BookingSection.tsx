'use client';

import { useState } from 'react';
import { BookingModal } from './BookingModal';
import { CardFooter } from '@/components/ui/card';

export function BookingSection({ tripDestination }: { tripDestination: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleBook = (data: { name: string; email: string }) => {
    alert(`Thank you, ${data.name}! Your booking request for ${tripDestination} has been received.`);
    setShowModal(false);
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
      {showModal && <BookingModal onBook={handleBook} onClose={() => setShowModal(false)} />}
    </CardFooter>
  );
}