import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 text-amber-200/90 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-8 border-b border-amber-500/20 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="live-pulse-dot shrink-0" style={{ width: 6, height: 6 }}></span>
          <span className="font-medium tracking-wide truncate max-w-[340px] sm:max-w-none">
            Weekend Live Acoustic Sessions every Fri & Sat | 8:00 PM Onwards
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-neutral-300">
          <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-amber-400" /> {CAFE_INFO.phone}
          </a>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-400" /> 2nd Floor, GS Road, Six Mile, Guwahati
          </span>
        </div>
      </div>
    </div>
  );
};

