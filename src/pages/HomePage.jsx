import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Wallet, Clock, ArrowRight, Armchair, BookOpen, Bike, 
  Umbrella, Music, Utensils, Cake, Calendar, Ticket, ChevronLeft, 
  ChevronRight, Play, Pause, Sparkles, Wind, Flame, Phone, 
  MapPin, Eye, X, CheckCircle2, Maximize2 
} from 'lucide-react';
import { PALATE_STORY_MENU, CAFE_INFO } from '../data/menuData';
import { DishCard } from '../components/DishCard';

const HERO_SCENES = [
  {
    id: 0,
    tag: '01 AMBIANCE',
    shortTitle: 'Warm Interiors',
    title: 'Warm Bamboo Lights & Romantic Booths',
    subtitle: 'Wicker Aesthetic, Heart Lights & Intimate Seating',
    description: 'Step into Guwahati\'s most aesthetic cafe sanctuary on the 2nd Floor of GS Road. Soft glowing bamboo woven lanterns, custom heart lights, and plush seating create the perfect atmosphere for coffee dates, conversations, and relaxed dining.',
    image: './assets/images/generated/interior_hero_hd.jpg',
    badge: 'Guwahati\'s #1 Aesthetic Cafe',
    badgeIcon: Sparkles,
    feature: 'Cozy booths • Air conditioned • Free Wi-Fi',
    quote: '"The warm ambiance and thoughtful design set the tone for a memorable dining experience."',
    author: 'Ashish Borthakur, Local Guide',
    stats: '4.3★ Rating (142+ Reviews)'
  },
  {
    id: 1,
    tag: '02 BALCONY',
    shortTitle: 'Breezy Patio',
    title: 'Breezy Outdoor Balcony Seating',
    subtitle: 'Open-Air Guwahati Skyline & Fresh Foliage',
    description: 'Soak in breezy afternoons and vibrant evening skies overlooking Six Mile Flyover. Framed with striped cafe awnings and lush natural greenery, our outdoor balcony is Guwahati\'s favorite spot for fresh air and cold mocktails.',
    image: './assets/images/generated/balcony_hero_hd.jpg',
    badge: 'Open-Air Balcony Dining',
    badgeIcon: Wind,
    feature: 'Panoramic Six Mile view • Sunset golden hour glow',
    quote: '"The outdoor balcony seating area is wonderful in the evening with iced lattes and hot momos."',
    author: 'S. Goswami, Cafe Patron',
    stats: 'Scenic City View'
  },
  {
    id: 2,
    tag: '03 FLAVORS',
    shortTitle: 'Tri-Cuisine Feasts',
    title: 'Smoky Clay Tandoor & Tri-Cuisine Spread',
    subtitle: 'Indian, Chinese & Continental Culinary Artistry',
    description: 'From sizzling Lassoni Chicken Tikka straight from our clay tandoor to Greek Spanakopita, Chermoula Grilled Fish, and Chicken in Teriyaki Sauce — every single dish is handcrafted fresh with authentic artisanal technique.',
    image: './assets/images/generated/food_spread_hd.jpg',
    badge: 'Indian • Chinese • Continental',
    badgeIcon: Flame,
    feature: 'Traditional clay tandoor • 100% fresh artisanal recipes',
    quote: '"The Lassoni Chicken Tikka and Chicken Confit were standout culinary hits for our entire party!"',
    author: 'Ritu Dutta, Food Enthusiast',
    stats: '30+ Handcrafted Dishes'
  },
  {
    id: 3,
    tag: '04 LIVE MUSIC',
    shortTitle: 'Weekend Acoustic',
    title: 'Soulful Live Acoustic Music Weekends',
    subtitle: 'Featuring Rahul Gohain & Acclaimed Indie Artists',
    description: 'Unwind every Friday & Saturday evening at 8:00 PM with Guwahati\'s finest live acoustic vocalists and guitarists. Enjoy intimate candlelight dining, signature mocktails, and unplugged melodies.',
    image: './assets/images/generated/live_music_hd.jpg',
    badge: 'Every Fri & Sat | 8:00 PM',
    badgeIcon: Music,
    feature: 'Acoustic stage • Special weekend platters & drinks',
    quote: '"Visitors highlight the weekend live music performances and electric acoustic vibes."',
    author: 'Google Maps Community Highlight',
    stats: 'Live On Stage Every Weekend'
  },
  {
    id: 4,
    tag: '05 CELEBRATIONS',
    shortTitle: 'Milestones & Parties',
    title: 'Custom Celebrations & Birthday Milestones',
    subtitle: 'Themed Decor, Custom Menus & Dedicated Party Hosting',
    description: 'From baby milestones like Varenya\'s 1st birthday to romantic anniversaries, kitty parties, and corporate reunions. We provide customized balloon arch decors, multi-course banquet menus, and seamless hosting.',
    image: './assets/images/generated/celebration_party_hd.jpg',
    badge: 'Bespoke Celebration Packages',
    badgeIcon: Cake,
    feature: 'Themed balloon styling • Custom party banquet menus',
    quote: '"Celebrated our daughter\'s 1st birthday here! The balloon decor was on point and food was praised by all."',
    author: 'Varenya\'s Family',
    stats: 'Tailored Event Packages'
  }
];

