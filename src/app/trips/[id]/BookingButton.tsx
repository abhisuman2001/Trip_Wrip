// 'use client';

// import { Button } from '@/components/ui/button';
// import { Navigation } from 'lucide-react';
// import { useToast } from "@/hooks/use-toast";
// import { BookingModal } from './BookingModal';

// export function BookingButton() {
//   const { toast } = useToast();

//   const handleBookingClick = () => {
//     toast({
//       title: "Booking Feature Coming Soon!",
//       description: "We're working hard to bring you this feature. Please check back later.",
//       variant: "default",
//     });
//   };

//   // Example booking handler (replace with real API call as needed)
//   const handleBook = (data: { name: string; email: string }) => {
//     alert(`Thank you, ${data.name}! Your booking request for ${trip.destination} has been received.`);
//     // Here you could send data to your backend
//   };

//   return (
//     <Button 
//       size="lg" 
//       className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
//       onClick={handleBookingClick}
//     >
//       <Navigation size={20} className="mr-2"/> Book This Trip
//       <BookingModal onBook={handleBook} />
//     </Button>
//   );
// }
