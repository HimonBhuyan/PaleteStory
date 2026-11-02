import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Ticket, ArrowRight, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const ExperiencesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            What's Happening At Palate Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white">
            Music, Flavors & Experiences
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg mt-4 font-light">
            Every weekend, our cafe comes alive with acoustic singer-songwriters, live musicians, themed tasting platters, and sunset coffee sessions on our outdoor terrace.
          </p>
        </div>
      </section>

      {/* Featured Headline Event: Rahul Gohain Live */}
      <section className="py-16 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                <img src="./assets/images/cropped/live_music_poster.jpg" alt="Rahul Gohain Live Poster" className="w-full h-80 sm:h-96 object-cover" />
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <span className="live-pulse-dot" style={{ width: 8, height: 8 }}></span> Featured Headline Night
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                  Live Acoustic Performance: <span className="gold-gradient-text">Rahul Gohain</span>
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  "Get ready for a night full of music!" Join us this weekend as acclaimed Guwahati guitarist and vocalist <strong className="text-amber-400">Rahul Gohain</strong> takes the stage, performing beloved acoustic anthems, indie gems, and soulful Bollywood unplugged melodies.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <Calendar className="w-4 h-4 text-amber-400 mb-1" />
                    <p className="text-neutral-400">Date:</p>
                    <p className="font-bold text-white text-sm">Every Weekend</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                    <Clock className="w-4 h-4 text-amber-400 mb-1" />
                    <p className="text-neutral-400">Timing:</p>
                    <p className="font-bold text-white text-sm">8:00 PM – 10:30 PM</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 col-span-2 sm:col-span-1">
                    <Sparkles className="w-4 h-4 text-amber-400 mb-1" />
                    <p className="text-neutral-400">Entry:</p>
                    <p className="font-bold text-emerald-400 text-sm">Free with Dine-In</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/reservations" className="btn-gold text-xs py-3 px-6 shadow-xl flex items-center gap-1.5">
                    <Ticket className="w-4 h-4" /> Reserve Stage-Front Table
                  </Link>
                  <a href={`tel:${CAFE_INFO.phone}`} className="btn-outline-gold text-xs py-3 px-6">
                    Call for Group Bookings
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Weekly Happenings */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="gold-badge text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
              Weekly Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Curated Experiences Throughout The Week
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light">
              There's always a reason to drop by Palate Story. Check out our recurring happenings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="./assets/images/cropped/live_musician.jpg" alt="Acoustic Friday" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase">
                  Fridays • 8 PM
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">Acoustic Unplugged Fridays</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Wind down your workweek with unplugged guitar sets and soothing vocal performances. Sip our Passionfruit Mojito or artisanal lattes while enjoying intimate acoustic tracks.
                  </p>
                </div>
                <Link to="/reservations" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5">
                  Book Friday Table <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="./assets/images/cropped/lassoni_tikka.jpg" alt="Kebab Platter Nights" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase">
                  Saturdays • 8 PM
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">Grand Kebab & Live Band Saturdays</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    The biggest night of the week! Featuring our chef's Grand Tandoori Kebab Platter, sizzlers, live pop & retro music sets, and celebratory energy across both floors.
                  </p>
                </div>
                <Link to="/reservations" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5">
                  Book Saturday Table <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src="./assets/images/cropped/balcony_girl.jpg" alt="Sunday Sunset Balcony" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase">
                  Sundays • 5:00 PM
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">Sunday Sunset Balcony Sessions</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Golden hour in Guwahati. Watch the sky turn amber from our open balcony patio. Special offers on our signature Bubblegum Bliss, Spiderman Freakshake, and artisan pizzas.
                  </p>
                </div>
                <Link to="/reservations" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5">
                  Reserve Balcony Seat <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Musician Collab Box */}
      <section className="py-16 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="gold-badge text-[11px] font-bold px-3 py-1 rounded-full uppercase">For Local Artists</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Are You A Musician In Guwahati?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                We are dedicated to championing the vibrant musical soul of Assam. If you are an acoustic guitarist, singer-songwriter, or indie musician looking to perform in front of an appreciative audience, we would love to feature you at Palate Story!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${CAFE_INFO.phoneRaw}?text=Hi%20Palate%20Story!%20I%20am%20a%20musician%20in%20Guwahati%20and%20interested%20in%20performing%20live%20at%20your%20cafe.`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-xs py-3 text-center justify-center flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> Submit Demo via WhatsApp
              </a>
              <Link to="/contact" className="btn-outline-gold text-xs py-3 text-center justify-center">
                Send Portfolio Message
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

