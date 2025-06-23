'use client';

import { useState } from 'react';

export function BookingModal({
  onBook,
  onClose,
  loading,
}: {
  onBook: (data: { name: string; email: string }) => void;
  onClose: () => void;
  loading: boolean;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4 min-w-[300px]">
        <h2 className="text-xl font-bold mb-2">Book This Trip</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div className="flex gap-2">
          <button type="submit" className="flex-1 bg-accent text-white py-2 rounded" disabled={loading}>
            {loading ? 'Booking...' : 'Book'}
          </button>
          <button type="button" className="flex-1 bg-gray-300 py-2 rounded" onClick={onClose} disabled={loading}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}