const AMBIANCE_STORIES = [
  {
    title: 'Warm Bamboo Lamps & Romantic Booths',
    tag: 'Ambiance',
    image: './assets/images/generated/interior_hero_hd.jpg',
    desc: 'Handwoven bamboo lamps, fairy lights & custom heart lanterns create Guwahati’s most photogenic dining sanctuary.'
  },
  {
    title: 'Breezy Outdoor Balcony Seating',
    tag: 'Open-Air Patio',
    image: './assets/images/generated/balcony_hero_hd.jpg',
    desc: 'Overlooking Six Mile Flyover with striped awnings, gentle city breezes and ambient evening lights.'
  },
  {
    title: 'Smoky Clay Tandoor & Tri-Cuisine Feasts',
    tag: 'Gourmet Kitchen',
    image: './assets/images/generated/food_spread_hd.jpg',
    desc: 'Lassoni Chicken Tikka, Spanakopita, Chermoula Fish & Teriyaki Chicken served hot from our kitchen.'
  },
  {
    title: 'Weekend Acoustic Live Nights',
    tag: 'Live Sessions',
    image: './assets/images/generated/live_music_hd.jpg',
    desc: 'Rahul Gohain and celebrated acoustic indie singers performing unplugged Bollywood & retro classics every Fri & Sat.'
  },
  {
    title: 'Custom Milestone & Birthday Celebrations',
    tag: 'Private Events',
    image: './assets/images/generated/celebration_party_hd.jpg',
    desc: 'Custom balloon arches, personalized party menus, and memorable milestone events like Varenya’s 1st Birthday.'
  },
  {
    title: 'Handcrafted Mocktails & Cool Sips',
    tag: 'Beverages',
    image: './assets/images/generated/signature_mocktails_hd.jpg',
    desc: 'Refreshing Bubblegum Bliss, Passionfruit Mojito, and Blue Lagoon handcrafted by our passionate barista team.'
  }
];

