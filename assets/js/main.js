// Palate Story - Main UI Controller

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initLightbox();
  initReservationForm();
  initEventCalculator();
  initFaqAccordion();
  highlightActiveNav();
});

// Mobile Drawer Controls
function initMobileDrawer() {
  const openBtn = document.getElementById('drawer-open-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');

  if (!drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
}

// Active Nav link highlight
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-amber-400', 'font-bold');
      link.classList.remove('text-neutral-300');
    }
  });
}

// Lightbox Modal for Gallery Images
function initLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  const imgElement = document.getElementById('lightbox-img');
  const captionElement = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !imgElement) return;

  document.querySelectorAll('[data-lightbox-src]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-lightbox-src') || el.getAttribute('src');
      const caption = el.getAttribute('data-caption') || el.getAttribute('alt') || 'Palate Story';
      imgElement.src = src;
      if (captionElement) captionElement.textContent = caption;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

// Reservation Form Handler
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value;
    const phone = form.querySelector('[name="phone"]')?.value;
    const email = form.querySelector('[name="email"]')?.value || 'Not provided';
    const guests = form.querySelector('[name="guests"]')?.value;
    const date = form.querySelector('[name="date"]')?.value;
    const time = form.querySelector('[name="time"]')?.value;
    const seating = form.querySelector('[name="seating"]')?.value;
    const specialRequests = form.querySelector('[name="notes"]')?.value || 'None';

    if (!name || !phone || !date || !time) {
      alert('Please fill in all mandatory fields (Name, Phone, Date, Time).');
      return;
    }

    const bookingRef = 'PS-' + Math.floor(100000 + Math.random() * 900000);
    
    // Save to LocalStorage for user's record
    const bookingData = {
      bookingRef,
      name,
      phone,
      email,
      guests,
      date,
      time,
      seating,
      specialRequests,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('last_reservation', JSON.stringify(bookingData));

    // Show Confirmation Modal or Alert
    const modal = document.getElementById('reservation-success-modal');
    if (modal) {
      document.getElementById('res-ref-display').textContent = bookingRef;
      document.getElementById('res-name-display').textContent = name;
      document.getElementById('res-date-display').textContent = `${date} at ${time}`;
      document.getElementById('res-guests-display').textContent = `${guests} Guests (${seating})`;
      
      // Setup WhatsApp confirmation button
      const waBtn = document.getElementById('res-wa-btn');
      if (waBtn) {
        let msg = `*🥂 TABLE RESERVATION CONFIRMATION - PALATE STORY*\n`;
        msg += `Booking Ref: *${bookingRef}*\n`;
        msg += `Name: *${name}*\n`;
        msg += `Phone: *${phone}*\n`;
        msg += `Date & Time: *${date} at ${time}*\n`;
        msg += `Guests: *${guests} People*\n`;
        msg += `Seating Preference: *${seating}*\n`;
        if (specialRequests !== 'None') msg += `Special Note: *${specialRequests}*\n`;
        msg += `\nPlease confirm table availability. Thank you!`;
        waBtn.href = `https://wa.me/917099018429?text=${encodeURIComponent(msg)}`;
      }

      modal.classList.add('active');
    } else {
      alert(`Thank you, ${name}! Your table reservation request (${bookingRef}) has been received. Our team will contact you at ${phone} to confirm.`);
      form.reset();
    }
  });
}

// Event & Private Celebration Estimator
function initEventCalculator() {
  const eventForm = document.getElementById('event-inquiry-form');
  if (!eventForm) return;

  const guestsInput = eventForm.querySelector('#event-guests');
  const packageSelect = eventForm.querySelector('#event-package');
  const decorCheck = eventForm.querySelector('#addon-decor');
  const cakeCheck = eventForm.querySelector('#addon-cake');
  const photoCheck = eventForm.querySelector('#addon-photo');
  const estimateDisplay = document.getElementById('event-estimate-display');

  const calculateTotal = () => {
    if (!estimateDisplay) return;
    const guests = parseInt(guestsInput?.value || '20', 10);
    const basePricePerPerson = parseInt(packageSelect?.value || '650', 10);
    let total = guests * basePricePerPerson;

    if (decorCheck && decorCheck.checked) total += 3500; // Balloon Arch & Fairy Light Decor
    if (cakeCheck && cakeCheck.checked) total += 1200; // 1kg Artisan Celebration Cake
    if (photoCheck && photoCheck.checked) total += 4000; // 2-hr Dedicated Photographer

    estimateDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;
  };

  [guestsInput, packageSelect, decorCheck, cakeCheck, photoCheck].forEach(el => {
    if (el) el.addEventListener('input', calculateTotal);
    if (el) el.addEventListener('change', calculateTotal);
  });

  calculateTotal();
}

// FAQ Accordion
function initFaqAccordion() {
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

