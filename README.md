# Palate Story Guwahati - Official React Cafe Web Application

A modern, responsive web application designed for **Palate Story** (`@palatestoryghy`), built with **React 18, Vite 6, Tailwind CSS v4, React Router 6, and Lucide Icons**.

---

## 🛠️ Technology Stack & Architecture

* **Framework**: React 18 (SPA with Client-Side Routing)
* **Build Tool & Dev Server**: Vite 6 (Lightning-fast HMR & optimized production bundling)
* **Styling**: Tailwind CSS v4 + Bespoke Luxury Cafe Tokens & Micro-interactions
* **Routing**: React Router v6 (`HashRouter` for zero-configuration support across XAMPP subdirectories, Apache, and hosting platforms)
* **Icons**: Lucide React + Font Awesome 6
* **State Management**: React Context (`CartContext`) with `localStorage` persistence

---

## 🍽️ Brand Information & Insights

* **Brand Name**: PALATE STORY
* **Tagline**: *"Igniting your taste buds with every dish, one bite at a time."*
* **Cuisines**: Indian • Chinese • Continental
* **Rating**: 4.3 ★ (142+ Google Reviews)
* **Average Dining Cost**: ₹400 – ₹600 for two
* **Operating Hours**: Monday – Sunday: 11:30 AM – 10:30 PM
* **Direct Booking Phone / WhatsApp**: `+91 7099018429`
* **Instagram**: [@palatestoryghy](https://www.instagram.com/palatestoryghy/) | Managed by [@clickmediaghy](https://instagram.com/clickmediaghy)
* **Location**: 2nd Floor, GS Road, Near Six Mile Flyover, Guwahati, Assam 781022
* **Google Maps**: [View on Maps](https://maps.app.goo.gl/pXpBTow5EZE43PFFA)

---

## 📱 100% Responsive 10-Page Suite

1. **Home (`/`)**: Hero banner with authentic Google Maps interior photo, 4 feature pillars (Outdoor balcony, live music, tri-cuisine, custom celebrations), starring signature dishes, live music banner with Rahul Gohain, private party highlights, Google reviews, and Instagram feed.
2. **Menu (`/menu`)**: Interactive menu with live search, category pills (Starters, Mains, Mocktails, Desserts), diet filter (Veg / Non-Veg), cuisine filter (Indian, Continental, Chinese), spice meters, and instant "Add to Order".
3. **About Us (`/about`)**: Origin story, culinary philosophy, showcase of "The Artists" (the kitchen chef team in black chef coats), and architectural tour of the cane lamps, sage green plush booths, and outdoor balcony.
4. **Gallery (`/gallery`)**: Filterable photo gallery (Ambiance, Balcony, Food, Mocktails, Celebrations, Live Music) with 40+ authentic client photos and an interactive **Lightbox modal**.
5. **Reservations (`/reservations`)**: Table reservation form with guest count pills, date/slot pickers, seating zone preference (*Balcony Patio*, *Sage Booth*, *Romantic Heart Decor*, *Main Hall*), and an instant **1-Click WhatsApp booking generator**.
6. **Contact & Location (`/contact`)**: Interactive Google Maps embed, driving instructions near Six Mile Flyover, parking info, direct hotline `+91 7099018429`, and contact form.
7. **Events & Celebrations (`/events`)**: Birthday & anniversary packages, real photos from *Varenya's Birthday Party*, and an interactive **Live Party Budget Estimator** with add-on options (balloon arch, 1kg cake, photographer).
8. **What's On / Experiences (`/experiences`)**: Weekly schedule, featured headliner **Rahul Gohain Live**, Unplugged Fridays, Saturday Kebab Nights, Sunday Sunset Balcony Hour, and an Assamese musician demo submission link.
9. **Online Ordering (`/order`)**: Official **Zomato** ordering gateway + interactive cart simulator (Takeaway / Dine-in pre-order / Delivery) with subtotal, 5% GST, eco-packaging fee, and direct WhatsApp dispatch to the kitchen.
10. **FAQ (`/faq`)**: Categorized accordions answering questions regarding parking, balcony reservation, outside birthday cakes, weekend live music cover, vegetarian options, and party catering.

---

## 🚀 How to Run The Project

### 1. Development Mode (Vite Dev Server)
Run the following in the project root:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Any code edit will hot-reload instantly.

### 2. Production Build
To create a production-ready bundle:
```bash
npm run build
```
The optimized assets will be generated in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

### 4. Running via XAMPP Apache
Start Apache in the **XAMPP Control Panel**, and navigate to:
```
http://localhost/palate%20story/
```
or directly to:
```
http://localhost/palate%20story/dist/
```
The entry script (`index.php`) and `.htaccess` will automatically serve the compiled React SPA.

---

## 📁 Project Structure

```
palate story/
├── dist/                      # Compiled production bundle
├── public/
│   └── assets/
│       ├── images/cropped/    # 46 authentic client photos
│       └── images/brand/      # Logo and favicon SVGs
├── src/
│   ├── components/            # Reusable React components
│   │   ├── AnnouncementBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingActions.jsx
│   │   ├── DishCard.jsx
│   │   └── LightboxModal.jsx
│   ├── context/
│   │   └── CartContext.jsx    # React Cart Context & WhatsApp order generator
│   ├── data/
│   │   └── menuData.js        # Complete 30+ items menu & cafe info
│   ├── pages/                 # All 10 application pages
│   │   ├── HomePage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── ReservationsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── ExperiencesPage.jsx
│   │   ├── OrderPage.jsx
│   │   └── FaqPage.jsx
│   ├── App.jsx                # Router & layout shell
│   ├── index.css              # Tailwind CSS directives & custom styles
│   └── main.jsx               # React DOM entry point
├── static-html/               # Pure static HTML backup pages
├── index.html                 # Vite HTML template
├── index.php                  # XAMPP Apache bridge
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md
```
