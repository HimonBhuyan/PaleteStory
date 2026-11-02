import React, { useState } from 'react';
import { Users, Calendar as CalendarIcon, Clock, Armchair, User, Phone, CheckCircle, Headset, X } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const ReservationsPage = () => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2026-11-03');
  const [time, setTime] = useState('07:30 PM');
  const [seating, setSeating] = useState('Outdoor Balcony Patio');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    refId: '',
    name: '',
    date: '',
    time: '',
    guests: '',
    seating: '',
    waLink: '',
  });

  const guestOptions = [
    { label: '1', val: '1' },
    { label: '2 (Couple)', val: '2' },
    { label: '3-4', val: '4' },
    { label: '5-8', val: '6' },
    { label: '9+ (Group)', val: '10+' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      alert('Please fill out all mandatory fields (Name, Phone, Date, Time).');
      return;
    }

    const refId = 'PS-' + Math.floor(100000 + Math.random() * 900000);
    let msg = `*🥂 TABLE RESERVATION CONFIRMATION - PALATE STORY*\n`;
    msg += `Booking Ref: *${refId}*\n`;
    msg += `Name: *${name}*\n`;
    msg += `Phone: *${phone}*\n`;
    msg += `Date & Time: *${date} at ${time}*\n`;
    msg += `Guests: *${guests} People*\n`;
    msg += `Seating Preference: *${seating}*\n`;
    if (notes) msg += `Special Note: *${notes}*\n`;
    msg += `\nPlease confirm table availability. Thank you!`;

    const waLink = `https://wa.me/${CAFE_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;

    setConfirmationModal({
      isOpen: true,
      refId,
      name,
      date,
      time,
      guests,
      seating,
      waLink,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Table Reservations
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Reserve Your Table
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
            Whether it's an intimate date night, weekend live acoustic performance, or a family celebration, reserve your spot easily with instant confirmation.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <main className="py-14 bg-[#0e0f12] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Booking Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative">
                
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-white">Dining Details</h2>
                    <p className="text-xs text-neutral-400 mt-1">Fill out the form below to secure your preferred dining area.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold">
                    No Pre-payment
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Guest Pills */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-amber-400" /> Number of Guests *
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {guestOptions.map((g) => (
                        <button
                          key={g.val}
                          type="button"
                          onClick={() => setGuests(g.val)}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                            guests === g.val
                              ? 'border border-amber-500 bg-amber-500/20 text-amber-300'
                              : 'border border-neutral-800 text-neutral-300 hover:border-amber-400'
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CalendarIcon className="w-4 h-4 text-amber-400" /> Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                        min="2026-11-02"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-amber-400" /> Time Slot *
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <optgroup label="Lunch Service">
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="01:30 PM">01:30 PM</option>
                          <option value="02:30 PM">02:30 PM</option>
                        </optgroup>
                        <optgroup label="Sunset & High Tea">
                          <option value="04:30 PM">04:30 PM</option>
                          <option value="05:30 PM">05:30 PM</option>
                          <option value="06:30 PM">06:30 PM</option>
                        </optgroup>
                        <optgroup label="Dinner & Live Music">
                          <option value="07:30 PM">07:30 PM (Dinner)</option>
                          <option value="08:30 PM">08:30 PM (Live Music Special)</option>
                          <option value="09:15 PM">09:15 PM (Late Evening)</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Seating Area Preference */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Armchair className="w-4 h-4 text-amber-400" /> Seating Preference *
                    </label>
                    <select
                      value={seating}
                      onChange={(e) => setSeating(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Outdoor Balcony Patio">🌿 Outdoor Balcony Patio (Breezy, View of Six Mile)</option>
                      <option value="Intimate Sage Booth">🛋️ Intimate Sage Green Booth (Cozy, Private)</option>
                      <option value="Romantic Balloon Heart Setting">❤️ Romantic Couple Table (Special Heart Balloon Decor)</option>
                      <option value="Main Dining Hall">🎉 Main Dining Hall (Near Logo Wall & Live Music)</option>
                    </select>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-amber-400" /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-amber-400" /> Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Special Occasion or Requests (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Birthday, anniversary candle, child high-chair, or low spice preference..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-gold w-full py-4 text-base shadow-xl">
                    <CheckCircle className="w-5 h-5 mr-1.5" /> Confirm Table Reservation Request
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center">
                    Tables are held for 15 minutes past reserved time. For groups larger than 12, call{' '}
                    <a href={`tel:${CAFE_INFO.phone}`} className="text-amber-400 underline font-semibold">
                      {CAFE_INFO.phone}
                    </a>.
                  </p>

                </form>

              </div>
            </div>

            {/* Right: Ambience Showcase (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card rounded-2xl p-6 border border-neutral-800">
                <h3 className="text-lg font-serif font-bold text-white mb-4">
                  Our Seating Experiences
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <img src="./assets/images/cropped/balcony_patio.jpg" alt="Balcony" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Outdoor Balcony Patio</h4>
                      <p className="text-[11px] text-neutral-400">Natural breeze, plants & city skyline view. Perfect for evening coffee & starters.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <img src="./assets/images/cropped/maps_main_interior.jpg" alt="Romantic Decor" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Romantic Heart Ambience</h4>
                      <p className="text-[11px] text-neutral-400">Hanging red hearts & warm cane glow for unforgettable anniversaries & dates.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <img src="./assets/images/cropped/booth_seating.jpg" alt="Cozy Booth" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Plush Sage Booths</h4>
                      <p className="text-[11px] text-neutral-400">Padded banquette seating with directional lamps for private conversations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Concierge Help */}
              <div className="glass-card rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-950/30 to-neutral-900">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Headset className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Need Urgent Assistance?</h4>
                    <p className="text-[11px] text-neutral-400">Direct Table Concierge Hotline</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                  Have last-minute table changes or special celebration requests? Speak directly with our floor manager.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${CAFE_INFO.phone}`} className="btn-gold text-xs py-2.5 px-4 text-center justify-center flex-1">
                    <Phone className="w-3.5 h-3.5 mr-1.5" /> Call {CAFE_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${CAFE_INFO.phoneRaw}?text=Hi%20Palate%20Story%2C%20I%20would%20like%20to%20check%20table%20availability%20for%20today.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-gold text-xs py-2.5 px-4 text-center justify-center flex-1"
                  >
                    <i className="fab fa-whatsapp text-emerald-400 mr-1.5"></i> WhatsApp
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      {confirmationModal.isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl p-8 max-w-lg w-full border border-amber-500/50 shadow-2xl relative text-center space-y-5">
            <button
              onClick={() => setConfirmationModal({ isOpen: false })}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 text-3xl flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Booking Request Received</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Table Reserved For <span className="text-amber-300">{confirmationModal.name}</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Reference ID: <span className="font-mono text-amber-400 font-bold">{confirmationModal.refId}</span>
              </p>
            </div>

            <div className="bg-neutral-900/90 rounded-2xl p-4 border border-neutral-800 text-xs text-neutral-300 space-y-2 text-left">
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Date & Slot:</span>
                <span className="font-semibold text-white">{confirmationModal.date} at {confirmationModal.time}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                <span className="text-neutral-400">Party Size & Zone:</span>
                <span className="font-semibold text-white">{confirmationModal.guests} Guests ({confirmationModal.seating})</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-400">Location:</span>
                <span className="font-semibold text-white">2nd Floor, GS Road, Six Mile</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400">
              Click below to send a pre-filled confirmation directly to our restaurant manager on WhatsApp for priority seating!
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={confirmationModal.waLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold py-3 text-sm flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i> Confirm on WhatsApp
              </a>
              <button
                onClick={() => setConfirmationModal({ isOpen: false })}
                className="text-xs text-neutral-400 hover:text-white py-2"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
