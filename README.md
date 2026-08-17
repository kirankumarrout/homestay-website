# The Olive House — Boutique Homestay

A responsive, animated boutique-homestay website built with React + Vite + Framer Motion.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Customize

Edit `src/main.jsx` for:
- property name and story
- room names, prices, occupancy and amenities
- gallery images
- testimonials
- WhatsApp number
- map location
- contact details

Edit `src/styles.css` for the color palette and layout.

## Contact form

The form works in demo mode and shows a success state.

For real email delivery, create a Formspree endpoint and add:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

to `.env.local`.

For production, a server-side email route (Resend/SMTP) is recommended so credentials are never exposed to the browser.

## Instagram

The footer currently links to Instagram. For a live Instagram feed, use Meta's official embed/API flow or a server-side social-feed integration rather than exposing access tokens in the client.

## Production checklist

- Replace placeholder property text, address and contact details.
- Replace demo Unsplash images with your own optimized WebP/AVIF property photos.
- Update the Google Maps embed to the exact property.
- Connect the booking form to your backend/database.
- Add real availability validation to prevent double booking.
- Add Open Graph image, favicon and structured data (`LodgingBusiness` / `Hotel`) for SEO.
- Add analytics and cookie/privacy handling if required.
