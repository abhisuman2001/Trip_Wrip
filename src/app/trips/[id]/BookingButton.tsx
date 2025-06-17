'use client';

import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function BookingButton() {
  const { toast } = useToast();

  const handleBookingClick = () => {
    toast({
      title: "Booking Feature Coming Soon!",
      description: "We're working hard to bring you this feature. Please check back later.",
      variant: "default",
    });
  };

  return (
    <Button 
      size="lg" 
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
      onClick={handleBookingClick}
    >
      <Navigation size={20} className="mr-2"/> Book This Trip
    </Button>
  );
}
