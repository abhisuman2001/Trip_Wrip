import TripCard from '@/components/TripCard';
import InteractiveMap from '@/components/InteractiveMap';
import AiTripGuider from '@/components/AiTripGuider';
import { trips } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Mountain, Palmtree, Lightbulb } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/morskie-oko-tatry.jpg')" }}
        data-ai-hint="mountain landscape"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-6">
            Trip Wrip
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover your next adventure. Let us guide you to unforgettable destinations.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12 space-y-16">
        <section id="ai-guider">
          <div className="text-center mb-10">
            <Lightbulb className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="font-headline text-4xl font-semibold mb-3">AI Trip Guider</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us your preferences, and our AI will craft personalized trip suggestions just for you.
            </p>
          </div>
          <AiTripGuider />
        </section>

        <Separator className="my-12" />

        <section id="destinations">
          <div className="text-center mb-10">
            <Palmtree className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="font-headline text-4xl font-semibold mb-3">Our Curated Trips</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of amazing travel experiences.
            </p>
          </div>
          {trips.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          ) : (
            <p className="text-center font-body text-muted-foreground">No trips available at the moment. Check back soon!</p>
          )}
        </section>
        
        <Separator className="my-12" />

        <section id="map" className="h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl border border-border">
           <div className="text-center pt-8 pb-6 bg-card rounded-t-lg">
            <Mountain className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="font-headline text-4xl font-semibold mb-3">Explore on Map</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Visualize our destinations and plan your journey.
            </p>
          </div>
          <InteractiveMap trips={trips} />
        </section>
      </div>
    </div>
  );
}
