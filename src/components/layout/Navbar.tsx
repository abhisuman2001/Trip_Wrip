import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Compass size={32} className="text-accent" />
          <h1 className="font-headline text-3xl font-bold">Trip Wrip</h1>
        </Link>
        <nav>
          {/* Add nav links here if needed, e.g., About, Contact */}
          {/* <Link href="/about" className="hover:text-accent transition-colors">About</Link> */}
        </nav>
      </div>
    </header>
  );
}
