export const products = [
  // Elevators Category
  {
    id: 1,
    category: "elevators",
    name: "Passenger Elevator",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop",
    description:
      "Smooth, silent, and reliable vertical transportation solution designed for modern buildings.",
    link: "passenger-elevator",
  },
  {
    id: 2,
    category: "elevators",
    name: "Home Elevator",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop",
    description:
      "Compact and elegant residential elevators for enhanced accessibility and luxury in homes.",
    link: "home-elevator",
  },
  {
    id: 3,
    category: "elevators",
    name: "Hospital Elevator",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25856cd63?q=80&w=1170&auto=format&fit=crop",
    description:
      "Specialized elevator systems designed for healthcare facilities with enhanced capacity and hygiene features.",
    link: "hospital-elevator",
  },
  {
    id: 4,
    category: "elevators",
    name: "Panoramic Elevator",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop",
    description:
      "Glass-walled elevators offering breathtaking views while traveling between floors.",
    link: "panoramic-elevator",
  },
  {
    id: 5,
    category: "elevators",
    name: "Escalator & Moving Walkway",
    image:
      "https://images.unsplash.com/photo-1581094794329-c6f5e5d0e9d4?q=80&w=1170&auto=format&fit=crop",
    description:
      "Efficient people-moving solutions for shopping malls, airports, and public spaces.",
    link: "escalator",
  },
  {
    id: 6,
    category: "elevators",
    name: "Machine Room Less Elevator",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop",
    description:
      "Space-saving elevator technology that eliminates the need for a separate machine room.",
    link: "mrl-elevator",
  },
  {
    id: 7,
    category: "elevators",
    name: "Mini Elevator",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop",
    description:
      "Compact elevator solutions for limited spaces, perfect for small homes and offices.",
    link: "mini-elevator",
  },

  // Parking Systems Category
  {
    id: 8,
    category: "parking",
    name: "Car Lift",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1167&auto=format&fit=crop",
    description:
      "Vertical transportation systems for vehicles in multi-level parking facilities.",
    link: "car-lift",
  },
  {
    id: 9,
    category: "parking",
    name: "Car Parking System",
    image:
      "https://images.unsplash.com/photo-1560519653-bb0c6ba1afd1?q=80&w=1170&auto=format&fit=crop",
    description:
      "Automated parking solutions that maximize space utilization in urban environments.",
    link: "car-parking",
  },

  // Fire & Safety Category
  {
    id: 10,
    category: "safety",
    name: "Fire Alarm System",
    image:
      "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1032&auto=format&fit=crop",
    description:
      "Advanced detection and alert systems for early fire warning and evacuation.",
    link: "fire-alarm",
  },
  {
    id: 11,
    category: "safety",
    name: "CO₂ Fire Extinguisher",
    image:
      "https://images.unsplash.com/photo-1649836215936-41c76a724233?q=80&w=1167&auto=format&fit=crop",
    description:
      "Compact and efficient fire suppression system perfect for electrical equipment and flammable fires.",
    link: "co2-extinguisher",
  },
  {
    id: 12,
    category: "safety",
    name: "Dry Powder Fire Extinguisher",
    image:
      "https://images.unsplash.com/photo-1617196034796-73b88699d39c?q=80&w=1170&auto=format&fit=crop",
    description:
      "Versatile all-purpose fire extinguisher suitable for multiple fire types in various environments.",
    link: "dry-powder",
  },
  {
    id: 13,
    category: "safety",
    name: "Smoke Detector",
    image:
      "https://images.unsplash.com/photo-1589656384664-c7c72f21352b?q=80&w=1170&auto=format&fit=crop",
    description:
      "Early warning systems for smoke detection to prevent fire hazards in residential and commercial spaces.",
    link: "smoke-detector",
  },

  // Utilities Category
  {
    id: 14,
    category: "utilities",
    name: "Generator",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop",
    description:
      "Reliable backup power solutions for uninterrupted operations during power outages.",
    link: "generator",
  },
  {
    id: 15,
    category: "utilities",
    name: "Water Pump",
    image:
      "https://images.unsplash.com/photo-1621905251189-08d45b3d0e49?q=80&w=1170&auto=format&fit=crop",
    description:
      "Efficient water pumping systems for residential, commercial, and industrial applications.",
    link: "water-pump",
  },
  {
    id: 16,
    category: "utilities",
    name: "GRP Water Tanker",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop",
    description:
      "Glass Reinforced Plastic water storage tanks with superior durability and hygiene.",
    link: "grp-tanker",
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "elevators", name: "Elevators" },
  { id: "parking", name: "Parking Systems" },
  { id: "safety", name: "Fire & Safety" },
  { id: "utilities", name: "Utilities" },
];

// export const dropdownItems = [
//   { icon: "fas fa-box", text: "Product Inquiry", href: "/inquiry#product" },
//   {
//     icon: "fas fa-calculator",
//     text: "Price Quote",
//     href: "/inquiry#quotation",
//   },
//   {
//     icon: "fas fa-tools",
//     text: "Maintenance Service",
//     href: "/inquiry#maintenance",
//   },
//   {
//     icon: "fas fa-cogs",
//     text: "Installation Service",
//     href: "/inquiry#installation",
//   },
//   {
//     icon: "fas fa-headset",
//     text: "Technical Support",
//     href: "/inquiry#support",
//   },
//   {
//     icon: "fas fa-wrench",
//     text: "Spare Parts Inquiry",
//     href: "/inquiry#parts",
//   },
//   {
//     icon: "fas fa-shield-alt",
//     text: "Warranty Service",
//     href: "/inquiry#warranty",
//   },
//   {
//     icon: "fas fa-handshake",
//     text: "Partnership Inquiry",
//     href: "/inquiry#partnership",
//   },
//   {
//     icon: "fas fa-calendar-check",
//     text: "Service Booking",
//     href: "/inquiry#booking",
//   },
//   {
//     icon: "fas fa-envelope",
//     text: "General Inquiry",
//     href: "/inquiry#general",
//   },
// ];
export const dropdownItems = [
  { icon: "fas fa-box", text: "Product Inquiry", href: "/inquiry#product" },
  {
    icon: "fas fa-calculator",
    text: "Price Quote",
    href: "/inquiry#quotation",
  },
  {
    icon: "fas fa-tools",
    text: "Maintenance Service",
    href: "/inquiry#maintenance",
  },
  {
    icon: "fas fa-cogs",
    text: "Installation Service",
    href: "/inquiry#installation",
  },
  {
    icon: "fas fa-headset",
    text: "Technical Support",
    href: "/inquiry#support",
  },
  {
    icon: "fas fa-wrench",
    text: "Spare Parts Inquiry",
    href: "/inquiry#parts",
  },
  {
    icon: "fas fa-shield-alt",
    text: "Warranty Service",
    href: "/inquiry#warranty",
  },
  {
    icon: "fas fa-handshake",
    text: "Partnership Inquiry",
    href: "/inquiry#partnership",
  },
  {
    icon: "fas fa-calendar-check",
    text: "Service Booking",
    href: "/inquiry#booking",
  },
  {
    icon: "fas fa-envelope",
    text: "General Inquiry",
    href: "/inquiry#general",
  },
];