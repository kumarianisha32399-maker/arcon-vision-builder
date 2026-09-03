// Central mock data for Prospera Arcon LLP.
// All image URLs live here so they can be swapped easily later.

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  aboutSecondary:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80",
  portrait: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  projects: {
    heights: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    square: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    clover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    urban: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80",
  },
  gallery: {
    g1: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    g2: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    g3: "https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=1200&q=80",
    g4: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
    g5: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
    g6: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    g7: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    g8: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80",
  },
};

export type Service = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  icon: string;
  enabled: boolean;
  order: number;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  status: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  enabled: boolean;
  featured: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  enabled: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  image: string;
  enabled: boolean;
};

export type Enquiry = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  status: "new" | "contacted" | "completed";
  createdAt: string;
};

export type Stat = { id: string; value: string; label: string };
export type WhyUsItem = { id: string; title: string; description: string; icon: string };

export type SiteData = {
  company: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    longDescription: string;
    address: string;
    phone: string;
    email: string;
    llpin: string;
    incorporationDate: string;
    businessActivity: string;
    status: string;
    registrar: string;
  };
  settings: {
    siteTitle: string;
    metaDescription: string;
    logoText: string;
    logoSubtitle: string;
    footerText: string;
    copyright: string;
    social: { facebook: string; instagram: string; linkedin: string; twitter: string };
  };
  homepage: {
    heroHeading: string;
    heroSubheading: string;
    heroImage: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroBadges: string[];
    aboutHeading: string;
    aboutText: string;
    aboutHighlights: string[];
    aboutImage: string;
    aboutCta: string;
    stats: Stat[];
    whyUsHeading: string;
    whyUsSubheading: string;
    whyUs: WhyUsItem[];
    ctaHeading: string;
    ctaText: string;
    ctaImage: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  leadership: { name: string; designation: string; description: string; image: string };
  services: Service[];
  projects: Project[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  enquiries: Enquiry[];
};

export const PROCESS_STEPS = [
  { step: "01", title: "Consultation", text: "Understanding your goals, site conditions and budget parameters." },
  { step: "02", title: "Planning", text: "Feasibility, approvals strategy and a clear project roadmap." },
  { step: "03", title: "Design & Development", text: "Architectural design refined for function, quality and value." },
  { step: "04", title: "Execution", text: "Disciplined on-site construction with structured supervision." },
  { step: "05", title: "Quality Review", text: "Rigorous inspection at every milestone before sign-off." },
  { step: "06", title: "Project Handover", text: "Complete documentation and a seamless handover experience." },
];

export const GALLERY_CATEGORIES = ["Residential", "Commercial", "Construction", "Architecture", "Infrastructure"];
export const SERVICE_ICONS = ["building", "home", "briefcase", "landmark", "clipboard", "route"] as const;

export const defaultData: SiteData = {
  company: {
    name: "Prospera Arcon LLP",
    shortName: "Prospera Arcon",
    tagline: "Construction & Real Estate, Pune",
    description:
      "Prospera Arcon LLP is a Pune-based real estate and construction firm focused on building quality spaces, reliable infrastructure and long-term value.",
    longDescription:
      "Prospera Arcon LLP is a recently established Limited Liability Partnership based in Pune, Maharashtra, focused on construction and real estate-related activities.\n\nThe company aims to deliver quality construction and development solutions with a strong emphasis on professionalism, reliability and long-term value.",
    address: "F 8 Clover Pinnacle Ridge, S.No. 33/2/75, Kondhwa, Pune City, Pune, Maharashtra, India - 411048",
    phone: "+91 90350 92921",
    email: "support.prosperaarconllp.com",
    llpin: "ACY-0679",
    incorporationDate: "May 12, 2026",
    businessActivity: "Construction of buildings and real estate-related activities",
    status: "Active",
    registrar: "ROC Pune",
  },
  settings: {
    siteTitle: "Prospera Arcon LLP Pune | Construction & Real Estate",
    metaDescription:
      "Prospera Arcon LLP Pune is a construction and real estate company focused on quality development, professional execution and long-term value.",
    logoText: "PROSPERA ARCON LLP",
    logoSubtitle: "PUNE",
    footerText: "Pune-based construction and real estate company focused on quality, reliability and long-term value.",
    copyright: "© 2026 Prospera Arcon LLP. All Rights Reserved.",
    social: { facebook: "#", instagram: "#", linkedin: "#", twitter: "#" },
  },
  homepage: {
    heroHeading: "Building Tomorrow. Creating Lasting Value.",
    heroSubheading:
      "Prospera Arcon LLP is a Pune-based real estate and construction firm focused on building quality spaces, reliable infrastructure and long-term value.",
    heroImage: IMAGES.hero,
    heroPrimaryCta: "Explore Our Work",
    heroSecondaryCta: "Get In Touch",
    heroBadges: ["Pune Based", "Construction & Real Estate", "Professional & Reliable", "Quality Driven"],
    aboutHeading: "Building With Purpose.",
    aboutText:
      "Prospera Arcon LLP is a Pune-based construction and real estate company established to deliver dependable, well-crafted developments. From residential communities to commercial spaces, we bring structured planning, quality workmanship and a long-term perspective to every project we undertake.",
    aboutHighlights: ["Construction", "Real Estate", "Quality", "Professionalism", "Long-term Value"],
    aboutImage: IMAGES.about,
    aboutCta: "Know More About Us",
    stats: [
      { id: "s1", value: "2026", label: "Incorporated" },
      { id: "s2", value: "Pune", label: "Based In" },
      { id: "s3", value: "100%", label: "Quality Focused" },
      { id: "s4", value: "24/7", label: "Commitment" },
    ],
    whyUsHeading: "Why Choose Prospera Arcon",
    whyUsSubheading: "A disciplined, transparent approach to construction and development in Pune.",
    whyUs: [
      { id: "w1", title: "Quality First", description: "Focused on delivering reliable construction and development solutions.", icon: "award" },
      { id: "w2", title: "Professional Approach", description: "Structured planning and professional execution at every stage.", icon: "clipboard" },
      { id: "w3", title: "Trust & Transparency", description: "Clear communication and a client-first approach.", icon: "shield" },
      { id: "w4", title: "Pune Expertise", description: "Strong understanding of Pune's real estate and construction environment.", icon: "map" },
      { id: "w5", title: "Long-Term Vision", description: "Focused on creating lasting value through thoughtful development.", icon: "eye" },
    ],
    ctaHeading: "Let's Build Something Valuable Together.",
    ctaText: "Discuss your next construction, development or real estate project with Prospera Arcon LLP.",
    ctaImage: IMAGES.cta,
    ctaPrimary: "Call Us",
    ctaSecondary: "Send Enquiry",
  },
  leadership: {
    name: "Vikesh Kantilal Chhajed",
    designation: "Designated Partner",
    description:
      "Vikesh Kantilal Chhajed leads Prospera Arcon LLP with a focus on disciplined execution, transparent client relationships and long-term value creation. His leadership brings together construction expertise and a deep understanding of Pune's real estate landscape.",
    image: IMAGES.portrait,
  },
  services: [
    { id: "sv1", title: "Building Construction", description: "Planning and execution of high-quality building construction projects.", category: "Construction", image: IMAGES.gallery.g2, icon: "building", enabled: true, order: 1 },
    { id: "sv2", title: "Residential Projects", description: "Development and construction solutions for modern residential spaces.", category: "Residential", image: IMAGES.gallery.g1, icon: "home", enabled: true, order: 2 },
    { id: "sv3", title: "Commercial Construction", description: "Professional commercial construction solutions with a focus on functionality and quality.", category: "Commercial", image: IMAGES.projects.square, icon: "briefcase", enabled: true, order: 3 },
    { id: "sv4", title: "Real Estate Development", description: "End-to-end real estate development and project execution.", category: "Real Estate", image: IMAGES.gallery.g4, icon: "landmark", enabled: true, order: 4 },
    { id: "sv5", title: "Project Planning", description: "Strategic planning and project management for construction initiatives.", category: "Planning", image: IMAGES.gallery.g3, icon: "clipboard", enabled: true, order: 5 },
    { id: "sv6", title: "Infrastructure Solutions", description: "Reliable construction and infrastructure-focused execution.", category: "Infrastructure", image: IMAGES.gallery.g5, icon: "route", enabled: true, order: 6 },
  ],
  projects: [
    {
      id: "prospera-heights",
      name: "Prospera Heights",
      category: "Residential Development",
      location: "Kondhwa, Pune",
      year: "2026",
      status: "Planning",
      description:
        "A thoughtfully planned residential development offering spacious homes, contemporary architecture and well-designed community amenities in one of Pune's fastest growing neighbourhoods.",
      coverImage: IMAGES.projects.heights,
      galleryImages: [IMAGES.gallery.g1, IMAGES.gallery.g6, IMAGES.gallery.g8],
      enabled: true,
      featured: true,
    },
    {
      id: "arcon-business-square",
      name: "Arcon Business Square",
      category: "Commercial Development",
      location: "Pune",
      year: "2026",
      status: "Upcoming",
      description:
        "A modern commercial destination designed for growing businesses, with efficient floor plates, premium common areas and a strong architectural identity.",
      coverImage: IMAGES.projects.square,
      galleryImages: [IMAGES.gallery.g4, IMAGES.gallery.g3],
      enabled: true,
      featured: true,
    },
    {
      id: "clover-residency",
      name: "Clover Residency",
      category: "Residential Project",
      location: "Pune",
      year: "2027",
      status: "Upcoming",
      description:
        "Premium residences that balance privacy, natural light and durable construction quality, designed for families who value long-term comfort.",
      coverImage: IMAGES.projects.clover,
      galleryImages: [IMAGES.gallery.g7, IMAGES.gallery.g8],
      enabled: true,
      featured: true,
    },
    {
      id: "prospera-urban-spaces",
      name: "Prospera Urban Spaces",
      category: "Mixed-Use Development",
      location: "Pune",
      year: "2027",
      status: "Concept",
      description:
        "An integrated mixed-use concept combining retail, workspaces and residences to create a vibrant, walkable urban precinct.",
      coverImage: IMAGES.projects.urban,
      galleryImages: [IMAGES.gallery.g4, IMAGES.gallery.g5],
      enabled: true,
      featured: true,
    },
  ],
  gallery: [
    { id: "g1", title: "Modern Apartment Facade", category: "Residential", image: IMAGES.gallery.g1, enabled: true },
    { id: "g2", title: "Site Structural Works", category: "Construction", image: IMAGES.gallery.g2, enabled: true },
    { id: "g3", title: "Architectural Geometry", category: "Architecture", image: IMAGES.gallery.g3, enabled: true },
    { id: "g4", title: "Commercial Tower", category: "Commercial", image: IMAGES.gallery.g4, enabled: true },
    { id: "g5", title: "Tower Crane Operations", category: "Infrastructure", image: IMAGES.gallery.g5, enabled: true },
    { id: "g6", title: "Luxury Villa", category: "Residential", image: IMAGES.gallery.g6, enabled: true },
    { id: "g7", title: "Townhouse Row", category: "Architecture", image: IMAGES.gallery.g7, enabled: true },
    { id: "g8", title: "Contemporary Residence", category: "Residential", image: IMAGES.gallery.g8, enabled: true },
  ],
  testimonials: [
    { id: "t1", name: "Rohan Deshmukh", company: "Homeowner, Kondhwa", review: "Clear communication from day one and a team that genuinely cares about quality. The process felt structured and transparent throughout.", rating: 5, image: "", enabled: true },
    { id: "t2", name: "Priya Kulkarni", company: "Director, Kulkarni Enterprises", review: "Professional planning and disciplined execution. Prospera Arcon understood our commercial requirements and delivered on their commitments.", rating: 5, image: "", enabled: true },
    { id: "t3", name: "Amit Shah", company: "Investor", review: "A reliable partner with a long-term perspective. Their understanding of the Pune market is a real advantage.", rating: 4, image: "", enabled: true },
  ],
  enquiries: [
    {
      id: "e1",
      fullName: "Sample Enquiry",
      phone: "+91 98765 43210",
      email: "sample@example.com",
      serviceType: "Residential Projects",
      message: "Interested in discussing a residential project in Pune.",
      status: "new",
      createdAt: "2026-08-20T10:00:00.000Z",
    },
  ],
};
