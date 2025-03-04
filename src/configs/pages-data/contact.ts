import { PiMedal } from "react-icons/pi";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { FaGears } from "react-icons/fa6";
import { MdCallSplit } from "react-icons/md";

type BannerType = {
  coverImage: string;
  heading: string;
  subheading?: string;
  description: string;
  buttonText: string;
  link: string;
  bannerImage?: string;
  textPosition?: string;
}[];
export const contactPage = {
  banners: [
    {
      coverImage: "/banners/home-banner-1.png",
      heading: "Leading Calgary Blinds Company!",
      description:
        "Met Blinds, your trusted Canadian blinds company in Calgary, Alberta, takes pride in transforming your living spaces with high-quality window coverings that seamlessly marry style and functionality.",
      buttonText: "Shop Sales",
      link: "/",
    },
    {
      coverImage: "/banners/home-banner-2.png",
      heading: "30% OFF SHADES",
      subheading: "Don’t Miss The Window to Saves!",
      description:
        "WE MANUFACTURE BLINDS IN CALGARY FOR ALBERTA HOMES & BUSINESSES. a variety of window shades and treatments that give you 100% privacy and add a modern elegant touch to your home.",
      buttonText: "Shop Sales",
      link: "/blinds",
      bannerImage: "/images/banner-side-image-2.png",
      textPosition: "left",
    },
    {
      coverImage: "/banners/home-banner-3.png",
      heading: "Buy 8 motors & get a smart hub free",
      subheading: "Ends in 3 days",
      buttonText: "Shop Sales",
      link: "/blinds",
      bannerImage: "/images/banner-side-image-3.png",
      textPosition: "right",
    },
  ] as BannerType,

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
      "Mention this offer when you request an estimate (phone, form, or email) & save!",
    ctaText: "Request a free estimate",
    imageSrc: "/images/white-blind.png",
    imageAlt: "Special Offer Blinds",
  },
  blindsShowCase: {
    heading: "Blinds Catalogue",
    blinds: [
      {
        title: "Zebra Blinds",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/zebra-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Roller Shades",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/roller-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Solar Shades",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/solar-shades-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Drapery",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
        image: "/images/blinds/drapery-blind.png",
        buttonText: "Learn More",
      },
      {
        title: "Trifold",
        description:
          "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
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
      "10-Year Warranty on all products",
      "2-Year Warranty on installation",
      "Free replacement parts for 1 year",
    ],
    ctaText: "Request a free estimate",
  },

  blindsAdvantages: {
    heading: "WHAT MAKES OUR CALGARY BLINDS ",
    subHeading: "COMPANY DIFFERENT",
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
  contactSection: {
    heading: "Contact Us",
    subHeading:
      "Have any questions? Feel free to contact us at help@metblindsx.com or fill out the form.",
    image: "/images/contact-section-image-1.png",
  },
};
