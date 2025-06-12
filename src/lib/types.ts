export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Trip {
  id: string;
  destination: string;
  dates: string;
  price: number;
  availableSlots: number;
  image: string;
  images: string[]; // For trip details page
  description: string;
  fullItinerary: ItineraryItem[];
  latitude: number;
  longitude: number;
}

export interface AiTripSuggestion {
  name: string;
  description: string;
  activities: string[];
  estimatedPrice: string;
}
