import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Car, Building } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'party',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Thank you for reaching out to Palate Story! Our team will get back to you shortly.');
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: 'party', message: '' });
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Find Us & Say Hello
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Contact & Location
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
            Easily accessible on GS Road, Guwahati. Connect with us for bookings, private party inquiries, or just to say hi!
          </p>
        </div>
      </section>

      {/* Main Section */}
      <main className="py-14 bg-[#0e0f12] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3 Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="glass-card rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">Our Address</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {CAFE_INFO.address}
                </p>
                <p className="text-[11px] text-neutral-400 mt-2">
                  <span className="text-amber-400">★</span> Landmark: Right by Six Mile Flyover
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-800">
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1.5"
                >
                  Open Google Maps <i className="fas fa-external-link-alt text-[10px]"></i>
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">Direct Hotline</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Table reservations, takeaway orders & party inquiries.
                </p>
                <p className="text-base font-bold text-amber-400 mt-2 font-display">
                  {CAFE_INFO.phone}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center gap-4">
                <a href={`tel:${CAFE_INFO.phone}`} className="btn-gold text-xs py-2 px-3.5">
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${CAFE_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">Cafe Timings</h3>
                <div className="space-y-1.5 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span>Monday – Sunday:</span>
                    <span className="font-bold text-white">11:30 AM – 10:30 PM</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Last Kitchen Order:</span>
                    <span>10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Weekend Live Music:</span>
                    <span>8:00 PM Onwards</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-800">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Open Today
                </span>
              </div>
            </div>

          </div>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form (6 cols) */}
            <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 border border-neutral-800">
              <div className="mb-6">
                <span className="gold-badge text-[11px] font-bold px-3 py-1 rounded-full uppercase">Drop A Note</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-2">Send Us A Message</h3>
                <p className="text-xs text-neutral-400 mt-1">Whether you have feedback, collaboration proposals, or group party questions.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="party">Private Party / Celebration Inquiry</option>
                    <option value="reservation">Table Reservation Assistance</option>
                    <option value="feedback">Dine-in Experience Feedback</option>
                    <option value="artist">Musician / Performer Collab</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How can we help make your experience special?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold w-full py-3 text-xs shadow-lg flex items-center justify-center gap-1.5">
                  <Send className="w-3.5 h-3.5" /> Submit Message
                </button>
              </form>
            </div>

            {/* Map & Guide (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-card rounded-3xl overflow-hidden border border-amber-500/30 p-2 shadow-2xl">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                  <iframe
                    title="Palate Story Guwahati Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.96041042795!2d91.8029!3d26.1362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59339e80cbb1%3A0x6b633909ea172fa!2sSix%20Mile%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[120%]"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>

                  <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/95 backdrop-blur-md p-4 rounded-xl border border-amber-500/40 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <h4 className="text-xs font-bold text-white">PALATE STORY GUWAHATI</h4>
                      </div>
                      <p className="text-[10px] text-neutral-300">2nd Floor, GS Road, Six Mile (4.3★ Rating)</p>
                    </div>
                    <a
                      href={CAFE_INFO.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold text-[11px] py-1.5 px-3"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="glass-card rounded-2xl p-6 border border-neutral-800 space-y-4">
                <h4 className="font-serif font-bold text-white text-base">Travel & Parking Guide</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-white">Parking</p>
                      <p className="text-neutral-400">Ample roadside & commercial building parking available.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-white">Building Access</p>
                      <p className="text-neutral-400">2nd Floor with elevator and wide staircases.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Managed on Social by {CAFE_INFO.managedBy}</span>
                  <a href={CAFE_INFO.instagram} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
                    <i className="fab fa-instagram mr-1"></i> {CAFE_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
};
