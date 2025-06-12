import Link from 'next/link';
import Image from 'next/image';
import type { Trip } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Users, DollarSign, MapPin } from 'lucide-react';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
      <CardHeader className="p-0 relative">
        <Image
          src={trip.image}
          alt={`Image of ${trip.destination}`}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint={`${trip.destination.split(',')[0].toLowerCase()} landscape`}
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
           <CardTitle className="font-headline text-2xl text-white">
             {trip.destination}
           </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-foreground/80">
            <CalendarDays size={16} className="text-primary" />
            <span>{trip.dates}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin size={16} className="text-primary" />
            <span>{trip.destination.split(',')[1]}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <DollarSign size={16} className="text-primary" />
            <span>${trip.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Users size={16} className="text-primary" />
            <span>{trip.availableSlots} slots available</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-secondary/30">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/trips/${trip.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
