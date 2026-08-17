import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Bath, BedDouble, CalendarDays, Car, Check,
  ChevronLeft, ChevronRight, Coffee, Facebook, Flame, Flower2, House,
  Instagram, Leaf, MapPin, Menu, MessageCircle, Moon, PawPrint, Play,
  Projector, ScreenShare, Sparkles, Star, Sun, Utensils, Users, Wifi, X
} from "lucide-react";
import "./styles.css";

const WA_NUMBER = "919999999999";
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

const rooms = [
  {
    name: "Standard Room",
    price: 4200,
    size: "220 sq ft",
    guests: 2,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    amenities: ["AC", "WiFi", "Queen bed", "Rain shower"],
    description: "A calm, beautifully finished room for slow mornings and restful nights."
  },
  {
    name: "Deluxe Room",
    price: 5600,
    size: "320 sq ft",
    guests: 3,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
    amenities: ["AC", "WiFi", "Balcony", "King bed"],
    description: "More room to breathe, with a private balcony overlooking the garden."
  },
  {
    name: "Family Suite",
    price: 7800,
    size: "520 sq ft",
    guests: 5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    amenities: ["AC", "WiFi", "Kitchenette", "2 bedrooms"],
    description: "A generous suite made for families, long weekends and unhurried dinners."
  },
  {
    name: "Private Cottage",
    price: 9500,
    size: "650 sq ft",
    guests: 4,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85",
    amenities: ["AC", "WiFi", "Private garden", "Kitchenette"],
    description: "Your own little hideaway with a garden, living room and total privacy."
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"
];

const amenities = [
  [Wifi, "Fast WiFi", "Work, stream or unwind."],
  [Car, "Private parking", "Easy, secure access."],
  [Utensils, "Fully equipped kitchen", "Cook like you are home."],
  [Flower2, "Garden", "Green spaces to slow down."],
  [Flame, "Bonfire evenings", "Warm nights under the stars."],
  [PawPrint, "Pet friendly", "Bring your four-legged friend."],
  [Coffee, "Breakfast", "Fresh, local and comforting."],
  [Bath, "Premium bathrooms", "Rain showers and thoughtful details."]
];

const testimonials = [
  { quote: "It feels less like a rental and more like staying at a stylish friend's home.", name: "Ananya & Arjun", meta: "Weekend stay" },
  { quote: "The cottage, garden and movie hall made our family trip genuinely special.", name: "Meera S.", meta: "Family vacation" },
  { quote: "Beautiful interiors, spotless rooms and the kind of quiet you actually notice.", name: "Rohan K.", meta: "3-night stay" }
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [dark, setDark] = useState(false);
  const [room, setRoom] = useState(rooms[0]);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const openBooking = (selectedRoom = room) => {
    setRoom(selectedRoom);
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextGallery = () => setLightbox((i) => i === null ? 0 : (i + 1) % gallery.length);
  const prevGallery = () => setLightbox((i) => i === null ? 0 : (i - 1 + gallery.length) % gallery.length);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT) {
      const data = new FormData(e.currentTarget);
      await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
    }
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={() => setMenu(false)}>
            <span className="brand-mark"><Leaf size={17}/></span>
            <span>THE OLIVE HOUSE</span>
          </a>
          <div className={`nav-links ${menu ? "open" : ""}`}>
            {["About", "Rooms", "Gallery", "Movie Hall", "Location"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMenu(false)}>{item}</a>
            ))}
            <button className="theme-btn" aria-label="Toggle theme" onClick={() => setDark(v => !v)}>
              {dark ? <Sun size={17}/> : <Moon size={17}/>}
            </button>
            <button className="nav-book" onClick={() => { openBooking(); setMenu(false); }}>Book now <ArrowUpRight size={16}/></button>
          </div>
          <button className="menu-btn" onClick={() => setMenu(v => !v)} aria-label="Open menu">
            {menu ? <X/> : <Menu/>}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
              <p className="eyebrow light"><span/> A boutique homestay in nature</p>
              <h1>Stay slowly.<br/><em>Feel at home.</em></h1>
              <p className="hero-copy">An intimate escape shaped by warm wood, quiet gardens, good food and the people you came with.</p>
              <div className="hero-actions">
                <button className="primary" onClick={() => openBooking()}>Book your stay <ArrowUpRight size={18}/></button>
                <a className="ghost" href="#rooms">Explore rooms <ArrowDown size={17}/></a>
              </div>
            </motion.div>
          </div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/></div>
        </section>

        <section id="about" className="section about container">
          <Reveal className="section-intro">
            <p className="eyebrow">01 — Our story</p>
            <h2>A little house with<br/><em>a lot of heart.</em></h2>
          </Reveal>
          <div className="about-grid">
            <Reveal>
              <p className="lead">The Olive House was created around a simple idea: a stay should feel personal, not packaged.</p>
              <p>We restored an old family property with natural materials, slow corners and plenty of sunlight. Every room has its own character, while the whole home is designed to make you exhale.</p>
              <p>Come for a weekend, stay for a little longer. Read a book in the garden, cook together, watch a movie after dinner and wake up without an alarm.</p>
              <a className="text-link" href="#booking">Plan your stay <ArrowUpRight size={15}/></a>
            </Reveal>
            <Reveal delay={.12} className="about-photo">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Warm boutique homestay interior" />
              <div className="photo-note"><span>EST. 2024</span><strong>Made for slow living.</strong></div>
            </Reveal>
          </div>
        </section>

        <section id="rooms" className="section rooms-section">
          <div className="container">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">02 — Rooms & stays</p>
                <h2>Choose your <em>corner.</em></h2>
              </div>
              <p>Four distinct stays. One feeling: completely at ease.</p>
            </Reveal>
            <div className="room-grid">
              {rooms.map((r, i) => (
                <Reveal key={r.name} delay={i * .07}>
                  <article className="room-card">
                    <div className="room-image">
                      <img src={r.image} alt={r.name}/>
                      <span className="room-number">0{i+1}</span>
                      <button className="view-btn" onClick={() => { setLightbox(gallery[i]); }}>View photos</button>
                    </div>
                    <div className="room-info">
                      <div className="room-title-row"><h3>{r.name}</h3><span>From ₹{r.price.toLocaleString("en-IN")} / night</span></div>
                      <p>{r.description}</p>
                      <div className="room-meta"><span><Users size={15}/>{r.guests} guests</span><span><House size={15}/>{r.size}</span></div>
                      <div className="chips">{r.amenities.map(a => <span key={a}>{a}</span>)}</div>
                      <button className="outline full" onClick={() => openBooking(r)}>Check availability <ArrowUpRight size={16}/></button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section container">
          <Reveal className="section-head">
            <div><p className="eyebrow">03 — Interiors</p><h2>Made to be <em>lived in.</em></h2></div>
            <p>Warm textures, old-world details and modern comforts in every corner.</p>
          </Reveal>
          <div className="masonry">
            {gallery.map((src, i) => (
              <motion.button whileHover={{ scale: .985 }} key={src} className={`gallery-item g${i}`} onClick={() => setLightbox(i)}>
                <img src={src} alt={`The Olive House interior ${i+1}`} loading="lazy"/>
                <span>View</span>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="movie-hall" className="movie-section">
          <div className="movie-photo" />
          <div className="movie-content">
            <p className="eyebrow light">04 — Movie hall</p>
            <h2>Movie nights,<br/><em>done properly.</em></h2>
            <p>Settle into our private 12-seat screening room for a film, a football match or a late-night comfort movie.</p>
            <div className="movie-specs">
              <div><Projector/><strong>4K</strong><span>Projector</span></div>
              <div><ScreenShare/><strong>120"</strong><span>Screen</span></div>
              <div><Users/><strong>12</strong><span>Seats</span></div>
              <div><Sparkles/><strong>7.1</strong><span>Surround</span></div>
            </div>
            <button className="primary" onClick={() => openBooking()}>Ask about a movie slot <ArrowUpRight size={17}/></button>
          </div>
        </section>

        <section className="section pricing container">
          <Reveal className="section-head">
            <div><p className="eyebrow">05 — Stay rates</p><h2>Simple, <em>transparent.</em></h2></div>
            <p>Peak dates may vary. Every booking includes breakfast, WiFi and access to shared spaces.</p>
          </Reveal>
          <div className="price-table">
            <div className="price-row price-header"><span>Room</span><span>Off-peak</span><span>Peak</span><span>Includes</span><span></span></div>
            {rooms.map(r => (
              <div className="price-row" key={r.name}>
                <strong>{r.name}</strong><span>₹{r.price.toLocaleString("en-IN")}</span><span>₹{Math.round(r.price * 1.2).toLocaleString("en-IN")}</span><span>Breakfast · WiFi · Garden</span><button onClick={() => openBooking(r)}><ArrowUpRight/></button>
              </div>
            ))}
          </div>
        </section>

        <section className="amenities-section">
          <div className="container">
            <Reveal className="section-intro centered"><p className="eyebrow">06 — Amenities</p><h2>The good <em>stuff.</em></h2></Reveal>
            <div className="amenity-grid">
              {amenities.map(([Icon, title, desc], i) => <Reveal delay={i*.04} key={title}><div className="amenity"><Icon/><h3>{title}</h3><p>{desc}</p></div></Reveal>)}
            </div>
          </div>
        </section>

        <section id="location" className="section location container">
          <Reveal className="section-head"><div><p className="eyebrow">07 — Find us</p><h2>Close to the action,<br/><em>far from the noise.</em></h2></div></Reveal>
          <div className="location-grid">
            <div className="map">
              <iframe title="The Olive House location" src="https://www.google.com/maps?q=Dehradun,India&output=embed" loading="lazy" />
            </div>
            <div className="nearby">
              <div className="address"><MapPin/><div><strong>The Olive House</strong><p>Example Road, Dehradun, Uttarakhand</p></div></div>
              <div className="distance"><span>Airport</span><strong>35 min</strong></div>
              <div className="distance"><span>Railway station</span><strong>20 min</strong></div>
              <div className="distance"><span>City centre</span><strong>15 min</strong></div>
              <div className="nearby-list"><p className="eyebrow">Nearby</p><span>🌲 Forest trails</span><span>☕ Local cafés</span><span>🏞️ Scenic viewpoints</span><span>🛍️ Local markets</span></div>
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <Reveal className="section-intro centered"><p className="eyebrow">08 — Guestbook</p><h2>Words from <em>our guests.</em></h2></Reveal>
            <div className="testimonial">
              <div className="stars">{[1,2,3,4,5].map(x => <Star key={x} fill="currentColor" size={18}/>)}</div>
              <AnimatePresence mode="wait">
                <motion.div key={testimonial} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>
                  <blockquote>“{testimonials[testimonial].quote}”</blockquote>
                  <p className="guest">{testimonials[testimonial].name} <span>· {testimonials[testimonial].meta}</span></p>
                </motion.div>
              </AnimatePresence>
              <div className="slider-controls"><button onClick={() => setTestimonial((testimonial-1+testimonials.length)%testimonials.length)}><ChevronLeft/></button><span>0{testimonial+1} / 0{testimonials.length}</span><button onClick={() => setTestimonial((testimonial+1)%testimonials.length)}><ChevronRight/></button></div>
            </div>
          </div>
        </section>

        <section id="booking" className="booking-section">
          <div className="container booking-grid">
            <Reveal>
              <p className="eyebrow light">09 — Reservations</p>
              <h2>Let's make<br/><em>your stay happen.</em></h2>
              <p>Tell us your dates and we'll get back to you with availability and the best room for your group.</p>
              <div className="booking-note"><CalendarDays/><span>Typical response time<br/><strong>within 2 hours</strong></span></div>
              <a className="whatsapp-link" href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire about staying at The Olive House.")}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat on WhatsApp</a>
            </Reveal>
            <Reveal delay={.12} className="booking-card">
              {submitted ? (
                <div className="success"><Check size={38}/><h3>Enquiry received.</h3><p>Thank you. We'll be in touch shortly.</p><button className="outline" onClick={() => setSubmitted(false)}>Send another enquiry</button></div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row"><label>Check-in<input name="checkin" type="date" required/></label><label>Check-out<input name="checkout" type="date" required/></label></div>
                  <div className="form-row"><label>Guests<select name="guests" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></label><label>Room<select name="room" value={room.name} onChange={e => setRoom(rooms.find(r => r.name === e.target.value))}>{rooms.map(r => <option key={r.name}>{r.name}</option>)}</select></label></div>
                  <label>Name<input name="name" placeholder="Your name" required/></label>
                  <label>Email<input name="email" type="email" placeholder="you@example.com" required/></label>
                  <label>Message<textarea name="message" rows="3" placeholder="Anything you'd like us to know?"></textarea></label>
                  <button className="primary full" type="submit">Request availability <ArrowUpRight size={18}/></button>
                  <small>By submitting, you agree to be contacted about your stay enquiry.</small>
                </form>
              )}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#home"><span className="brand-mark"><Leaf size={17}/></span><span>THE OLIVE HOUSE</span></a><p>A warm little home for slow days and good company.</p></div>
          <div><p className="footer-label">Explore</p><a href="#rooms">Rooms</a><a href="#gallery">Gallery</a><a href="#movie-hall">Movie Hall</a><a href="#location">Location</a></div>
          <div><p className="footer-label">Contact</p><a href="tel:+919999999999">+91 99999 99999</a><a href="mailto:hello@theolivehouse.in">hello@theolivehouse.in</a><span>Dehradun, Uttarakhand</span></div>
          <div><p className="footer-label">Follow along</p><div className="socials"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram/></a><a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook/></a><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle/></a></div><p className="instagram-hint">@theolivehouse.in</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 The Olive House</span><span>Made for slow living.</span></div>
      </footer>

      <a className="floating-wa" href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire about The Olive House.")}`} target="_blank" rel="noreferrer"><MessageCircle size={23}/></a>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setLightbox(null)}>
            <button className="lb-close" onClick={() => setLightbox(null)}><X/></button>
            <button className="lb-prev" onClick={(e) => {e.stopPropagation(); prevGallery();}}><ChevronLeft/></button>
            <img src={gallery[lightbox]} alt="Property gallery enlarged" onClick={e => e.stopPropagation()}/>
            <button className="lb-next" onClick={(e) => {e.stopPropagation(); nextGallery();}}><ChevronRight/></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
