import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Wallet, Clock, ArrowRight, Armchair, BookOpen, Bike, Umbrella, Music, Utensils, Cake, Calendar, Ticket } from 'lucide-react';
import { PALATE_STORY_MENU, CAFE_INFO } from '../data/menuData';
import { DishCard } from '../components/DishCard';

export const HomePage = () => {
  const featuredDishes = PALATE_STORY_MENU.filter(item => item.isChefSpecial).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Guwahati's Favorite Aesthetic Cafe & Lounge
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Igniting Your Taste Buds With Every Dish, 
                <span className="gold-gradient-text block mt-1">One Bite At A Time.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light">
                Perched gracefully on the 2nd Floor, GS Road near Six Mile Flyover, <strong className="text-white font-medium">Palate Story</strong> brings you a harmonious culinary journey across <span className="text-amber-400 font-medium">Indian, Chinese & Continental</span> cuisines, enveloped in warm wicker-lit interiors, breezy outdoor balcony seating, and soulful live acoustic weekends.
              </p>

              {/* Badges & Ratings */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs">
                  <span className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </span>
                  <span className="font-bold text-white">{CAFE_INFO.rating} / 5</span>
                  <span className="text-neutral-400">({CAFE_INFO.reviewsCount} Google Reviews)</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
                  <Wallet className="w-3.5 h-3.5 text-amber-400" />
                  <span>{CAFE_INFO.priceRange}</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Open Daily</span>
                  <span>11:30 AM – 10:30 PM</span>
                </div>
              </div>

              {/* Hero Action CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/reservations" className="btn-gold text-sm py-3 px-6 shadow-xl">
                  <Armchair className="w-4 h-4" /> Reserve a Table
                </Link>
                <Link to="/menu" className="btn-outline-gold text-sm py-3 px-6">
                  <BookOpen className="w-4 h-4" /> Explore Full Menu
                </Link>
                <Link to="/order" className="btn-zomato text-sm py-3 px-6 shadow-md">
                  <Bike className="w-4 h-4" /> Order Online
                </Link>
              </div>

              {/* Highlight Stats */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-neutral-800/80 text-left">
                <div>
                  <p className="font-display font-bold text-amber-400 text-lg sm:text-xl">380+</p>
                  <p className="text-xs text-neutral-400">Stories Shared</p>
                </div>
                <div>
                  <p className="font-display font-bold text-amber-400 text-lg sm:text-xl">3 Cuisines</p>
                  <p className="text-xs text-neutral-400">Indian, Chinese, Continental</p>
                </div>
                <div>
                  <p className="font-display font-bold text-amber-400 text-lg sm:text-xl">100%</p>
                  <p className="text-xs text-neutral-400">Handcrafted Fresh</p>
                </div>
              </div>

            </div>

            {/* Hero Visual Collage (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Ambient Interior Photo */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-neutral-900 group">
                  <img
                    src="./assets/images/cropped/maps_main_interior.jpg"
                    alt="Palate Story Warm Ambient Interior"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/90 text-black text-[10px] font-extrabold tracking-wider uppercase mb-1">
                      Six Mile, Guwahati
                    </span>
                    <h4 className="text-lg font-serif font-bold text-white">Warm Bamboo Lights & Romantic Booths</h4>
                    <p className="text-xs text-neutral-300">Intimate dining, private celebrations & relaxed coffee conversations</p>
                  </div>
                </div>

                {/* Floating Card 1: Balcony */}
                <div className="absolute -top-6 -left-6 sm:-left-8 w-44 rounded-xl overflow-hidden glass-card p-1.5 shadow-2xl border border-amber-500/40 hidden sm:block">
                  <img src="./assets/images/cropped/balcony_patio.jpg" alt="Outdoor Balcony Seating" className="w-full h-24 object-cover rounded-lg" />
                  <div className="p-1.5 text-center">
                    <p className="text-[11px] font-bold text-amber-300">Outdoor Balcony</p>
                    <p className="text-[9px] text-neutral-400">Breezy city-view seating</p>
                  </div>
                </div>

                {/* Floating Card 2: Live Music */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-xl glass-card p-3 shadow-2xl border border-amber-500/40 max-w-[210px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-400 shrink-0">
                      <img src="./assets/images/cropped/live_music_poster.jpg" alt="Live Music" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="live-pulse-dot" style={{ width: 6, height: 6 }}></span>
                        <span className="text-[10px] font-bold text-red-400 uppercase">Live Music</span>
                      </div>
                      <p className="text-xs font-semibold text-white">Acoustic Weekends</p>
                      <p className="text-[10px] text-neutral-400">Rahul Gohain & guests</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Feature Pillars */}
      <section className="py-12 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 hover:border-amber-500/40 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Umbrella className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Outdoor Balcony</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Bask in breezy afternoons and vibrant evening skies overlooking Six Mile. Surrounded by natural greenery and striped awnings.
              </p>
              <Link to="/gallery" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                View Balcony Gallery <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 hover:border-amber-500/40 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Live Music Sessions</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Unwind every weekend with soulful acoustic serenades, indie sets, and acoustic artists playing your favorite songs live.
              </p>
              <Link to="/experiences" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                Check Upcoming Lineup <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 hover:border-amber-500/40 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Tri-Cuisine Mastery</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                From smoky Lassoni Chicken Tikka and Greek Spanakopita to Chermoula Fish and Teriyaki Chicken, each dish has a culinary soul.
              </p>
              <Link to="/menu" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                Discover Food & Drinks <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 hover:border-amber-500/40 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Cake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">Custom Celebrations</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Custom party menus, balloon decor, curated multi-course spreads, and dedicated service for birthdays, anniversaries & kitty parties.
              </p>
              <Link to="/events" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                Book Party Packages <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Starring Tonight: Signature Creations */}
      <section className="py-20 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="gold-badge text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
              Culinary Masterpieces
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
              Starring On Your Table
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              Handcrafted by our culinary artists using fresh regional produce, authentic slow-cooking methods, and refined global techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-outline-gold text-sm py-3.5 px-8 inline-flex items-center gap-3">
              <span>View Complete 30+ Item Menu (Indian, Chinese, Continental)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Music & Acoustic Weekend Experience */}
      <section className="py-16 bg-gradient-to-b from-neutral-950 via-[#121419] to-neutral-950 border-y border-amber-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <span className="live-pulse-dot" style={{ width: 8, height: 8 }}></span> Live Performances
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Acoustic Nights & Musical Vibes At Palate Story
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                There's nothing quite like sipping an iced cappuccino or sharing hot tandoori kebabs while listening to Guwahati's finest acoustic vocalists and guitarists. Featuring live acts like <strong className="text-amber-400">Rahul Gohain</strong> and emerging indie musicians every weekend!
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <Calendar className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white text-sm">Every Friday & Saturday</h4>
                  <p className="text-xs text-neutral-400">8:00 PM – 10:30 PM</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <Utensils className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white text-sm">Special Cocktails & Platters</h4>
                  <p className="text-xs text-neutral-400">Exclusive weekend menu pairings</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/experiences" className="btn-gold text-xs py-3 px-6">
                  <Ticket className="w-4 h-4 mr-1.5" /> See Full Schedule
                </Link>
                <Link to="/reservations" className="btn-outline-gold text-xs py-3 px-6">
                  Reserve Front-Row Table
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl group">
                <img src="./assets/images/cropped/live_music_poster.jpg" alt="Rahul Gohain Live Music" className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl group">
                <img src="./assets/images/cropped/live_musician.jpg" alt="Acoustic Singer on Stage" className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Celebrations & Private Gatherings */}
      <section className="py-20 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/cropped/varenya_birthday.jpg" alt="Birthday Party" className="w-full h-48 sm:h-56 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/cropped/interior_birthday.jpg" alt="Birthday Balloons" className="w-full h-48 sm:h-56 object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/cropped/birthday_memories.jpg" alt="Making Memories Around Our Table" className="w-full h-48 sm:h-56 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/cropped/custom_party_menu.jpg" alt="Custom Party Menus Crafted" className="w-full h-48 sm:h-56 object-cover" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="gold-badge text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                Milestones & Gatherings
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Custom Party Menus Crafted For Unforgettable Evenings
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Whether it's your child's 1st birthday, an intimate candlelit anniversary, a corporate farewell, or a lively reunion with friends — Palate Story turns moments into lifelong memories. We craft tailor-made menus, gorgeous balloon backdrops, ambient music, and attentive culinary service.
              </p>

              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✓</span> Curated 3-course and 4-course banquet spreads
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✓</span> Balloon arches, fairy light decor & cake stand setups
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✓</span> Private indoor booth sections and exclusive balcony access
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✓</span> Dedicated party host & culinary team assistance
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link to="/events" className="btn-gold text-xs py-3 px-6">
                  Calculate Party Estimate
                </Link>
                <a href={`tel:${CAFE_INFO.phone}`} className="btn-outline-gold text-xs py-3 px-6">
                  Call Host: {CAFE_INFO.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex text-amber-400 text-sm">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </span>
                <span className="text-white font-bold text-sm">4.3 Rating on Google Maps</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-white">What Our Guests Love</h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md mt-2 md:mt-0">
              Genuine feedback from our patrons, food bloggers, and families in Guwahati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                "Palate Story is an absolute gem! From the moment you walk in, the warm ambiance and thoughtful design set the tone for a great dining experience. The food is absolutely delicious — every dish has a lot of flavor and is beautifully presented."
              </p>
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">
                  AB
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Abhilash Borah</h5>
                  <p className="text-[10px] text-neutral-400">Local Guide • Google Review</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                "We celebrated our daughter's birthday here! The staff was super helpful, the balloon decor was on point, and the customized party menu was praised by all our guests. The Lassoni Chicken Tikka and Chicken Confit were standout hits!"
              </p>
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">
                  RD
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Ritu Dutta</h5>
                  <p className="text-[10px] text-neutral-400">Family Diner • Google Review</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800/80 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                "Went for a quick bite, honestly they managed to give us more than expected. We got their grilled chicken sandwich, fried momo, fries, and cappuccino. The momo stuffing was so flavorful and the balcony seating is wonderful in the evening."
              </p>
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">
                  SG
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">S. Goswami</h5>
                  <p className="text-[10px] text-neutral-400">Guwahati Resident • Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Grid */}
      <section className="py-14 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Follow Our Journey</span>
              <h3 className="text-2xl font-serif font-bold text-white">{CAFE_INFO.instagramHandle} on Instagram</h3>
            </div>
            <a href={CAFE_INFO.instagram} target="_blank" rel="noreferrer" className="btn-outline-gold text-xs py-2 px-4 flex items-center gap-2">
              <i className="fab fa-instagram text-amber-400"></i> Follow Page
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              './assets/images/cropped/bubblegum_bliss.jpg',
              './assets/images/cropped/balcony_girl.jpg',
              './assets/images/cropped/teriyaki_chicken.jpg',
              './assets/images/cropped/blue_lagoon.jpg',
              './assets/images/cropped/romesco_prawns.jpg',
              './assets/images/cropped/chef_artists.jpg'
            ].map((imgSrc, i) => (
              <div key={i} className="img-zoom-wrap rounded-xl overflow-hidden aspect-square border border-neutral-800">
                <img src={imgSrc} alt="Instagram Post" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA Banner */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="gold-badge text-xs font-bold px-3 py-1 rounded-full uppercase">Visit Us In Guwahati</span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                  Ready For A Flavorful Experience?
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  We are conveniently located right on GS Road, 2nd Floor, next to Six Mile Flyover. Walk-ins are always warmly welcomed, or reserve your table in advance for weekend live sessions & private parties.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📍</span>
                    <span>{CAFE_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📞</span>
                    <span>{CAFE_INFO.phone}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link to="/reservations" className="btn-gold text-center py-3.5 text-sm">
                  Book Table Online
                </Link>
                <Link to="/contact" className="btn-outline-gold text-center py-3.5 text-sm">
                  Get Driving Directions
                </Link>
                <a href={CAFE_INFO.mapsUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 text-center text-xs">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
