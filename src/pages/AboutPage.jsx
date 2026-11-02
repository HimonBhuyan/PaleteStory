import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, GlassWater, ArrowRight, Armchair, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Our Roots & Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white">
            Crafting Moments, Dish by Dish
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg mt-4 font-light">
            How a passion for honest flavors, warm acoustic melodies, and contemporary cafe culture blossomed into Guwahati's favorite culinary haven on GS Road.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Photos */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
                <img src="./assets/images/cropped/entrance_arch.jpg" alt="Entrance to Palate Story" className="w-full h-80 object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-neutral-800">
                  <img src="./assets/images/cropped/interior_lamps.jpg" alt="Handcrafted Cane Lamps" className="w-full h-40 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-neutral-800">
                  <img src="./assets/images/cropped/ceramic_plates_wall.jpg" alt="Artisan Ceramic Plate Wall Art" className="w-full h-40 object-cover" />
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">The Vision</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Where Every Dish Tells A Story
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Founded with a heartfelt vision to give Guwahati an unforgettable dining escape, <strong className="text-white font-medium">Palate Story</strong> was designed from day one to celebrate the art of good food and sincere hospitality.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Located right near the bustling Six Mile Flyover on GS Road, we created a serene oasis 2 floors above the street noise. Stepping inside, guests are embraced by gentle woven bamboo lamps, warm wood-paneled walls, plush pastel seating booths, and an open balcony overlooking the Guwahati sky.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                We don't limit ourselves to one cuisine because great palates crave diversity. Whether you crave the smoky comfort of our clay-tandoor <span className="text-amber-400 font-medium">Lassoni Chicken Tikka</span>, the Mediterranean crispness of <span className="text-amber-400 font-medium">Spanakopita</span> and <span className="text-amber-400 font-medium">Chermoula Grilled Fish</span>, or wok-tossed <span className="text-amber-400 font-medium">Indo-Chinese Fried Momos</span>, each plate is cooked with uncompromised precision.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-neutral-800/80">
                <div>
                  <p className="text-2xl font-display font-bold text-amber-400">{CAFE_INFO.rating}★</p>
                  <p className="text-xs text-neutral-400">Google Rating ({CAFE_INFO.reviewsCount})</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-amber-400">3 Cuisines</p>
                  <p className="text-xs text-neutral-400">Indian, Chinese, Continental</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-amber-400">7 Days</p>
                  <p className="text-xs text-neutral-400">11:30 AM – 10:30 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Artists: Kitchen Team */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="gold-badge text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
              Behind The Scenes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Meet "The Artists"
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light">
              Our culinary brigade brings together seasoned tandoor masters, continental grill chefs, wok maestros, and mixologists who infuse passion into every creation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
              <img src="./assets/images/cropped/chef_artists.jpg" alt="Chef Team at Palate Story" className="w-full h-80 sm:h-96 object-cover" />
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">The Culinary Team</h4>
                  <p className="text-xs text-amber-400">Passionate Creators of the Palate Experience</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-[10px] text-neutral-300 border border-neutral-700">
                  #TheArtists
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl glass-card border border-neutral-800">
                <h4 className="font-serif font-bold text-amber-300 text-base mb-1 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" /> Slow Marination & Clay Oven
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  We never rush good food. Our tandoori kebabs, from the signature Lassoni Chicken Tikka to our Seekh Kebabs, are marinated for hours in hung curd and whole crushed spices before kissing the red-hot tandoor clay.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-neutral-800">
                <h4 className="font-serif font-bold text-amber-300 text-base mb-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Fresh Regional & Global Ingredients
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  From fresh local cilantro and mustard greens to imported Greek feta, virgin olive oil, and artisan mozzarella, we select only the highest caliber ingredients.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-neutral-800">
                <h4 className="font-serif font-bold text-amber-300 text-base mb-1 flex items-center gap-2">
                  <GlassWater className="w-4 h-4 text-amber-400" /> Innovative Mixology & Mocktails
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Our drink counters craft everything from Instagram-sensation freakshakes to zesty Passionfruit Mojitos and artisanal Spanish iced lattes brewed with single-origin beans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Tour */}
      <section className="py-20 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="gold-badge text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
              The Ambience
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Thoughtfully Designed Spaces
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 font-light">
              Every corner of Palate Story offers a distinct vibe suited for your mood, from private booths to celebratory halls and breezy balconies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
              <div className="h-52 overflow-hidden">
                <img src="./assets/images/cropped/balcony_patio.jpg" alt="Outdoor Balcony Seating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">The Outdoor Balcony Patio</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Enjoy open skies and the vibrant pulse of GS Road beneath you. Furnished with comfortable wicker chairs, green foliage, and striped awnings.
                  </p>
                </div>
                <Link to="/reservations" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5">
                  Reserve Balcony Table <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
              <div className="h-52 overflow-hidden">
                <img src="./assets/images/cropped/booth_seating.jpg" alt="Cozy Booth Seating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">Intimate Sage Booths</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Tucked along large windows, our cozy booth seating features plush upholstery, warm directional pendant lamps, and acoustic wall panels.
                  </p>
                </div>
                <Link to="/reservations" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5">
                  Reserve Booth Table <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800 flex flex-col">
              <div className="h-52 overflow-hidden">
                <img src="./assets/images/cropped/maps_dining_room.jpg" alt="Celebration Hall" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">The Celebration Dining Hall</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Our main dining area can be configured for groups from 10 to 60+ guests. Featuring our signature black Palate Story logo wall and festive balloon setups.
                  </p>
                </div>
                <Link to="/events" className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5">
                  Inquire Celebration Booking <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Experience Palate Story In Person
          </h3>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto font-light">
            We look forward to welcoming you, your family, and your closest friends to our table in Six Mile, Guwahati.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/reservations" className="btn-gold text-xs py-3 px-6">
              <Armchair className="w-4 h-4 mr-1.5" /> Book A Table Now
            </Link>
            <Link to="/contact" className="btn-outline-gold text-xs py-3 px-6">
              <MapPin className="w-4 h-4 mr-1.5" /> View Exact Location
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
