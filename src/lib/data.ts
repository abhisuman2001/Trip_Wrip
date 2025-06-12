import type { Trip } from './types';

export const trips: Trip[] = [
  {
    id: 'paris-classique',
    destination: 'Paris, France',
    dates: 'September 5-12, 2024',
    price: 1800,
    availableSlots: 12,
    image: 'https://placehold.co/600x400.png?text=Paris',
    images: [
      'https://placehold.co/800x600.png?text=Eiffel+Tower',
      'https://placehold.co/800x600.png?text=Louvre+Museum',
      'https://placehold.co/800x600.png?text=Seine+River',
    ],
    description: 'Experience the timeless charm of Paris. Visit iconic landmarks, indulge in exquisite cuisine, and immerse yourself in the city\'s artistic atmosphere. A perfect blend of history, culture, and romance awaits.',
    fullItinerary: [
      { day: 1, title: 'Arrival & Eiffel Tower', description: 'Arrive in Paris, check into your hotel. Evening visit to the Eiffel Tower.', activities: ['Check-in', 'Eiffel Tower Visit'] },
      { day: 2, title: 'Louvre & Tuileries Garden', description: 'Morning at the Louvre Museum, afternoon stroll through Tuileries Garden.', activities: ['Louvre Museum', 'Tuileries Garden'] },
      { day: 3, title: 'Notre Dame & Latin Quarter', description: 'Visit Notre Dame Cathedral (exterior view) and explore the historic Latin Quarter.', activities: ['Notre Dame Visit', 'Latin Quarter Exploration'] },
      { day: 4, title: 'Versailles Palace', description: 'Full day trip to the magnificent Palace of Versailles and its gardens.', activities: ['Palace of Versailles', 'Gardens of Versailles'] },
      { day: 5, title: 'Montmartre & Sacré-Cœur', description: 'Explore the artistic neighborhood of Montmartre and visit the Sacré-Cœur Basilica.', activities: ['Montmartre', 'Sacré-Cœur Basilica'] },
      { day: 6, title: 'Seine River Cruise & Shopping', description: 'Enjoy a scenic cruise on the Seine River. Afternoon free for shopping on Champs-Élysées.', activities: ['Seine River Cruise', 'Shopping'] },
      { day: 7, title: 'Departure', description: 'Enjoy a final Parisian breakfast before departing.', activities: ['Breakfast', 'Departure'] },
    ],
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    id: 'tokyo-mirai',
    destination: 'Tokyo, Japan',
    dates: 'October 10-18, 2024',
    price: 2500,
    availableSlots: 8,
    image: 'https://placehold.co/600x400.png?text=Tokyo',
    images: [
      'https://placehold.co/800x600.png?text=Shibuya+Crossing',
      'https://placehold.co/800x600.png?text=Senso-ji+Temple',
      'https://placehold.co/800x600.png?text=Mount+Fuji+View',
    ],
    description: 'Dive into the vibrant metropolis of Tokyo, where ancient traditions meet futuristic technology. Explore bustling markets, serene temples, and dazzling cityscapes.',
    fullItinerary: [
      { day: 1, title: 'Arrival & Shinjuku Exploration', description: 'Arrive in Tokyo, check in, and explore the Shinjuku area, including the Tokyo Metropolitan Government Building for city views.', activities: ['Check-in', 'Shinjuku Gyoen', 'Tokyo Metropolitan Government Building'] },
      { day: 2, title: 'Culture & History: Asakusa', description: 'Visit Senso-ji Temple, Nakamise-dori street, and take a Sumida River cruise.', activities: ['Senso-ji Temple', 'Nakamise-dori', 'Sumida River Cruise'] },
      { day: 3, title: 'Pop Culture & Fashion: Shibuya & Harajuku', description: 'Experience Shibuya Crossing, Hachiko statue, explore Takeshita Street in Harajuku, and visit Meiji Shrine.', activities: ['Shibuya Crossing', 'Takeshita Street', 'Meiji Shrine'] },
      { day: 4, title: 'Fish Market & Gardens', description: 'Early morning visit to Tsukiji Outer Market for breakfast. Afternoon at Hamarikyu Gardens.', activities: ['Tsukiji Outer Market', 'Hamarikyu Gardens'] },
      { day: 5, title: 'Day Trip to Hakone', description: 'Enjoy a scenic day trip to Hakone, with views of Mount Fuji (weather permitting), a cruise on Lake Ashi, and the Hakone Ropeway.', activities: ['Hakone', 'Lake Ashi Cruise', 'Hakone Ropeway', 'Mount Fuji Views'] },
      { day: 6, title: 'Tech & Anime: Akihabara', description: 'Explore Akihabara, the hub for electronics, anime, and manga. Visit a themed cafe.', activities: ['Akihabara Exploration', 'Themed Cafe'] },
      { day: 7, title: 'Imperial Palace & Ginza', description: 'Visit the Imperial Palace East Garden and explore the upscale Ginza shopping district.', activities: ['Imperial Palace East Garden', 'Ginza Shopping'] },
      { day: 8, title: 'Free Day & Departure Preparations', description: 'Enjoy a free day for last-minute souvenir hunting or revisiting favorite spots. Prepare for departure.', activities:['Free Exploration', 'Souvenir Shopping'] },
      { day: 9, title: 'Departure', description: 'Depart from Tokyo.', activities:['Departure'] },
    ],
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    id: 'rome-eterna',
    destination: 'Rome, Italy',
    dates: 'November 1-8, 2024',
    price: 2000,
    availableSlots: 10,
    image: 'https://placehold.co/600x400.png?text=Rome',
    images: [
      'https://placehold.co/800x600.png?text=Colosseum',
      'https://placehold.co/800x600.png?text=Vatican+City',
      'https://placehold.co/800x600.png?text=Trevi+Fountain',
    ],
    description: 'Journey through the heart of the ancient world in Rome. Discover architectural marvels, art treasures, and savor authentic Italian cuisine in the Eternal City.',
    fullItinerary: [
      { day: 1, title: 'Arrival & Ancient Rome', description: 'Arrive in Rome, check in. Afternoon tour of the Colosseum and Roman Forum.', activities: ['Check-in', 'Colosseum', 'Roman Forum'] },
      { day: 2, title: 'Vatican City', description: 'Full day dedicated to Vatican City: St. Peter\'s Basilica, Vatican Museums, and the Sistine Chapel.', activities: ['St. Peter\'s Basilica', 'Vatican Museums', 'Sistine Chapel'] },
      { day: 3, title: 'Baroque Rome', description: 'Explore Rome\'s baroque masterpieces: Trevi Fountain, Pantheon, Spanish Steps, and Piazza Navona.', activities: ['Trevi Fountain', 'Pantheon', 'Spanish Steps', 'Piazza Navona'] },
      { day: 4, title: 'Borghese Gallery & Gardens', description: 'Visit the Borghese Gallery and Museum (reservations essential) and relax in the beautiful Borghese Gardens.', activities: ['Borghese Gallery', 'Borghese Gardens'] },
      { day: 5, title: 'Trastevere & Food Tour', description: 'Explore the charming Trastevere neighborhood and enjoy an evening food tour.', activities: ['Trastevere Exploration', 'Italian Food Tour'] },
      { day: 6, title: 'Catacombs & Appian Way', description: 'Morning visit to the Catacombs and a walk or bike ride along the ancient Appian Way.', activities:['Roman Catacombs', 'Appian Way'] },
      { day: 7, title: 'Free Day & Farewell Dinner', description: 'Free day for personal exploration or shopping. Farewell dinner at a traditional Roman trattoria.', activities:['Free Exploration', 'Farewell Dinner'] },
      { day: 8, title: 'Departure', description: 'Depart from Rome.', activities:['Departure'] },
    ],
    latitude: 41.9028,
    longitude: 12.4964,
  },
];

export const getActivityTypes = () => ['Adventure', 'Relaxation', 'Cultural', 'City Exploration', 'Nature & Outdoors', 'Beach Vacation'];
export const getRegions = () => ['Europe', 'Asia', 'North America', 'South America', 'Africa', 'Oceania'];
export const getBudgets = () => ['Low', 'Medium', 'High'];
export const getDurations = () => ['Weekend (2-3 days)', 'Short (4-6 days)', '1 Week', '2 Weeks', 'Longer than 2 weeks'];
