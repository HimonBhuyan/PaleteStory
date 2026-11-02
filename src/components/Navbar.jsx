import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Calendar, Menu, X, Home, Utensils, Heart, Camera, GlassWater, Music, MapPin, HelpCircle, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { CAFE_INFO } from '../data/menuData';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { getItemCount } = useCart();
  const { theme, toggleTheme, isDark } = useTheme();
  const itemCount = getItemCount();

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/menu', label: 'Menu', icon: Utensils },
    { to: '/about', label: 'About Us', icon: Heart },
    { to: '/gallery', label: 'Gallery', icon: Camera },
    { to: '/reservations', label: 'Reservations', icon: Calendar },
    { to: '/events', label: 'Celebrations', icon: GlassWater },
    { to: '/experiences', label: "What's On", icon: Music },
    { to: '/order', label: 'Order Online', isOrder: true },
    { to: '/contact', label: 'Contact', icon: MapPin },
    { to: '/faq', label: 'FAQ', icon: HelpCircle },
  ];

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 glass-nav">
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black/60 border border-amber-500/40 p-0.5 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-all">
                <img src="./assets/images/cropped/logo.png" alt="Palate Story Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  {CAFE_INFO.name}
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-400/90 font-medium">
                  INDIAN • CHINESE • CONTINENTAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors flex items-center gap-1.5 ${
                      isActive ? 'text-amber-400 font-bold' : 'hover:text-amber-400'
                    }`
                  }
                >
                  {link.isOrder && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>}
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700/80 text-amber-400 border border-amber-500/20 transition-all flex items-center justify-center shadow-md hover:scale-105"
                title={isDark ? "Switch to Light Cafe Theme" : "Switch to Dark Cafe Theme"}
                aria-label="Toggle Theme Mode"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-amber-600" />}
              </button>

              <Link to="/reservations" className="btn-gold text-xs py-2.5 px-4 shadow-md">
                <Calendar className="w-3.5 h-3.5" /> Reserve Table
              </Link>
              <Link
                to="/order"
                className="relative p-2.5 rounded-full bg-neutral-800 text-amber-400 hover:bg-neutral-700 transition-all border border-amber-500/20"
                title="View Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0e0f12]">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-neutral-800 text-amber-400 border border-amber-500/20"
                title={isDark ? "Light Mode" : "Dark Mode"}
                aria-label="Toggle Theme Mode"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-amber-500" />}
              </button>

              <Link to="/order" className="relative p-2 rounded-full bg-neutral-800 text-amber-400 border border-amber-500/20">
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#0e0f12]">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 text-neutral-300 hover:text-white focus:outline-none"
                aria-label="Open Navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-[#181a20] z-50 p-6 flex flex-col transition-transform duration-300 ease-in-out border-l border-amber-500/30 ${
          isDrawerOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <img src="./assets/images/cropped/logo.png" alt="Palate Story" className="w-10 h-10 rounded-full border border-amber-500/40" />
            <div>
              <h3 className="font-display font-bold text-white tracking-wide">PALATE STORY</h3>
              <p className="text-[9px] text-amber-400 tracking-wider">GUWAHATI</p>
            </div>
          </div>
          <button onClick={closeDrawer} className="text-neutral-400 hover:text-white p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-3 py-6 text-sm font-medium text-neutral-200 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-3 rounded-xl transition-colors ${
                    isActive ? 'bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-neutral-800 text-neutral-300'
                  }`
                }
              >
                {Icon && <Icon className="w-4 h-4 text-amber-500" />}
                {link.isOrder && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>}
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-neutral-800 flex flex-col gap-3">
          {/* Mobile Theme Toggle */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800">
            <span className="text-xs font-medium text-neutral-300 flex items-center gap-2">
              {isDark ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span>{isDark ? 'Dark Theme' : 'Light Theme'}</span>
            </span>
            <button
              onClick={toggleTheme}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-all"
            >
              Switch to {isDark ? 'Light' : 'Dark'}
            </button>
          </div>

          <Link to="/reservations" onClick={closeDrawer} className="btn-gold text-center py-2.5 text-xs">
            Book a Table
          </Link>
          <a
            href={`https://wa.me/${CAFE_INFO.phoneRaw}?text=Hi%20Palate%20Story%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold text-center py-2 text-xs flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp text-emerald-400"></i> WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
};

