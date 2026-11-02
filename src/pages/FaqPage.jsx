import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const FaqPage = () => {
  const [activeTopic, setActiveTopic] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      topic: 'reservations',
      q: 'Where is Palate Story located, and is parking available?',
      a: 'Palate Story is conveniently situated on the 2nd Floor, GS Road, right next to the Six Mile Flyover, Guwahati (PIN: 781022). The building features easy elevator and wide stair access. Roadside parking as well as commercial building parking are available for our patrons.',
    },
    {
      topic: 'dining',
      q: 'What are your opening hours and days of operation?',
      a: 'We are open 7 days a week from 11:30 AM to 10:30 PM. Our kitchen takes last orders at 10:00 PM. Weekend live music sessions generally kick off around 8:00 PM on Friday and Saturday evenings.',
    },
    {
      topic: 'dining',
      q: 'What cuisines do you serve? Are there pure vegetarian options?',
      a: 'Palate Story specializes in a curated tri-cuisine menu: Indian Clay Tandoor & Curries, Continental Grills & Italian Antipasti, and Indo-Chinese Wok Specialities. We have an extensive range of pure vegetarian dishes prepared in dedicated kitchen sections, including Greek Spanakopita, Tomato & Basil Bruschetta, Paneer Tikka Lababdar, wood-stone pizzas, and artisan mocktails.',
    },
    {
      topic: 'reservations',
      q: 'Can I specifically reserve a table on the outdoor balcony?',
      a: 'Yes! When using our online table booking system, simply choose "Outdoor Balcony Patio" as your seating preference. We recommend reserving balcony tables in advance, particularly for sunset (5:00 PM – 7:00 PM) and cool twilight dinners.',
    },
    {
      topic: 'music',
      q: 'Is there an extra ticket or cover charge for weekend live music?',
      a: 'No! Live acoustic music performances (including headline nights with artists like Rahul Gohain) are completely complimentary for all dining guests. We simply recommend reserving your table early as seating fills quickly on Friday and Saturday evenings.',
    },
    {
      topic: 'parties',
      q: 'How do I book the cafe for a birthday party or anniversary?',
      a: 'We love hosting celebrations! We offer tailored multi-course party packages starting from ₹650 per guest, custom balloon arch decor against our wooden slat wall, cake cutting setups, and dedicated host service. You can use our interactive Party Budget Calculator on our Celebrations page or call our event coordinator directly at +91 7099018429.',
    },
    {
      topic: 'parties',
      q: 'Can we bring our own birthday cake or do you bake in-house?',
      a: 'You are warmly welcome to bring your own celebration cake! We provide complimentary refrigeration, plates, cutlery, candles, and cake-stand setup. Alternatively, you can pre-order one of our 1kg handcrafted celebration cakes (Belgian chocolate truffle or red velvet) when booking your party package.',
    },
    {
      topic: 'delivery',
      q: 'How can I order food for delivery or takeaway?',
      a: 'Palate Story is officially listed on Zomato for home delivery across Guwahati. In addition, you can use our Online Ordering page to customize a takeaway order or pre-order your dine-in meal, which dispatches directly to our kitchen via WhatsApp (+91 7099018429).',
    },
    {
      topic: 'dining',
      q: 'What is the average dining cost for two people?',
      a: 'A comfortable, satisfying meal for two people typically ranges between ₹400 to ₹600 including beverages, making Palate Story an accessible, high-value premium cafe dining experience in Six Mile.',
    },
  ];

  const topics = [
    { id: 'all', label: 'All Questions' },
    { id: 'dining', label: 'Dining & Cuisines' },
    { id: 'reservations', label: 'Reservations & Balcony' },
    { id: 'music', label: 'Live Music Sessions' },
    { id: 'parties', label: 'Private Parties & Decor' },
    { id: 'delivery', label: 'Delivery & Takeaway' },
  ];

  const visibleFaqs = activeTopic === 'all'
    ? faqs
    : faqs.filter(f => f.topic === activeTopic);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-12 sm:py-16 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
        <div className="hero-ambient-glow"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Help & Information
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
            Everything you need to know about dining, seating reservations, weekend live music, party packages, and food delivery at Palate Story.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTopic(t.id);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTopic === t.id
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Container */}
      <main className="py-14 bg-[#0e0f12] flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="glass-card rounded-2xl border border-neutral-800 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-white text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Still Have Questions CTA */}
      <section className="py-14 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-amber-500/30 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 text-2xl flex items-center justify-center mx-auto">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Still Have Questions?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-light">
              Our friendly floor managers and kitchen team are always on hand to assist with custom requests, dietary restrictions, or large party arrangements.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${CAFE_INFO.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-xs py-3 px-6 flex items-center gap-1.5"
              >
                <i className="fab fa-whatsapp text-emerald-300 text-sm"></i> Message on WhatsApp
              </a>
              <a href={`tel:${CAFE_INFO.phone}`} className="btn-outline-gold text-xs py-3 px-6 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Call {CAFE_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

