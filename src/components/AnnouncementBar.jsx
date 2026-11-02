import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 text-amber-200/90 text-xs py-2 px-4 sm:px-8 border-b border-amber-500/20">
      <div className="w-full max-w-[1700px] mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="live-pulse-dot"></span>
          <span className="font-medium tracking-wide">
            Weekend Live Acoustic Sessions every Fri & Sat | 8:00 PM Onwards
          </span>
        </div>
        <div className="flex items-center gap-6 text-[11px] text-neutral-300">
          <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-amber-400" /> {CAFE_INFO.phone}
          </a>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-400" /> 2nd Floor, GS Road, Near Six Mile Flyover, Guwahati
          </span>
        </div>
      </div>
    </div>
  );
};

