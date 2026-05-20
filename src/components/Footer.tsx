import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Cephas Institute" width={200} height={50} className="h-10 w-auto brightness-0 invert opacity-80 object-contain" />
        </div>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-brand-stone transition-colors text-sm">Home</Link>
          <Link href="/model" className="hover:text-brand-stone transition-colors text-sm">Our Model</Link>
          <Link href="/about" className="hover:text-brand-stone transition-colors text-sm">About Us</Link>
          <Link href="/#contact" className="hover:text-brand-stone transition-colors text-sm">Contact</Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cephas Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
