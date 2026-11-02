import React, { createContext, useContext, useState, useEffect } from 'react';
import { CAFE_INFO } from '../data/menuData';

const CartContext = createContext();

const CART_STORAGE_KEY = 'palate_story_cart_react_v1';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  const [orderType, setOrderType] = useState('takeaway');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addItem = (item, qty = 1) => {
    setCartItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].qty += qty;
        return copy;
      }
      return [...prev, {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        type: item.type,
        qty: qty
      }];
    });
    showToast(`Added ${item.name} to order!`);
  };

  const updateQty = (id, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
    showToast('Item removed from order');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  };

  const getTaxes = () => {
    return Math.round(getSubtotal() * 0.05); // 5% GST
  };

  const getPackagingCharge = () => {
    if (cartItems.length === 0) return 0;
    return orderType === 'dine-in' ? 0 : 25;
  };

  const getTotal = () => {
    return getSubtotal() + getTaxes() + getPackagingCharge();
  };

  const getItemCount = () => {
    return cartItems.reduce((acc, item) => acc + item.qty, 0);
  };

  const generateWhatsAppOrderLink = (customerInfo = {}) => {
    if (cartItems.length === 0) return null;
    let text = `*🍽️ NEW ORDER - PALATE STORY GUWAHATI*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Order Type:* ${orderType.toUpperCase()}\n`;
    text += `*Customer Name:* ${customerInfo.name || 'Guest'}\n`;
    text += `*Phone:* ${customerInfo.phone || 'Not provided'}\n`;
    if (customerInfo.address && orderType === 'delivery') {
      text += `*Delivery Address:* ${customerInfo.address}\n`;
    }
    if (customerInfo.notes) {
      text += `*Special Instructions:* ${customerInfo.notes}\n`;
    }
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*ORDER ITEMS:*\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
    });
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Subtotal:* ₹${getSubtotal()}\n`;
    text += `*GST (5%):* ₹${getTaxes()}\n`;
    if (getPackagingCharge() > 0) {
      text += `*Packaging / Handling:* ₹${getPackagingCharge()}\n`;
    }
    text += `*Total Amount:* ₹${getTotal()}\n\n`;
    text += `_Please confirm my order and inform estimated preparation time. Thank you!_`;

    return `https://wa.me/${CAFE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      orderType,
      setOrderType,
      addItem,
      updateQty,
      removeItem,
      clearCart,
      getSubtotal,
      getTaxes,
      getPackagingCharge,
      getTotal,
      getItemCount,
      generateWhatsAppOrderLink
    }}>
      {children}

      {/* Global Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-[#1e2128] text-white px-5 py-3 rounded-xl border-l-4 border-amber-500 shadow-2xl flex items-center gap-3 animate-slide-in">
          <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
            ✓
          </div>
          <p className="text-sm font-semibold">{toast}</p>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

