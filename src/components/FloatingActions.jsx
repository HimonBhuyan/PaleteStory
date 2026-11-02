import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { CAFE_INFO } from '../data/menuData';

export const FloatingActions = () => {
  const { getItemCount } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const count = getItemCount();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Theme Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full bg-neutral-900/90 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform backdrop-blur-md"
        title={isDark ? "Switch to Light Cafe Theme" : "Switch to Dark Cafe Theme"}
        aria-label="Toggle Theme Mode"
      >
        {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-amber-500" />}
      </button>

      {/* WhatsApp Trigger */}
      <a
        href={`https://wa.me/${CAFE_INFO.phoneRaw}?text=Hello%20Palate%20Story!%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20menu.`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Cart Trigger */}
      <Link
        to="/order"
        className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center shadow-2xl border border-amber-300/40 hover:scale-110 transition-transform"
        title="View Order Cart"
      >
        <ShoppingBag className="w-5 h-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0e0f12]">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

