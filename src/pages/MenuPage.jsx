import React, { useState, useMemo } from 'react';
import { Search, Utensils, RotateCcw } from 'lucide-react';
import { PALATE_STORY_MENU } from '../data/menuData';
import { DishCard } from '../components/DishCard';

export const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDiet, setActiveDiet] = useState('all');
  const [activeCuisine, setActiveCuisine] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = useMemo(() => {
    return PALATE_STORY_MENU.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchDiet = activeDiet === 'all' || item.type === activeDiet;
      const matchCuisine = activeCuisine === 'all' || item.cuisine === activeCuisine;
      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCat && matchDiet && matchCuisine && matchSearch;
    });
  }, [activeCategory, activeDiet, activeCuisine, searchQuery]);

  const resetFilters = () => {
    setActiveCategory('all');
    setActiveDiet('all');
    setActiveCuisine('all');
    setSearchQuery('');
  };

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Starters & Platters' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'beverages', label: 'Beverages & Shakes' },
    { id: 'desserts', label: 'Desserts' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Menu Header */}
      <section className="relative py-16 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Artisanal Dining Experience
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Our Culinary Repertoire
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base mt-3 font-light">
            From sizzling tandoors to Continental grill pans and blazing Asian woks, explore our thoughtfully curated flavors crafted for the discerning palate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-xs font-semibold text-neutral-300 border border-neutral-800">
              🇮🇳 Indian Tandoori & Curries
            </span>
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-xs font-semibold text-neutral-300 border border-neutral-800">
              🇪🇺 Continental Grills & Pastas
            </span>
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-xs font-semibold text-neutral-300 border border-neutral-800">
              🥢 Asian Wok & Momos
            </span>
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-xs font-semibold text-neutral-300 border border-neutral-800">
              🍹 Artisan Mocktails & Shakes
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-20 z-30 bg-[#121419]/95 backdrop-blur-md border-b border-neutral-800 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Right Side: Diet, Cuisine & Search */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              
              <select
                value={activeDiet}
                onChange={(e) => setActiveDiet(e.target.value)}
                className="bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-full px-3.5 py-2 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="all">Diet: All Dishes</option>
                <option value="veg">🌱 Pure Vegetarian</option>
                <option value="non-veg">🍗 Non-Vegetarian</option>
              </select>

              <select
                value={activeCuisine}
                onChange={(e) => setActiveCuisine(e.target.value)}
                className="bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-full px-3.5 py-2 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="all">Cuisine: All</option>
                <option value="indian">Indian Clay Oven</option>
                <option value="continental">Continental & Italian</option>
                <option value="chinese">Asian & Wok</option>
              </select>

              <div className="relative flex-grow lg:w-56">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes..."
                  className="w-full bg-neutral-900/90 text-xs text-white pl-8 pr-4 py-2 rounded-full border border-neutral-800 focus:outline-none focus:border-amber-500"
                />
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-neutral-500" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <main className="py-12 bg-[#0e0f12] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-800/80">
            <p className="text-xs text-neutral-400">
              Showing <span className="font-bold text-amber-400">{filteredDishes.length}</span> culinary offerings
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Veg
              </span>
              <span className="inline-flex items-center gap-1 ml-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Non-Veg
              </span>
            </div>
          </div>

          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((item) => (
                <DishCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Utensils className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">No Dishes Matched Your Filter</h3>
              <p className="text-xs text-neutral-400 mb-6">Try resetting your search query or selecting a different cuisine filter.</p>
              <button onClick={resetFilters} className="btn-outline-gold text-xs py-2 px-6 flex items-center gap-2 mx-auto">
                <RotateCcw className="w-3.5 h-3.5" /> Reset All Filters
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Culinary Philosophy Card */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 border border-amber-500/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 rounded-xl overflow-hidden border border-neutral-800 shadow-xl">
              <img src="./assets/images/cropped/chef_artists.jpg" alt="Palate Story Culinary Chefs" className="w-full h-56 object-cover" />
              <div className="p-2 bg-neutral-900 text-center">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Artists Behind The Flavors</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <span className="gold-badge text-[11px] font-bold px-3 py-1 rounded-full uppercase">Culinary Philosophy</span>
              <h3 className="text-2xl font-serif font-bold text-white">Crafted With Honesty & Fresh Regional Produce</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Every marination at Palate Story rests for a minimum of 12 hours. We hand-grind our tandoori spices, source cold-pressed oils, use fresh buffalo mozzarella for our bruschetta, and extract natural real fruits for our mocktails. Have dietary allergies or preferences? Our chef team is delighted to customize spice and ingredients to your delight.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