export const HomePage = () => {
  const featuredDishes = PALATE_STORY_MENU.filter(item => item.isChefSpecial).slice(0, 6);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);

  // Auto-advance slideshow with progress
  useEffect(() => {
    if (!isAutoPlaying) return;
    const intervalTime = 50; // ms
    const totalDuration = 6000; // 6 seconds per slide
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % HERO_SCENES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoPlaying, activeSlide]);

  const handleSelectSlide = (idx) => {
    setActiveSlide(idx);
    setSlideProgress(0);
  };

  const handlePrevSlide = () => {
    setActiveSlide((curr) => (curr === 0 ? HERO_SCENES.length - 1 : curr - 1));
    setSlideProgress(0);
  };

  const handleNextSlide = () => {
    setActiveSlide((curr) => (curr + 1) % HERO_SCENES.length);
    setSlideProgress(0);
  };

  const openStory = (idx = 0) => {
    setStoryIndex(idx);
    setShowStoryModal(true);
  };

  const currentScene = HERO_SCENES[activeSlide];
  const CurrentIcon = currentScene.badgeIcon;

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* FULL-PAGE LIVE CLIENT SHOWCASE HERO */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-black border-b border-neutral-900">
        
        {/* Background Rotating Live Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_SCENES.map((scene, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className={`w-full h-full object-cover object-center ${
                    isActive ? 'scale-105 transition-transform duration-[12000ms] ease-out' : 'scale-100'
                  }`}
                />
                
                {/* Multi-layered cinematic gradient vignettes for ultra-clear readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 via-45% to-black/35"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f12] via-transparent to-black/60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent"></div>
              </div>
            );
          })}
        </div>

        {/* Ambient Top Glow */}
        <div className="hero-ambient-glow"></div>

        {/* Hero Main Content */}
        <div className="relative z-20 w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Dynamic Live Status Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide shadow-lg">
                  <span className="live-pulse-dot" style={{ width: 8, height: 8 }}></span>
                  <span>LIVE ON STAGE: Weekend Acoustic Sessions with Rahul Gohain</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <span className="live-pulse-dot-green" style={{ width: 7, height: 7 }}></span>
                  <span>Open Today: 11:30 AM – 10:30 PM</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Igniting Your Taste Buds With Every Dish, 
                <span className="gold-gradient-text block mt-1.5">One Bite At A Time.</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg lg:text-xl text-neutral-200 max-w-2xl font-light leading-relaxed">
                Perched gracefully on the 2nd Floor, GS Road near Six Mile Flyover, <strong className="text-white font-medium">Palate Story</strong> brings you an unforgettable culinary journey across <span className="text-amber-400 font-medium">Indian, Chinese & Continental</span> cuisines, enveloped in warm wicker-lit interiors, breezy outdoor balcony seating, and soulful live acoustic weekends.
              </p>

              {/* Live Info Chips & Ratings */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-neutral-800 text-xs">
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

                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-neutral-800 text-xs text-neutral-300">
                  <Wallet className="w-3.5 h-3.5 text-amber-400" />
                  <span>{CAFE_INFO.priceRange}</span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-neutral-800 text-xs text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Six Mile Flyover, Guwahati</span>
                </div>
              </div>

              {/* Hero Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link to="/reservations" className="btn-gold text-sm py-3.5 px-7 shadow-2xl flex items-center gap-2">
                  <Armchair className="w-4 h-4" /> Reserve a Table
                </Link>
                <Link to="/menu" className="btn-outline-gold text-sm py-3.5 px-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Explore Full Menu
                </Link>
                <Link to="/order" className="btn-zomato text-sm py-3.5 px-6 shadow-md flex items-center gap-2">
                  <Bike className="w-4 h-4" /> Order Online
                </Link>
                <button
                  onClick={() => openStory(activeSlide)}
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-white text-white" /> Watch Cafe Stories
                </button>
              </div>

              {/* Highlight Stats Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl">
                <div>
                  <p className="font-display font-bold text-amber-400 text-xl sm:text-2xl">380+</p>
                  <p className="text-xs text-neutral-400 font-medium">Stories Shared</p>
                </div>
                <div>
                  <p className="font-display font-bold text-amber-400 text-xl sm:text-2xl">3 Cuisines</p>
                  <p className="text-xs text-neutral-400 font-medium">Indian, Chinese, Continental</p>
                </div>
                <div>
                  <p className="font-display font-bold text-amber-400 text-xl sm:text-2xl">100%</p>
                  <p className="text-xs text-neutral-400 font-medium">Handcrafted Fresh</p>
                </div>
              </div>

            </div>

            {/* Right Live Client Showcase Panel (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-5 border-2 border-amber-500/40 shadow-2xl bg-neutral-950/80 backdrop-blur-xl space-y-4">
                
                {/* Card Header with Active Scene Badge */}
                <div className="flex items-center justify-between pb-1 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                      <CurrentIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-400">
                        {currentScene.tag}
                      </span>
                      <h3 className="text-base font-bold text-white font-serif leading-tight">
                        {currentScene.shortTitle}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                    {currentScene.badge}
                  </span>
                </div>

                {/* Interactive High-Res Scene Image with Hover Zoom */}
                <div 
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-amber-500/30 shadow-inner group cursor-pointer"
                  onClick={() => openStory(activeSlide)}
                >
                  <img
                    src={currentScene.image}
                    alt={currentScene.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  {/* Floating Click to Watch Pill */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <Eye className="w-3.5 h-3.5" /> Tap to View Story
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs font-bold text-white line-clamp-1">{currentScene.title}</p>
                    <p className="text-[11px] text-neutral-300 line-clamp-1">{currentScene.feature}</p>
                  </div>
                </div>

                {/* Customer Review Quote Snippet */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <p className="text-xs text-neutral-300 italic leading-relaxed">
                    {currentScene.quote}
                  </p>
                  <p className="text-[10px] font-bold text-amber-400 text-right">
                    — {currentScene.author}
                  </p>
                </div>

                {/* 4 Interactive Thumbnail Previews to Switch Live Background */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center justify-between">
                    <span>Explore Other Ambiance Scenes</span>
                    <span className="text-amber-400/90 text-[10px]">Click to switch hero</span>
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {HERO_SCENES.map((scene, idx) => {
                      if (idx === activeSlide) return null;
                      return (
                        <button
                          key={scene.id}
                          onClick={() => handleSelectSlide(idx)}
                          className="relative rounded-xl overflow-hidden aspect-square border border-neutral-700/80 hover:border-amber-400 transition-all group focus:outline-none focus:ring-2 focus:ring-amber-400"
                          title={scene.title}
                        >
                          <img
                            src={scene.image}
                            alt={scene.shortTitle}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                          <span className="absolute bottom-1 left-1 right-1 text-[8px] font-bold text-white bg-black/80 rounded px-1 text-center truncate">
                            {scene.shortTitle}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Call & Location Bar */}
                <div className="pt-1 flex items-center justify-between text-xs border-t border-white/10">
                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="text-neutral-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" /> {CAFE_INFO.phone}
                  </a>
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1 font-semibold text-[11px]"
                  >
                    <span>Google Maps</span> <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SCENE CONTROLLER BAR */}
        <div className="relative z-20 w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 pb-6 lg:pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            
            {/* 5 Interactive Scene Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-center md:justify-start">
              {HERO_SCENES.map((scene, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={scene.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold transition-all overflow-hidden ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60 shadow-lg'
                        : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 relative z-10">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-400 animate-pulse' : 'bg-neutral-500'}`}></span>
                      <span>{scene.shortTitle}</span>
                    </div>

                    {/* Progress Bar inside Active Pill */}
                    {isActive && isAutoPlaying && (
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-75"
                        style={{ width: `${slideProgress}%` }}
                      ></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-neutral-400 mr-2">
                <span className="text-amber-400 font-bold">{String(activeSlide + 1).padStart(2, '0')}</span> / {String(HERO_SCENES.length).padStart(2, '0')}
              </span>

              <button
                onClick={handlePrevSlide}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all hover:scale-105"
                aria-label="Previous Ambiance Scene"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-all"
                title={isAutoPlaying ? 'Pause Slideshow' : 'Resume Slideshow'}
                aria-label="Play or Pause Slideshow"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-300" />}
              </button>

              <button
                onClick={handleNextSlide}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all hover:scale-105"
                aria-label="Next Ambiance Scene"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* CONTINUOUS LIVE CLIENT SHOWCASE MARQUEE */}
      <div className="w-full bg-gradient-to-r from-amber-950 via-neutral-900 to-amber-950 border-y border-amber-500/30 py-3 overflow-hidden shadow-2xl relative z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> GUWAHATI'S FAVORITE AESTHETIC CAFE & LOUNGE
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-400" /> INDIAN • CHINESE • CONTINENTAL
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" /> 2ND FLOOR, GS ROAD, NEAR SIX MILE FLYOVER
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.3★ GOOGLE RATED (142+ REVIEWS)
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Music className="w-4 h-4 text-amber-400" /> WEEKEND LIVE ACOUSTIC SESSIONS EVERY FRI & SAT
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Umbrella className="w-4 h-4 text-amber-400" /> BREEZY OPEN-AIR BALCONY PATIO
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Cake className="w-4 h-4 text-amber-400" /> CUSTOM BIRTHDAYS & PRIVATE CELEBRATIONS
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Bike className="w-4 h-4 text-red-400" /> ORDER ON ZOMATO
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" /> CALL +91 7099018429
          </span>
          <span className="text-amber-500">✦</span>

          {/* Repeat for seamless infinite marquee loop */}
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> GUWAHATI'S FAVORITE AESTHETIC CAFE & LOUNGE
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-400" /> INDIAN • CHINESE • CONTINENTAL
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" /> 2ND FLOOR, GS ROAD, NEAR SIX MILE FLYOVER
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.3★ GOOGLE RATED (142+ REVIEWS)
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Music className="w-4 h-4 text-amber-400" /> WEEKEND LIVE ACOUSTIC SESSIONS EVERY FRI & SAT
          </span>
          <span className="text-amber-500">✦</span>
          <span className="flex items-center gap-2">
            <Umbrella className="w-4 h-4 text-amber-400" /> BREEZY OPEN-AIR BALCONY PATIO
          </span>
          <span className="text-amber-500">✦</span>
        </div>
      </div>

      {/* AMBIANCE & STORY REEL MODAL */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-neutral-900 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Story Top Progress Bars */}
            <div className="p-4 bg-gradient-to-b from-black/90 to-transparent flex items-center justify-between gap-2 border-b border-white/10">
              <div className="flex items-center gap-2 flex-1">
                {AMBIANCE_STORIES.map((_, sIdx) => (
                  <div
                    key={sIdx}
                    className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden cursor-pointer"
                    onClick={() => setStoryIndex(sIdx)}
                  >
                    <div
                      className={`h-full transition-all duration-300 ${
                        sIdx === storyIndex ? 'bg-amber-400 w-full' : sIdx < storyIndex ? 'bg-amber-400/60 w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowStoryModal(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Story"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Story Image & Content */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[440px]">
              <img
                src={AMBIANCE_STORIES[storyIndex].image}
                alt={AMBIANCE_STORIES[storyIndex].title}
                className="w-full h-full object-cover max-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* Story Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wider">
                  {AMBIANCE_STORIES[storyIndex].tag}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {AMBIANCE_STORIES[storyIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {AMBIANCE_STORIES[storyIndex].desc}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/reservations"
                    onClick={() => setShowStoryModal(false)}
                    className="btn-gold text-xs py-2 px-5"
                  >
                    Reserve Table
                  </Link>
                  <Link
                    to="/menu"
                    onClick={() => setShowStoryModal(false)}
                    className="btn-outline-gold text-xs py-2 px-5"
                  >
                    Explore Menu
                  </Link>
                </div>
              </div>

              {/* Prev / Next Story Click Overlays */}
              <button
                onClick={() => setStoryIndex((curr) => (curr === 0 ? AMBIANCE_STORIES.length - 1 : curr - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all"
                aria-label="Previous Story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setStoryIndex((curr) => (curr + 1) % AMBIANCE_STORIES.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all"
                aria-label="Next Story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Story Footer */}
            <div className="p-3 bg-neutral-950 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5">
              <span>Palate Story Guwahati • Authentic Cafe Moments</span>
              <span className="text-amber-400 font-medium">Story {storyIndex + 1} of {AMBIANCE_STORIES.length}</span>
            </div>

          </div>
        </div>
      )}

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
                <img src="./assets/images/generated/live_singer_poster_hd.jpg" alt="Rahul Gohain Live Music" className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl group">
                <img src="./assets/images/generated/live_guitar_performance_hd.jpg" alt="Acoustic Singer on Stage" className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <img src="./assets/images/generated/party_balloon_milestone_hd.jpg" alt="1st Birthday Milestone Balloon Arch" className="w-full h-48 sm:h-56 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/generated/celebration_party_hd.jpg" alt="Celebration Hall Setup" className="w-full h-48 sm:h-56 object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/generated/party_family_moments_hd.jpg" alt="Family Celebrating Birthday Around Our Table" className="w-full h-48 sm:h-56 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
                  <img src="./assets/images/generated/food_spread_hd.jpg" alt="Custom Party Feasts & Menus Crafted" className="w-full h-48 sm:h-56 object-cover" />
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
              './assets/images/generated/signature_mocktails_hd.jpg',
              './assets/images/generated/balcony_hero_hd.jpg',
              './assets/images/generated/teriyaki_chicken_hd.jpg',
              './assets/images/generated/interior_hero_hd.jpg',
              './assets/images/generated/lassoni_tikka_hd.jpg',
              './assets/images/generated/food_spread_hd.jpg'
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
