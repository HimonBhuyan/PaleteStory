import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { OrderPage } from './pages/OrderPage';
import { FaqPage } from './pages/FaqPage';

// Scroll to top upon route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#0e0f12] text-neutral-100">
          <AnnouncementBar />
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/experiences" element={<ExperiencesPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>

          <FloatingActions />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

