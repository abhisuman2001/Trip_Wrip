export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body">&copy; {new Date().getFullYear()} Trip Wrip. All rights reserved.</p>
        <p className="font-body text-sm mt-1">Your adventure starts here.</p>
      </div>
    </footer>
  );
}
