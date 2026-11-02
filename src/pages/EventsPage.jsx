import React, { useState, useMemo } from 'react';
import { Phone, CheckCircle, Calculator, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const EventsPage = () => {
  const [guests, setGuests] = useState(20);
  const [packagePrice, setPackagePrice] = useState(850);
  const [addonDecor, setAddonDecor] = useState(false);
  const [addonCake, setAddonCake] = useState(false);
  const [addonPhoto, setAddonPhoto] = useState(false);

  const estimatedTotal = useMemo(() => {
    let total = guests * packagePrice;
    if (addonDecor) total += 3500;
    if (addonCake) total += 1200;
    if (addonPhoto) total += 4000;
    return total;
  }, [guests, packagePrice, addonDecor, addonCake, addonPhoto]);

  const waInquiryLink = useMemo(() => {
    let msg = `*🎉 PRIVATE CELEBRATION INQUIRY - PALATE STORY*\n`;
    msg += `Guests: *${guests} People*\n`;
    msg += `Package: *₹${packagePrice}/guest*\n`;
    msg += `Add-ons: ${[
      addonDecor ? 'Balloon Arch Decor' : null,
      addonCake ? 'Artisan Celebration Cake' : null,
      addonPhoto ? 'Event Photographer' : null
    ].filter(Boolean).join(', ') || 'None'}\n`;
    msg += `Estimated Budget: *₹${estimatedTotal.toLocaleString('en-IN')}*\n`;
    msg += `\nPlease let me know slot availability and menu customization. Thank you!`;

    return `https://wa.me/${CAFE_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
  }, [guests, packagePrice, addonDecor, addonCake, addonPhoto, estimatedTotal]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 sm:py-20 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
        <div className="hero-ambient-glow"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Milestones & Celebrations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white">
            Celebrate Life's Greatest Stories
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg mt-4 font-light">
            From birthdays and anniversaries to corporate get-togethers and kitty parties, let Palate Story curate a bespoke culinary celebration complete with festive decor, music & personalized menus.
          </p>
        </div>
      </section>

      {/* Real Party Highlights */}
      <section className="py-16 bg-[#0e0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800">
              <img src="./assets/images/generated/celebration_party_hd.jpg" alt="Varenya Birthday" className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-[10px] text-amber-400 font-bold uppercase">Kids & Milestone Birthdays</span>
                <h4 className="font-bold text-white text-sm mt-1">Varenya's 1st Birthday</h4>
                <p className="text-xs text-neutral-400 mt-1">Custom dessert bars, child-friendly snacks & photo backdrops.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800">
              <img src="./assets/images/generated/interior_hero_hd.jpg" alt="Romantic Decor" className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-[10px] text-amber-400 font-bold uppercase">Romantic Anniversaries</span>
                <h4 className="font-bold text-white text-sm mt-1">Candlelight Date Evenings</h4>
                <p className="text-xs text-neutral-400 mt-1">Hanging heart balloons, rose petals & customized 4-course dinners.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800">
              <img src="./assets/images/generated/food_spread_hd.jpg" alt="Family Moments" className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-[10px] text-amber-400 font-bold uppercase">Family Banquets</span>
                <h4 className="font-bold text-white text-sm mt-1">Making Memories Around Our Table</h4>
                <p className="text-xs text-neutral-400 mt-1">Lavish sharing platters of tandoori kebabs, curries & warm naans.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-neutral-800">
              <img src="./assets/images/cropped/custom_party_menu.jpg" alt="Custom Party Menu" className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-[10px] text-amber-400 font-bold uppercase">Corporate & Receptions</span>
                <h4 className="font-bold text-white text-sm mt-1">Custom Party Menus</h4>
                <p className="text-xs text-neutral-400 mt-1">Tailored multi-course catering designed for teams and celebrations.</p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Calculator (7 Cols) */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl">
              <div className="mb-8 pb-4 border-b border-neutral-800">
                <span className="gold-badge text-[11px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1.5 w-fit">
                  <Calculator className="w-3.5 h-3.5" /> Instant Estimator
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                  Plan Your Party Budget
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Select your guest count and add-on choices to view instant pricing estimates.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Guest Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-neutral-300 uppercase">Number of Guests</label>
                    <span className="text-sm font-bold text-amber-400 font-display">{guests} Guests</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="70"
                    step="5"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                    <span>10 Guests (Intimate)</span>
                    <span>35 Guests (Half Hall)</span>
                    <span>70 Guests (Full Buyout)</span>
                  </div>
                </div>

                {/* Catering Package Selector */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase mb-2">Select Catering Spread</label>
                  <select
                    value={packagePrice}
                    onChange={(e) => setPackagePrice(parseInt(e.target.value, 10))}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value={650}>Classic Spread (₹650/guest) - 2 Starters, 2 Mains, Rice/Breads, 1 Dessert, Mocktail</option>
                    <option value={850}>Grand Royal Banquet (₹850/guest) - 4 Starters (Lassoni Tikka, Spanakopita), 3 Mains, Breads, 2 Desserts, Mocktails</option>
                    <option value={1150}>Luxury Gourmet Soirée (₹1,150/guest) - Sizzlers, Chermoula Fish, Kebab Platters, Unlimited Mocktails & Freakshakes</option>
                  </select>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase mb-3">Celebration Enhancements (Optional)</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                      <input
                        type="checkbox"
                        checked={addonDecor}
                        onChange={(e) => setAddonDecor(e.target.checked)}
                        className="accent-amber-500 w-4 h-4 rounded"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-white">Bespoke Balloon Arch & Wooden Wall Decor (+₹3,500)</p>
                        <p className="text-neutral-400 text-[11px]">Personalized banner, helium balloons & fairy lighting setup.</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                      <input
                        type="checkbox"
                        checked={addonCake}
                        onChange={(e) => setAddonCake(e.target.checked)}
                        className="accent-amber-500 w-4 h-4 rounded"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-white">1kg Artisan Celebration Cake (+₹1,200)</p>
                        <p className="text-neutral-400 text-[11px]">Belgian chocolate truffle, red velvet, or blueberry fresh cream.</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 cursor-pointer hover:border-amber-500/40">
                      <input
                        type="checkbox"
                        checked={addonPhoto}
                        onChange={(e) => setAddonPhoto(e.target.checked)}
                        className="accent-amber-500 w-4 h-4 rounded"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-white">2-Hour Dedicated Event Photographer (+₹4,000)</p>
                        <p className="text-neutral-400 text-[11px]">Professional event portraits, candids & high-res edited album.</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Total Box */}
                <div className="p-6 rounded-2xl bg-neutral-950 border border-amber-500/40 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase font-semibold">Estimated Package Total:</span>
                    <p className="text-3xl font-display font-extrabold text-amber-400 mt-1">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[10px] text-neutral-500">*Exclusive of applicable GST (5%)</p>
                  </div>
                  <a
                    href={waInquiryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold text-xs py-3 px-5 shadow-lg flex items-center gap-2"
                  >
                    <i className="fab fa-whatsapp text-emerald-300 text-sm"></i> Inquire via WhatsApp
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Inclusions (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-neutral-800 space-y-6">
                <h3 className="text-xl font-serif font-bold text-white">All Party Packages Include:</h3>
                
                <ul className="space-y-3.5 text-xs text-neutral-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Private Section Reservation:</strong> Reserved dining booths or full hall section.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Dedicated Event Host:</strong> Seamless serving coordination and guest assistance.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Acoustic Sound System:</strong> Option to play customized party playlists via Bluetooth.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Complimentary Cake Cutting Setup:</strong> Plates, cutlery, candles, and cake presentation.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Balcony Photo Access:</strong> Unlimited golden hour photoshoot opportunities on the terrace.</span>
                  </li>
                </ul>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
                  <p className="text-xs text-amber-300 font-semibold mb-1 flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Speak with our Party Planner
                  </p>
                  <p className="text-lg font-bold text-white font-display">{CAFE_INFO.phone}</p>
                  <p className="text-[10px] text-neutral-400 mt-1">Available 11:00 AM – 10:00 PM Daily</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

