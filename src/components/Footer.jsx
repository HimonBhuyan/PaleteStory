import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0b0e] text-neutral-400 text-sm border-t border-neutral-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="./assets/images/cropped/logo.png" alt="Palate Story" className="w-12 h-12 rounded-full border border-amber-500/40" />
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-wider">{CAFE_INFO.name}</h3>
                <p className="text-[10px] text-amber-400 tracking-widest font-semibold uppercase">Indian • Chinese • Continental</p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {CAFE_INFO.tagline} A modern haven of soulful culinary classics, live acoustic melodies, and panoramic balcony seating in Guwahati.
            </p>
            <div className="flex items-center gap-3 text-neutral-400">
              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-amber-400 hover:border-amber-400 transition-colors"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-amber-400 hover:border-amber-400 transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <p className="text-[11px] text-neutral-500 pt-1">
              Social Media Managed by <a href="https://instagram.com/clickmediaghy" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">{CAFE_INFO.managedBy}</a>
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-amber-400 transition-colors">Complete Menu</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Our Story & Chefs</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/order" className="hover:text-amber-400 transition-colors">Online Ordering</Link></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-colors">Guest FAQs</Link></li>
            </ul>
          </div>

          {/* Col 3: Experiences & Parties */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Experiences</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/reservations" className="hover:text-amber-400 transition-colors">Book a Table</Link></li>
              <li><Link to="/events" className="hover:text-amber-400 transition-colors">Birthday & Party Packages</Link></li>
              <li><Link to="/experiences" className="hover:text-amber-400 transition-colors">Weekend Live Music</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Outdoor Balcony Patio</Link></li>
              <li><Link to="/menu" className="hover:text-amber-400 transition-colors">Signature Mocktails & Shakes</Link></li>
            </ul>
          </div>

          {/* Col 4: Location & Timings */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Visit Us</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CAFE_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Open Daily</p>
                  <p>{CAFE_INFO.timings}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 mt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 {CAFE_INFO.name} Guwahati. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-neutral-400">Directions</Link>
            <Link to="/faq" className="hover:text-neutral-400">Privacy & Terms</Link>
            <a href={CAFE_INFO.mapsUrl} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">Google Maps Link</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
