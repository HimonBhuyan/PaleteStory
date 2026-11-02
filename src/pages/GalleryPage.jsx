import React, { useState } from 'react';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxState, setLightboxState] = useState({ isOpen: false, image: '', caption: '' });

  const galleryItems = [
    {
      src: './assets/images/generated/interior_hero_hd.jpg',
      category: 'ambiance',
      title: 'Warm Cane Pendant Lamps & Cozy Booths',
      tag: 'Ambiance',
    },
    {
      src: './assets/images/generated/balcony_hero_hd.jpg',
      category: 'balcony',
      title: 'Outdoor Balcony Seating Overlooking Six Mile Flyover',
      tag: 'Balcony Patio',
    },
    {
      src: './assets/images/generated/food_spread_hd.jpg',
      category: 'food',
      title: 'Tri-Cuisine Feast Spread (Indian, Chinese & Continental)',
      tag: 'Signature Feasts',
    },
    {
      src: './assets/images/generated/live_music_hd.jpg',
      category: 'music',
      title: 'Soulful Live Acoustic Stage & Guitar Sessions',
      tag: 'Live Music',
    },
    {
      src: './assets/images/generated/celebration_party_hd.jpg',
      category: 'celebrations',
      title: 'Custom Balloon Arch & Private Celebration Hall',
      tag: 'Celebrations',
    },
    {
      src: './assets/images/generated/signature_mocktails_hd.jpg',
      category: 'drinks',
      title: 'Handcrafted Mocktail Trio (Bubblegum Bliss & Passionfruit Mojito)',
      tag: 'Signature Drinks',
    },
    {
      src: './assets/images/generated/lassoni_tikka_hd.jpg',
      category: 'food',
      title: 'Char-Grilled Lassoni Garlic Chicken Tikka',
      tag: 'Signature Food',
    },
    {
      src: './assets/images/generated/teriyaki_chicken_hd.jpg',
      category: 'food',
      title: 'Chicken in Teriyaki Glaze with Steamed Rice',
      tag: 'Pan-Asian Gourmet',
    },
    {
      src: './assets/images/generated/bruschetta_hd.jpg',
      category: 'food',
      title: 'Tomato & Basil Mozzarella Bruschetta with Balsamic',
      tag: 'Continental Antipasti',
    },
    {
      src: './assets/images/cropped/varenya_birthday.jpg',
      category: 'celebrations',
      title: "Varenya's 1st Birthday Party Moments",
      tag: 'Celebrations',
    },
    {
      src: './assets/images/cropped/live_music_poster.jpg',
      category: 'music',
      title: 'Live Music Night Featuring Rahul Gohain',
      tag: 'Live Music',
    },
    {
      src: './assets/images/cropped/spanakopita.jpg',
      category: 'food',
      title: 'Spanakopita Greek Filo Pastry',
      tag: 'Mediterranean',
    },
    {
      src: './assets/images/cropped/spiderman_shake.jpg',
      category: 'drinks',
      title: 'The Viral Spiderman Freakshake',
      tag: 'Freakshake',
    },
    {
      src: './assets/images/cropped/chermoula_fish.jpg',
      category: 'food',
      title: 'Chermoula Grilled Sole Fish with Charred Vegetables',
      tag: 'Gourmet Seafood',
    },
    {
      src: './assets/images/cropped/live_musician.jpg',
      category: 'music',
      title: 'Acoustic Weekend Singer on Stage',
      tag: 'Live Music',
    },
    {
      src: './assets/images/cropped/balcony_girl.jpg',
      category: 'balcony',
      title: 'Breezy Twilight Terrace Lifestyle',
      tag: 'Balcony Patio',
    },
    {
      src: './assets/images/cropped/chef_artists.jpg',
      category: 'ambiance',
      title: 'The Artists - Palate Story Culinary Brigade',
      tag: 'Our Team',
    },
    {
      src: './assets/images/cropped/bubblegum_bliss.jpg',
      category: 'drinks',
      title: 'Bubblegum Bliss Artisanal Layered Mocktail',
      tag: 'Signature Drinks',
    },
    {
      src: './assets/images/cropped/interior_birthday.jpg',
      category: 'celebrations',
      title: 'Festive Balloon Arches & Timber Wall Decor',
      tag: 'Party Decor',
    },
    {
      src: './assets/images/cropped/teriyaki_chicken.jpg',
      category: 'food',
      title: 'Chicken in Teriyaki Sauce with Butter Herb Rice',
      tag: 'Asian Fusion',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Moments' },
    { id: 'ambiance', label: 'Ambiance & Interiors' },
    { id: 'balcony', label: 'Outdoor Balcony' },
    { id: 'food', label: 'Signature Food' },
    { id: 'drinks', label: 'Mocktails & Coffee' },
    { id: 'celebrations', label: 'Parties & Celebrations' },
    { id: 'music', label: 'Live Music Sessions' },
  ];

  const visibleItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (src, title) => {
    setLightboxState({ isOpen: true, image: src, caption: title });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, image: '', caption: '' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Visual Journey
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Moments Captured At Palate Story
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base mt-3 font-light">
            Immerse yourself in our candlelit interiors, breezy balcony vistas, artfully plated culinary creations, and soulful live weekend sessions.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="py-14 bg-[#0e0f12] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(item.src, item.title)}
                className="glass-card rounded-2xl overflow-hidden border border-neutral-800 group relative cursor-pointer"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">{item.tag}</span>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        caption={lightboxState.caption}
        onClose={closeLightbox}
      />

    </div>
  );
};

