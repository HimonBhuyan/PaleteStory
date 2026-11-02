import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Trash2, Plus, Minus, X, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PALATE_STORY_MENU, CAFE_INFO } from '../data/menuData';

export const OrderPage = () => {
  const {
    cartItems,
    orderType,
    setOrderType,
    updateQty,
    removeItem,
    clearCart,
    getSubtotal,
    getTaxes,
    getPackagingCharge,
    getTotal,
    addItem,
    generateWhatsAppOrderLink,
  } = useCart();

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const topRecommendations = PALATE_STORY_MENU.slice(0, 4);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your basket is empty. Please add dishes before placing an order.');
      return;
    }

    if (!customer.name.trim() || !customer.phone.trim()) {
      alert('Please enter your Name and WhatsApp phone number.');
      return;
    }

    if (orderType === 'delivery' && !customer.address.trim()) {
      alert('Please provide a delivery address.');
      return;
    }

    const link = generateWhatsAppOrderLink(customer);
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 bg-neutral-950 border-b border-neutral-900">
        <div className="hero-ambient-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="gold-badge text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Dine-In Pre-Order & Takeaway
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Online Food Ordering
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
            Craving Palate Story at home or want your meal ready when you arrive at our Six Mile cafe? Order seamlessly via Zomato or direct WhatsApp.
          </p>
        </div>
      </section>

      {/* Official Zomato Banner */}
      <section className="py-10 bg-neutral-900/60 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-900 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-red-500/40 shrink-0 shadow-lg">
                <img src="./assets/images/cropped/zomato_post.jpg" alt="We Are Now On Zomato" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  Official Delivery Partner
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">We Are Now On Zomato!</h3>
                <p className="text-xs text-neutral-300">Fast doorstep delivery anywhere across Guwahati with live GPS rider tracking.</p>
              </div>
            </div>

            <a
              href={CAFE_INFO.zomatoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-zomato py-3 px-8 text-sm shadow-xl shrink-0"
            >
              <ExternalLink className="w-4 h-4 mr-1.5" /> Order on Zomato App
            </a>
          </div>
        </div>
      </section>

      {/* Main Order & Checkout */}
      <main className="py-14 bg-[#0e0f12] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Basket Items (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-neutral-800">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                  <div>
                    <h2 className="text-xl font-serif font-bold text-white">Your Order Basket</h2>
                    <p className="text-xs text-neutral-400">Review selected dishes or add recommended specialties below.</p>
                  </div>
                  {cartItems.length > 0 && (
                    <button
                      onClick={() => {
                        if (window.confirm('Clear all items from your basket?')) clearCart();
                      }}
                      className="text-xs text-neutral-400 hover:text-red-400 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear Basket
                    </button>
                  )}
                </div>

                {cartItems.length > 0 ? (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-neutral-900/70 border border-neutral-800 gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                          <div>
                            <h4 className="text-xs font-bold text-white leading-snug">{item.name}</h4>
                            <p className="text-amber-400 font-bold text-xs mt-0.5">₹{item.price} each</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-neutral-700 rounded-lg bg-neutral-950">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="w-7 h-7 flex items-center justify-center text-xs text-neutral-400 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-white">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="w-7 h-7 flex items-center justify-center text-xs text-neutral-400 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-bold text-white min-w-[50px] text-right">
                            ₹{item.price * item.qty}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-neutral-500 hover:text-red-400 text-xs p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-600 mb-3">
                      <ShoppingBasket className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">Your Basket is Empty</h4>
                    <p className="text-xs text-neutral-400 mb-5">Browse our menu and add your favorite dishes to begin your order.</p>
                    <Link to="/menu" className="btn-gold text-xs py-2 px-5">
                      Explore Full Menu
                    </Link>
                  </div>
                )}
              </div>

              {/* Quick Add Recommendations */}
              <div className="glass-card rounded-3xl p-6 border border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-300 uppercase tracking-wider mb-4">
                  ★ Frequently Ordered Together
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topRecommendations.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="flex items-center gap-2.5">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-bold text-white truncate max-w-[140px]">{item.name}</p>
                          <p className="text-[11px] text-amber-400">₹{item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => addItem(item)}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold hover:bg-amber-500 hover:text-black transition-colors"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Checkout & Dispatch (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
                <h3 className="text-lg font-serif font-bold text-white mb-4 pb-2 border-b border-neutral-800">
                  Order Type & Details
                </h3>

                {/* Mode Selector */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { id: 'takeaway', label: '🥡 Takeaway' },
                    { id: 'dine-in', label: '🍽️ Dine-In' },
                    { id: 'delivery', label: '🛵 Delivery' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setOrderType(mode.id)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                        orderType === mode.id
                          ? 'border border-amber-500 bg-amber-500/20 text-amber-300'
                          : 'border border-neutral-800 text-neutral-300 hover:border-amber-400'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>

                {/* Details Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Sharma"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Delivery Address *</label>
                      <input
                        type="text"
                        placeholder="Apartment / Road name in Guwahati"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">Kitchen Instructions (Optional)</label>
                    <input
                      type="text"
                      placeholder="Low spice, extra mint chutney, cutlery requested..."
                      value={customer.notes}
                      onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Bill Breakdown */}
                  <div className="pt-4 mt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-300">
                    <div className="flex justify-between">
                      <span>Item Subtotal:</span>
                      <span className="font-bold text-white">₹{getSubtotal()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (5%):</span>
                      <span className="text-neutral-400">₹{getTaxes()}</span>
                    </div>
                    {getPackagingCharge() > 0 && (
                      <div className="flex justify-between">
                        <span>Eco-Packaging Fee:</span>
                        <span className="text-neutral-400">₹{getPackagingCharge()}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t border-neutral-800/80 text-sm font-bold text-white">
                      <span>Total Amount:</span>
                      <span className="text-amber-400 font-display text-lg">₹{getTotal()}</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppCheckout}
                      className="btn-gold w-full py-3.5 text-xs font-bold shadow-xl flex items-center justify-center gap-2"
                    >
                      <i className="fab fa-whatsapp text-emerald-300 text-sm"></i> Send Order to Kitchen via WhatsApp
                    </button>
                    <p className="text-[10px] text-neutral-400 text-center">
                      Payment accepted via UPI (GPay, PhonePe, Paytm), Cards, or Cash upon pickup.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </main>

    </div>
  );
};

