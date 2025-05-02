import { PiMedal } from "react-icons/pi";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { FaGears } from "react-icons/fa6";
import { MdCallSplit } from "react-icons/md";

export const contactPage = {
  metaData: {
    title: "Contact Us - Met Blinds",
    description:
      "Contact us for any inquiries or to schedule a free consultation. We're here to help you find the perfect window blinds for your home or business.",
  },
  banners: [
    {
      id: "1",
      backgroundImage: "/banners/home-banner-1.png", // Update with actual image path
      heading: "Leading Calgary Blinds Company!",
      description:
        "Met Blinds, your trusted Canadian blinds company in Calgary, Alberta, takes pride in transforming your living spaces with high-quality window coverings that seamlessly marry style and functionality.",
      buttonText: "Shop Sales",
      buttonLink: "/control-system",
    },
    {
      id: "2",
      backgroundImage: "/banners/home-banner-1.png", // Update with actual image path
      heading: "Leading Calgary Blinds Company!",
      description:
        "Met Blinds, your trusted Canadian blinds company in Calgary, Alberta, takes pride in transforming your living spaces with high-quality window coverings that seamlessly marry style and functionality.",
      buttonText: "Shop Sales",
      buttonLink: "/control-system",
    },
  ],

  specialOffer: {
    title: "SPECIAL OFFER",
    mainHeading: "40% OFF Custom Blinds",
    features: [
      "FREE Window Blinds Installation",
      "Discounted Motorization Upgrade",
    ],
    originalPrice: 250,
    discountedPrice: 200,
    quote:
      "Mention this offer when you request an estimate \n (phone, form, or email) & save!",
    ctaText: "Request a free estimate",
    imageSrc: "/images/white-blind.png",
    imageAlt: "Special Offer Blinds",
  },
  blindsShowCase: {
    heading: "BLINDS CATALOGUE",
    blinds: [
      {
        title: "Zebra Blinds",
        description:
          "This style of blinds lets you control the light with blackout or light-filtering fabric—perfect for full darkness or natural brightness. A great custom option for any home in Canada.",
        image: "/images/blinds/zebra-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Roller Shades",
        description:
          "These clean, minimalist roller shades offer privacy and style without clutter. Easy to use and clean, they roll up or down to control light in any space.",
       image: "/images/blinds/roller-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Solar Shades",
        description:
          "Solar blinds reduce glare, block harmful UV rays, and help keep your space cool and comfortable. They're a top choice for energy-efficient window shades.",
         image: "/images/blinds/solar-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Drapery",
        description:
          "Add color and personality to your home with custom drapery. Choose from rich fabrics like velvet, silk, and linen—perfect for both modern and traditional styles. Durable and stylish, our drapes resist dust, sun, and drafts.",
         image: "/images/blinds/drapery-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Trifold",
        description:
          "Save space with trifold shutters, featuring three panels that fold in half. Ideal for large windows, they offer a unique design and come in materials like wood or composite to match your style.",
        image: "/images/blinds/triflod-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Honeycomb Blinds",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/honey-comb-blind.png",
        buttonText: "Learn More",
      },
    ],
  },
  warrantyInfoSection: {
    heading: "Met Blinds Warranty Details",
    features: [
      "*10 Years* – All hardware & components for Zebra, Roller, Sunscreen, Tri-fold Blinds & Siderails (no questions asked).",
      "*5 Years* – Fabric for Zebra, Roller, Sunscreen & Tri-fold Blinds (manufacturing faults only).",
      "*2 Years* – Dream Curtains, Honeycomb & Honeycomb Day & Night Blinds.",
      "*5 Years* – Motors (if added) & Smart HUB.",
    ],
    ctaText: "Request a free estimate",
  },

  blindsAdvantages: {
    heading: "WHAT MAKES OUR CALGARY BLINDS ",
    subHeading: "COMPANY DIFFERENT",
    background: "/banners/about-banner-img.png",
    features: [
      {
        icon: PiMedal,
        title: "Craftsmanship Excellence:",
        description:
          "Met Blinds Calgary is dedicated to delivering top-notch quality in every aspect. Our Calgary window blinds are meticulously crafted with precision and attention to detail, ensuring both durability and timeless beauty.",
      },
      {
        icon: HiOutlineArrowsExpand,
        title: "Extensive Selection:",
        description:
          "Explore a wide array of shades and window blinds in Calgary that cater to various styles and preferences. From classic to contemporary, our offerings, including Zebra Blinds, Roller Blinds, and Solar Shades, position Met Blinds Calgary as the premier window blinds company you can trust.",
        isHighlited: true,
      },
      {
        icon: FaGears,
        title: "Cutting-Edge Technology:",
        description:
          "Indulge in the convenience of modern window treatments with our innovative solutions. Dive into our motorized and smart blind collection, complete with smart home integration, and elevate your lifestyle with the latest features from our Calgary Blinds Company.",
      },
      {
        icon: MdCallSplit,
        title: "Professional Guidance:",
        description:
          "Our knowledgeable Calgary window-covering experts are prepared to assist you in selecting the perfect blinds for your home. Whether you require style, colour, or functionality advice, we're here to help you make well-informed decisions.",
      },
    ],
  },

  testimonials: {
    heading: "THE TRUST WE HAVE EARNED",
    reviews: [
      {
        userImage: "/profile-image.jpg",
        userName: "Maria arnold",
        rating: 4,
        date: "2023-10-12",
        comment: "Great product, highly recommend!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "John Smith",
        rating: 5,
        date: "2023-11-15",
        comment:
          "Excellent service and quality blinds. The installation team was very professional.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Johnson",
        rating: 5,
        date: "2023-11-01",
        comment:
          "Love my new motorized blinds! They work perfectly and look amazing.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Michael Chen",
        rating: 4,
        date: "2023-10-25",
        comment:
          "Very happy with the zebra blinds. Great quality and reasonable prices.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Emma Wilson",
        rating: 5,
        date: "2023-10-18",
        comment:
          "The smart blinds are a game changer! Customer service was outstanding.",
      },
    ],
  },
  contactSection: {
    heading: "Contact Us",
    subHeading:
      "Have any questions? Feel free to contact us at help@metblindsx.com or fill out the form.",
    image: "/images/contactus/contact-us.jpg",
  },
};
