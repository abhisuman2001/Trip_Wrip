'use client';

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import type { Trip } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

interface InteractiveMapProps {
  trips: Trip[];
}

export default function InteractiveMap({ trips }: InteractiveMapProps) {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 20, lng: 0 }); // Default center

  useEffect(() => {
    // This ensures env var is read only on client-side
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (key) {
      setApiKey(key);
    } else {
      console.warn("Google Maps API key not found. Map functionality will be limited.");
    }

    if (trips.length > 0) {
      // Calculate average lat/lng for initial map center or use first trip
      const avgLat = trips.reduce((sum, trip) => sum + trip.latitude, 0) / trips.length;
      const avgLng = trips.reduce((sum, trip) => sum + trip.longitude, 0) / trips.length;
      setMapCenter({ lat: avgLat || trips[0].latitude, lng: avgLng || trips[0].longitude });
    }
  }, [trips]);


  if (!apiKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
        <p className="font-body text-muted-foreground p-4 text-center">
          Interactive map is unavailable. <br />
          (Google Maps API key not configured)
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={mapCenter}
        defaultZoom={trips.length > 1 ? 2 : 5} // Zoom out more if multiple trips
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId="nomadNavigatorMap"
        className="w-full h-full rounded-lg"
      >
        {trips.map((trip) => (
          <AdvancedMarker
            key={trip.id}
            position={{ lat: trip.latitude, lng: trip.longitude }}
            onClick={() => setSelectedTrip(trip)}
          >
            <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary-foreground))'} glyphColor={'hsl(var(--primary-foreground))'} />
          </AdvancedMarker>
        ))}

        {selectedTrip && (
          <InfoWindow
            position={{ lat: selectedTrip.latitude, lng: selectedTrip.longitude }}
            onCloseClick={() => setSelectedTrip(null)}
            pixelOffset={[0, -30]}
          >
            <Card className="w-64 shadow-none border-none">
              <CardHeader className="p-2">
                <Image 
                  src={selectedTrip.image} 
                  alt={selectedTrip.destination} 
                  width={250} height={150} 
                  className="rounded-md object-cover h-24 w-full"
                  data-ai-hint={`${selectedTrip.destination.split(',')[0].toLowerCase()} map preview`}
                />
                <CardTitle className="font-headline text-lg pt-2">{selectedTrip.destination}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 text-xs">
                <p className="font-body text-muted-foreground mb-2 line-clamp-2">{selectedTrip.description}</p>
                <Button asChild size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/trips/${selectedTrip.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
