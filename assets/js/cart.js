// Palate Story - Shopping Cart & Order Manager

const CART_KEY = 'palate_story_cart_v1';
const RESTAURANT_PHONE = '917099018429'; // Palate Story Official Number from their Booking Posts

class PalateStoryCart {
  constructor() {
    this.items = this.loadCart();
    this.orderType = localStorage.getItem('palate_order_type') || 'takeaway';
    this.customerDetails = JSON.parse(localStorage.getItem('palate_customer_details') || '{}');
    this.initEventListeners();
    this.updateBadges();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error loading cart', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(this.items));
      this.updateBadges();
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { items: this.items } }));
    } catch (e) {
      console.error('Error saving cart', e);
    }
  }

  addItem(item, qty = 1) {
    const existingIndex = this.items.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      this.items[existingIndex].qty += qty;
    } else {
      this.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        type: item.type,
        qty: qty
      });
    }
    this.saveCart();
    this.showToast(`Added ${item.name} to order!`);
  }

  updateQty(id, delta) {
    const index = this.items.findIndex(i => i.id === id);
    if (index > -1) {
      this.items[index].qty += delta;
      if (this.items[index].qty <= 0) {
        this.items.splice(index, 1);
      }
      this.saveCart();
    }
  }

  removeItem(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.saveCart();
    this.showToast('Item removed from order');
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getTaxes() {
    return Math.round(this.getSubtotal() * 0.05); // 5% GST
  }

  getPackagingCharge() {
    if (this.items.length === 0) return 0;
    return this.orderType === 'dine-in' ? 0 : 25;
  }

  getTotal() {
    return this.getSubtotal() + this.getTaxes() + this.getPackagingCharge();
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  updateBadges() {
    const count = this.getItemCount();
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  showToast(message, type = 'success') {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
        <i class="fas fa-check"></i>
      </div>
      <div>
        <p class="text-sm font-semibold text-white">${message}</p>
      </div>
    `;
    toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  generateWhatsAppOrderLink(customerInfo) {
    if (this.items.length === 0) return null;
    let text = `*🍽️ NEW ORDER - PALATE STORY GUWAHATI*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Order Type:* ${this.orderType.toUpperCase()}\n`;
    text += `*Customer Name:* ${customerInfo.name || 'Guest'}\n`;
    text += `*Phone:* ${customerInfo.phone || 'Not provided'}\n`;
    if (customerInfo.address && this.orderType === 'delivery') {
      text += `*Delivery Address:* ${customerInfo.address}\n`;
    }
    if (customerInfo.notes) {
      text += `*Special Instructions:* ${customerInfo.notes}\n`;
    }
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*ORDER ITEMS:*\n`;
    this.items.forEach((item, index) => {
      text += `${index + 1}. ${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
    });
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Subtotal:* ₹${this.getSubtotal()}\n`;
    text += `*GST (5%):* ₹${this.getTaxes()}\n`;
    if (this.getPackagingCharge() > 0) {
      text += `*Packaging / Handling:* ₹${this.getPackagingCharge()}\n`;
    }
    text += `*Total Amount:* ₹${this.getTotal()}\n\n`;
    text += `_Please confirm my order and inform estimated preparation time. Thank you!_`;

    return `https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(text)}`;
  }

  initEventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
      this.updateBadges();
    });
  }
}

// Global cart instance
const cart = new PalateStoryCart();

