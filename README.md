

# 🌿 The Olive House

### A warm, modern boutique homestay experience — designed for slow mornings, cozy evenings, and unforgettable stays.

<p align="center">
  <strong>🏡 Boutique Homestay · 🎬 Private Movie Hall · 🌿 Nature · ☕ Slow Living</strong>
</p>

<p align="center">
  <a href="https://github.com/kirankumarrout/homestay-website">GitHub</a>
  ·
  <a href="#-features">Features</a>
  ·
  <a href="#-getting-started">Getting Started</a>
  ·
  <a href="#-customization">Customization</a>
</p>

---

https://the-olive-house.netlify.app/

## ✨ Overview

**The Olive House** is a modern boutique homestay website built around a warm, intimate hospitality experience.

The design combines **earthy tones, natural textures, elegant typography, immersive photography, and subtle animations** to create a premium yet welcoming feel.

The website is designed to help guests:

* 🏡 Discover the property
* 🛏️ Explore rooms and cottages
* 📸 Browse interiors and property photography
* 🎬 Learn about the private movie hall
* 💰 Compare room pricing
* 📍 Explore the location
* ⭐ Read guest testimonials
* 📅 Request a booking
* 💬 Contact the property through WhatsApp

---

## 🎨 Design Philosophy

The visual identity is inspired by boutique hotels, countryside homes, and slow-living spaces.

### Color Palette

| Color         | Purpose                            |
| ------------- | ---------------------------------- |
| 🟤 Terracotta | Primary accent & CTAs              |
| 🤍 Warm Cream | Background                         |
| 🌿 Sage Green | Nature & secondary accents         |
| 🪵 Deep Wood  | Navigation, footer & dark sections |
| 🏡 Soft Beige | Cards & content sections           |

### Typography

**Playfair Display**
Used for large headings and editorial moments.

**DM Sans**
Used for navigation, body copy, buttons and UI elements.

The combination creates a balance between:

> **Elegant + Modern + Warm + Premium**

---

# 🚀 Features

## 🏠 Immersive Hero

* Full-screen property imagery
* Large editorial typography
* Primary booking CTA
* Smooth navigation
* Animated scroll indicator

---

## 🛏️ Rooms & Stays

The website supports multiple room types:

* Standard Room
* Deluxe Room
* Family Suite
* Private Cottage

Each room includes:

* 📐 Room size
* 👥 Maximum occupancy
* 💰 Nightly price
* ❄️ AC
* 📶 WiFi
* 🌿 Balcony / garden
* 🍳 Kitchenette
* 📸 Room photography

---

## 📸 Interactive Gallery

A responsive masonry gallery featuring:

* Interior photography
* Bedrooms
* Bathrooms
* Kitchen
* Garden
* Common areas

Click any image to open the **full-screen lightbox viewer**.

---

## 🎬 Private Movie Hall

A dedicated movie experience section featuring:

* 🎥 4K projector
* 🖥️ 120" screen
* 🔊 7.1 surround sound
* 🪑 12-seat capacity
* 🎞️ Private screening experience

---

## 💰 Dynamic Pricing

Pricing cards support:

* Off-peak pricing
* Peak pricing
* Room-specific rates
* Included amenities
* Direct booking CTA

---

## 🌿 Amenities

The property showcases:

* 📶 Fast WiFi
* 🚗 Private parking
* 🍳 Fully equipped kitchen
* 🌸 Garden
* 🔥 Bonfire
* 🐾 Pet friendly
* ☕ Breakfast
* 🛁 Premium bathrooms

---

## 📍 Location

Includes:

* Google Maps integration
* Property address
* Airport distance
* Railway station distance
* City centre distance
* Nearby attractions

---

## ⭐ Guest Testimonials

Animated testimonial carousel with:

* Guest name
* Stay type
* Review
* Star rating
* Navigation controls

---

## 📅 Booking / Enquiry Form

Guests can submit:

* Check-in date
* Check-out date
* Number of guests
* Room preference
* Name
* Email
* Message

The UI includes a confirmation state after submission.

---

## 💬 WhatsApp Integration

A floating WhatsApp button allows guests to start a conversation instantly.

The WhatsApp number can be configured from:

```text
src/main.jsx
```

---

## 🌙 Dark Mode

The website includes an optional dark/light mode switch.

The dark theme uses deeper wood and sage tones while maintaining the same boutique aesthetic.

---

# 🛠️ Tech Stack

| Technology        | Usage                       |
| ----------------- | --------------------------- |
| ⚛️ React          | UI development              |
| ⚡ Vite            | Development & build tooling |
| 🎞️ Framer Motion | Animations                  |
| 🎨 CSS            | Responsive design & styling |
| 🗺️ Google Maps   | Location                    |
| 💬 WhatsApp       | Guest communication         |
| 📧 Formspree      | Contact form integration    |
| 🖼️ Unsplash      | Demo photography            |

