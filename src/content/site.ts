const fallbackSiteUrl = "https://morning-star-ledger-co.vercel.app";
const fallbackBookingUrl = "https://cal.com/morning-star-ledger";
const fallbackEmail = "ningning@morningstarledgerco.com";
const fallbackPhone = "(479) 856-1076";

const formatPhoneDigits = (phone: string) => phone.replace(/[^\d+]/g, "");

export const siteIdentity = {
  businessName: "Morning Star Ledger Co.",
  businessTagline: "Simple bookkeeping for small business.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl,
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || fallbackBookingUrl,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || fallbackEmail,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || fallbackPhone,
  get phoneDigits() {
    return formatPhoneDigits(this.phone);
  },
  metaTitle: "Morning Star Ledger Co. | Simple Bookkeeping Support",
  metaDescription:
    "Morning Star Ledger Co. offers bookkeeping, cleanup, and reporting support for small businesses.",
};

export const siteContent = {
  hero: {
    eyebrow: "Bookkeeping with a clear, modern touch",
    title: "Clear books for busy business owners.",
    description:
      "Morning Star Ledger Co. helps small businesses stay organized with dependable bookkeeping and straightforward support.",
  },
  highlights: [
    "Monthly bookkeeping",
    "Books cleanup",
    "Simple reporting",
  ],
  services: [
    {
      title: "Monthly bookkeeping",
      description: "Keep your books current and easier to manage.",
    },
    {
      title: "Cleanup work",
      description: "Catch up overdue records and restore order.",
    },
    {
      title: "Reporting",
      description: "Get a clearer view of how your business is doing.",
    },
  ],
  reasons: [
    {
      title: "Simple process",
      description: "A clean, low-stress approach from first call to monthly support.",
    },
    {
      title: "Clear communication",
      description: "Easy updates and practical answers without extra jargon.",
    },
    {
      title: "Steady support",
      description: "Reliable help that keeps your numbers easier to understand.",
    },
  ],
  about: {
    title: "A calm, polished bookkeeping partner.",
    description:
      "Morning Star Ledger Co. is built to feel professional, approachable, and easy to trust.",
  },
  faqs: [
    {
      question: "Do you help with overdue books?",
      answer: "Yes. Cleanup support is available for businesses that need to catch up.",
    },
    {
      question: "What services do you offer?",
      answer: "Monthly bookkeeping, cleanup work, and simple reporting support.",
    },
    {
      question: "How do I get started?",
      answer: "Use the consultation link to book an introductory call.",
    },
  ],
  cta: {
    title: "Ready for cleaner books?",
    description: "Book a consultation and start with a simpler path forward.",
  },
};
