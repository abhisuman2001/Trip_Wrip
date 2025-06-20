import { trips } from '@/lib/data';
import type { Trip } from '@/lib/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays, Users, DollarSign, MapPin, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookingSection } from './BookingSection';

interface TripDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function TripDetailsPage(props: TripDetailsPageProps) {
  const { params } = props;
  const trip = trips.find((t) => t.id === params.id);

  if (!trip) {
    notFound();
  }

  const [city, country] = trip.destination.split(',').map(s => s.trim());

  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <article className="bg-card p-6 sm:p-8 rounded-xl shadow-2xl">
        {/* Header Section */}
        <header className="mb-8">
          <Link href="/" className="text-sm text-accent hover:underline mb-4 inline-block">&larr; Back to all trips</Link>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-3 text-primary">{trip.destination}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground font-body">
            <span className="flex items-center gap-1.5"><MapPin size={16} /> {country}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={16} /> {trip.dates}</span>
          </div>
        </header>

        {/* Image Gallery */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
              <Image
                src={trip.images[0]}
                alt={`Main image of ${trip.destination}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
                data-ai-hint={`${city?.toLowerCase() ?? ''} primary attraction`}
              />
            </AspectRatio>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {trip.images.slice(1, 3).map((imgSrc, index) => (
              <AspectRatio ratio={4/3} key={index} className="bg-muted rounded-lg overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`Image ${index + 2} of ${trip.destination}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={`${city?.toLowerCase() ?? ''} secondary attraction ${index + 1}`}
                />
              </AspectRatio>
            ))}
          </div>
        </section>
        
        {/* Main Content Area */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column: Description & Itinerary */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="font-headline text-3xl font-semibold mb-4">About this trip</h2>
              <p className="font-body text-lg leading-relaxed text-foreground/90">{trip.description}</p>
            </section>

            <Separator />

            <section>
              <h2 className="font-headline text-3xl font-semibold mb-6">Full Itinerary</h2>
              <div className="space-y-6">
                {trip.fullItinerary.map((item, idx) => (
                  <div key={item.day} className="flex gap-4 pb-6 border-b border-dashed last:border-b-0">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg font-headline">
                        {item.day}
                      </div>
                      {item.day !== trip.fullItinerary.length && (
                        <div className="w-px h-full bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="font-body text-muted-foreground mb-2">{item.description}</p>
                      {item.activities.length > 0 && (
                        <div className="mt-2 space-x-2">
                          {item.activities.map((activity, i) => (
                            <Badge key={i} variant="secondary" className="font-body text-xs">{activity}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Booking Info / Key Details */}
          <aside className="md:col-span-1 space-y-6 md:sticky md:top-24 self-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Trip Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2"><DollarSign size={18} /> Price per person:</span>
                  <span className="font-semibold text-xl text-primary">${trip.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2"><Users size={18} /> Available Slots:</span>
                  <span className="font-semibold">{trip.availableSlots}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2"><CalendarDays size={18} /> Duration:</span>
                  <span className="font-semibold">{trip.fullItinerary.length} days</span>
                </div>
                <div className="pt-2">
                  <h4 className="font-semibold mb-2 text-md">Includes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Accommodation</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Guided Tours</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Some Meals</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Local Transport</li>
                  </ul>
                </div>
              </CardContent>
              {/* BookingSection handles the booking button and modal */}
              <BookingSection tripDestination={trip.destination} />
            </Card>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <p className="font-body text-sm text-muted-foreground">
                Questions about this trip? <Link href="/contact" className="text-accent hover:underline font-semibold">Contact us</Link>
              </p>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return trips.map((trip) => ({
    id: trip.id,
  }));
}