---

# 📁 Project Structure

```text
the-olive-house/
│
├── public/
│
├── src/
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/kirankumarrout/homestay-website.git
```

Move into the project:

```bash
cd homestay-website
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

---

## 4. Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# ⚙️ Customization

The website was intentionally structured so the property owner can easily replace the demo content.

## 🏡 Property Information

Update the property name, description and contact information inside:

```text
src/main.jsx
```

---

## 🛏️ Rooms

Room information is stored in a central array:

```javascript
const rooms = [
  {
    name: "Standard Room",
    price: 4200,
    size: "220 sq ft",
    guests: 2,
    image: "...",
    amenities: [
      "AC",
      "WiFi",
      "Queen bed"
    ]
  }
];
```

Add or remove rooms without changing the UI components.

---

## 📸 Gallery

Replace the demo images in:

```javascript
const gallery = [
  "...",
  "...",
  "..."
];
```

For production, use optimized **WebP or AVIF** images hosted on your CDN or storage provider.

---

## 💬 WhatsApp

Change:

```javascript
const WA_NUMBER = "919999999999";
```

to the actual WhatsApp number.

Use the international format without:

```text
+
spaces
-
```

Example:

```text
919876543210
```

---

## 🗺️ Google Maps

Replace the demo map URL with the actual property location:

```jsx
<iframe
  src="YOUR_GOOGLE_MAP_EMBED_URL"
/>
```

---

# 📧 Contact Form

The project supports Formspree.

Create a Formspree endpoint and add:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

to:

```text
.env.local
```

Then restart the development server.

> Never commit private API keys or credentials to GitHub.

---

# 📱 Responsive Design

The website is designed mobile-first and adapts to:

```text
📱 Mobile
       ↓
📱 Large Mobile
       ↓
💻 Tablet
       ↓
🖥️ Desktop
       ↓
🖥️ Large Desktop
```

Special attention is given to:

* Touch-friendly buttons
* Mobile navigation
* Responsive galleries
* Room cards
* Booking forms
* Typography scaling
* Image cropping

---

# ⚡ Performance

For production deployment, consider:

* WebP / AVIF images
* Image CDN
* Lazy loading
* CDN caching
* Brotli/Gzip compression
* Minified production builds
* Preloading critical hero assets

The gallery already uses lazy loading for non-critical images.

---

# 🔍 SEO

The project includes basic SEO metadata:

* Page title
* Meta description
* Keywords
* Open Graph title
* Open Graph description
* Responsive viewport
* Theme color

### Recommended production improvements

Add structured data using:

```text
LodgingBusiness
Hotel
LocalBusiness
```

Also add:

* `favicon`
* Open Graph image
* Twitter card
* Canonical URL
* Sitemap
* `robots.txt`

---

# 🌐 Deployment

This project can be deployed easily using:

### Vercel

```bash
npm run build
```

Connect the GitHub repository to Vercel.

### Netlify

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

### GitHub Pages

The project can also be configured for GitHub Pages with an appropriate Vite base path.

---

# 🧭 Roadmap

Future improvements could include:

* [ ] Real room availability
* [ ] Online booking confirmation
* [ ] Payment gateway
* [ ] Admin dashboard
* [ ] Booking database
* [ ] Seasonal pricing engine
* [ ] Coupon codes
* [ ] Guest login
* [ ] Booking history
* [ ] Email notifications
* [ ] WhatsApp booking notifications
* [ ] Instagram API feed
* [ ] 360° room tours
* [ ] Google Reviews integration
* [ ] Multi-property support
* [ ] Multi-language support

---

# 🔐 Production Architecture

For a production hospitality platform, the frontend can eventually be connected to:

```text
                    ┌─────────────────────┐
                    │   Guest / Visitor   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │   Homestay Website  │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
           Booking API    Payment API    WhatsApp
                │
                ▼
          ┌──────────────┐
          │   Database   │
          └──────┬───────┘
                 │
                 ▼
          ┌──────────────┐
          │ Admin Panel  │
          └──────────────┘
```

This would allow the property owner to manage:

* Rooms
* Availability
* Prices
* Bookings
* Guests
* Payments
* Testimonials
* Gallery
* Movie hall slots

---

# 🤝 Contributing

Contributions, suggestions and improvements are welcome.

```bash
git checkout -b feature/my-feature
```

Make your changes, then:

```bash
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

Open a Pull Request on GitHub.

---

# 📄 License

This project is currently intended for personal/commercial homestay website use.

Add an appropriate open-source license if you plan to distribute the source publicly.

---

# 🌿 Final Note

The Olive House is more than a booking page.

It is designed around the feeling of arriving somewhere and immediately thinking:

> **“I could stay here for a while.”**

---

<p align="center">
  <strong>🏡 The Olive House</strong>
  <br/>
  <sub>Stay slowly. Feel at home.</sub>
</p>
