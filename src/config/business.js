/**
 * Central Configuration for Cassey Forrre food
 * All business text, colors, services, contact information, and image URLs
 * reside exclusively in this file. Non-technical owners can edit this file
 * to update the entire website content.
 */

export const business = {
  name: "Cassey Forrre food",
  type: "Restaurant",
  tagline: "Fresh Ingredients, Unforgettable Flavours.",
  city: "Stoke-on-Trent",
  area: "Fenton",
  fullAddress: "55a Duke St, Fenton, Stoke-on-Trent ST4 3NR, UK",
  phone: "07460 690078",
  phoneRaw: "07460690078",
  email: "infokimberlydwright@gmail.com",
  whatsapp: null, // No WhatsApp number provided
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=55a+Duke+St,+Fenton,+Stoke-on-Trent+ST4+3NR,+UK",

  // Design Tokens and Brand Colors
  colors: {
    primary: "#121212", // Deep Rich Black
    primaryDark: "#0A0A0A",
    secondary: "#D4B996", // Warm Champagne Beige
    secondaryLight: "#F5EFE6", // Cream Beige
    secondarySubtle: "#FAF7F2", // Soft Pearl Off-White
    accent: "#C5A059", // Warm Muted Gold / Brass
    textMain: "#1A1A1A",
    textMuted: "#666059",
    textLight: "#F8F6F0",
    border: "#E7DFD5",
    borderDark: "#2D2A26",
    surfaceLight: "#FFFFFF",
    surfaceDark: "#181715",
  },

  // Calls to Action
  cta: {
    primary: "Order Online",
    secondary: "View Services",
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    eyebrow: "Fenton, Stoke-on-Trent • Restaurant",
    title: "Fresh Ingredients, Unforgettable Flavours.",
    subtitle: "From morning breakfast through evening dinner, enjoy freshly prepared meals and wholesome homemade recipes crafted daily on Duke Street.",
    trustBadge: "55a Duke St, Fenton, Stoke-on-Trent",
    ctaPrimary: "Order Online",
    ctaSecondary: "View Services",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    orderHoursNote: "Fresh meals prepared daily to order",
  },

  // Main Services
  servicesSection: {
    eyebrow: "Our Culinary Offerings",
    title: "Crafted with passion, served fresh",
    subtitle: "Every dish is prepared using quality ingredients, honoring both quick service and comforting homemade flavors.",
    items: [
      {
        id: "fresh-prep",
        title: "Fresh Food Preparation",
        description: "Every order begins with crisp produce and quality ingredients, prepared with precision in our local kitchen.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
        badge: "Daily Crafted",
      },
      {
        id: "breakfast",
        title: "Breakfast Service",
        description: "Hot, revitalizing morning meals to start your day right in Fenton, with freshly prepared favorites.",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=80",
        badge: "Morning",
      },
      {
        id: "lunch",
        title: "Lunch Service",
        description: "Satisfying midday dining prepared fresh and served promptly for quick breaks or relaxed gatherings.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80",
        badge: "Midday",
      },
      {
        id: "dinner",
        title: "Dinner Service",
        description: "Warm, satisfying evening meals prepared to order, bringing hearty comfort to your evening table.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
        badge: "Evening",
      },
      {
        id: "fast-food",
        title: "Fast Food",
        description: "Crispy, savory crowd-pleasers cooked to high culinary standards when you want delicious food fast.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80",
        badge: "Quick Service",
      },
      {
        id: "homemade",
        title: "Homemade Food",
        description: "Cherished recipes made from scratch, filled with rich seasoning and the authentic taste of home cooking.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
        badge: "From Scratch",
      },
      {
        id: "prepared-meals",
        title: "Freshly Prepared Meals",
        description: "Complete, balanced meal portions boxed hot and fresh, ready for convenient takeaway and enjoyment.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80",
        badge: "Takeaway Ready",
      },
    ],
  },

  // About Section
  about: {
    eyebrow: "Our Heritage & Craft",
    title: "Good food made honestly for the Fenton community",
    paragraphs: [
      "At Cassey Forrre food, we believe great dining starts with fresh ingredients and genuine culinary care. Every meal we serve is prepared to order, honoring the simple joy of well-cooked food.",
      "Located at 55a Duke Street in Fenton, Stoke-on-Trent, our restaurant offers an inviting blend of breakfast staples, hearty lunch specials, comforting evening dinners, and fast takeout options.",
      "Whether you are ordering your daily lunch, grabbing dinner on the way home, or gathering with friends, we welcome you with memorable flavours and attentive local service."
    ],
    highlightQuote: "Fresh Ingredients, Unforgettable Flavours.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "Prepared fresh on Duke Street, Fenton",
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "The Cassey Standard",
    title: "Why our guests choose Cassey Forrre food",
    subtitle: "Built on quality, freshness, and neighborhood hospitality in Stoke-on-Trent.",
    items: [
      {
        number: "01",
        title: "Fresh Ingredients Daily",
        description: "We source quality produce and meats, preparing our stocks and recipes every day with zero compromise on taste.",
      },
      {
        number: "02",
        title: "Homemade From Scratch",
        description: "Wholesome recipes cooked with traditional methods to deliver authentic depth of flavor in every bite.",
      },
      {
        number: "03",
        title: "Full Day Dining",
        description: "From energizing breakfasts and workday lunches to evening dinner plates, we provide hot meals whenever hunger strikes.",
      },
      {
        number: "04",
        title: "Attentive Local Service",
        description: "A friendly, community-first kitchen at 55a Duke St where orders are prepared swiftly and tailored with care.",
      },
    ],
  },

  // Contact Section
  contact: {
    eyebrow: "Visit & Contact",
    title: "Ready to order? Get in touch today",
    subtitle: "Call our Fenton kitchen directly to place your order, or stop by our location on Duke Street.",
    cards: [
      {
        label: "Visit Our Kitchen",
        value: "55a Duke St, Fenton, Stoke-on-Trent ST4 3NR, UK",
        actionText: "Open in Maps",
        actionHref: "https://www.google.com/maps/search/?api=1&query=55a+Duke+St,+Fenton,+Stoke-on-Trent+ST4+3NR,+UK",
        type: "map",
      },
      {
        label: "Call to Order",
        value: "07460 690078",
        actionText: "Call 07460 690078",
        actionHref: "tel:07460690078",
        type: "phone",
      },
      {
        label: "Direct Email",
        value: "infokimberlydwright@gmail.com",
        actionText: "Send an Email",
        actionHref: "mailto:infokimberlydwright@gmail.com",
        type: "email",
      },
    ],
    form: {
      heading: "Send an Order Inquiry or Message",
      subheading: "Need to order in advance or have a special dietary request? Drop us a note.",
      namePlaceholder: "Your full name",
      phonePlaceholder: "Phone number (for order confirmation)",
      emailPlaceholder: "Email address",
      servicePlaceholder: "Select dining service...",
      messagePlaceholder: "Tell us about your order or inquiry...",
      submitButton: "Send Inquiry",
      successMessage: "Thank you. Your inquiry has been sent to Cassey Forrre food. We will contact you promptly!",
    },
  },

  // FAQ Section (rendered because it genuinely assists customers ordering or visiting)
  faq: {
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about ordering and dining with us.",
    items: [
      {
        question: "How do I place an order for collection or takeout?",
        answer: "You can call us directly on 07460 690078 or submit an inquiry using our online form. We prepare your meal fresh so it is piping hot when you arrive.",
      },
      {
        question: "Where exactly are you located in Fenton?",
        answer: "We are located at 55a Duke St, Fenton, Stoke-on-Trent, ST4 3NR. There is convenient nearby street access for fast pick-ups.",
      },
      {
        question: "What dining services do you provide?",
        answer: "We offer fresh food preparation throughout the day, including breakfast service, lunch service, evening dinner, fast food favorites, and homemade takeaway meals.",
      },
      {
        question: "Can you accommodate dietary preferences or advance orders?",
        answer: "Yes. Feel free to call us or write your preferences in our order inquiry form, and our kitchen team will gladly assist you.",
      },
    ],
  },

  // Testimonials (Omitted per rule: {{TESTIMONIALS}} was empty, so no fake reviews)
  testimonials: null,

  // Online Order Modal Details
  orderModal: {
    title: "Order Online from Cassey Forrre food",
    subtitle: "Fresh meals prepared to order at 55a Duke St, Fenton",
    directCallPrompt: "For the fastest preparation, call our kitchen directly:",
    phone: "07460 690078",
    phoneHref: "tel:07460690078",
    options: [
      { id: "collection", title: "Takeaway / Collection", desc: "Pick up fresh hot food at 55a Duke St, Fenton" },
      { id: "inquiry", title: "Advance Order Inquiry", desc: "Submit your order details online for confirmation" },
    ],
  },

  // Footer Details
  footer: {
    copyrightNotice: `© ${new Date().getFullYear()} Cassey Forrre food. All rights reserved.`,
    locationText: "55a Duke St, Fenton, Stoke-on-Trent ST4 3NR, UK",
    phoneText: "07460 690078",
    emailText: "infokimberlydwright@gmail.com",
    tagline: "Fresh Ingredients, Unforgettable Flavours.",
  },
};

export default business;
