import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const zebraBlinds = {
  slug: "zebra-blinds",
  icon: "/icons/blinds/zebra-blinds.svg",
  title: "Zebra Blinds",
  description:
    "Zebra blinds are modern window coverings that combine the functionality of roller blinds with the aesthetic appeal of sheer curtains.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Zebra Blinds",
    subHeading:
      "Zebra blinds are modern window coverings that combine the functionality of roller blinds with the aesthetic appeal of sheer curtains.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Zebra Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Superior Light Control",
        description: "Adjust natural light to your preference",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Enhanced Privacy",
        description: "Maintain your privacy with adjustable blinds",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Modern Aesthetic",
        description: "Enhance your interior with stylish designs",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Save energy with optimized light control",
        image: "/images/contact-section-image-1.png",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "Choose your fabric to give your new zebra blinds light filtering or blackout properties to suit your preferences for each space in your home. Enhance your privacy in coveted spaces like bedrooms and bathrooms. Bring more light into the heart of your home with light filtering fabrics to showcase your decor etc.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      {
        name: "Moonlit Taupe",
        color: "linear-gradient(to bottom, #87847E, #4C4940)",
        textColor: "text-white",
      },
      {
        name: "Stormy Driftwood",
        color: "linear-gradient(to bottom, #88705B, #4E403D)",
        textColor: "text-white",
      },
      {
        name: "Desert Sandstone",
        color: "linear-gradient(to bottom, #C5BDA4, #5F5B4F)",
        textColor: "text-white",
      },
      {
        name: "Alabaster Mist",
        color: "linear-gradient(to bottom, #C4C1B0, #908E79)",
        textColor: "text-white",
      },
    ],
    lightoutFabrics: [
      { name: "Moonlit Taupe", color: "#838B92", textColor: "text-white" },
      {
        name: "Stormy Driftwood",
        color: "#D9DAD7",
        textColor: "text-[#464644]",
      },
      { name: "Desert Sandstone", color: "#464644", textColor: "text-white" },
      { name: "Alabaster Mist", color: "#C9B692", textColor: "text-white" },
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "We offer a variety of metal colours for hardware to ensure your new blinds will fit seamlessly into your existing home design.",
    hardwareOptions: [
      {
        image: "/images/hardwares/hardware-1.png",
        name: "Antique Brass",
      },
      {
        image: "/images/hardwares/hardware-2.png",
        name: "Satin Nickel",
      },
      {
        image: "/images/hardwares/hardware-3.png",
        name: "Oil Rubbed Bronze",
      },
      {
        image: "/images/hardwares/hardware-4.png",
        name: "Polished Chrome",
      },
    ],
  },
  /**
   * blinds features
   */
  blindsFeatures: {
    heading: "How It Works?",
    image: "/banners/home-banner-1.png",
    features: [
      {
        icon: "/svgs/easy-operation.svg",
        title: "Easy Operation",
      },
      {
        icon: "/svgs/easy-to-manage.svg",
        title: "Easy to Manage",
      },
      {
        icon: "/svgs/customizability.svg",
        title: "Customizability",
      },
      {
        icon: "/svgs/versatility.svg",
        title: "Versatility",
      },
    ],
  },
  /**
   * blinds testimonials
   */
  blindsTestimonials: {
    heading: "Customer Reviews",
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
  /**
   * FAQs
   */
  faqs: {
    heading: "FAQs",
    faqs: [
      {
        question: "What is Flash Loan",
        answer:
          "A Flash Loan is a type of decentralized loan that allows users to borrow funds instantly without collateral, provided the borrowed amount is returned within the same transaction.",
      },
      {
        question: "How long does it take to process a Flash Loan transaction?",
        answer:
          "Flash Loan transactions are processed instantly within a single blockchain block, typically taking only a few seconds to complete.",
      },
      {
        question: "Is Simplex regulated?",
        answer:
          "Yes, Simplex is a fully regulated financial institution that complies with all relevant financial regulations and security standards.",
      },
      {
        question: "How do I deposit funds into Simplex?",
        answer:
          "You can deposit funds into Simplex using various payment methods including credit/debit cards, bank transfers, and cryptocurrency transfers through our secure platform.",
      },
    ],
  },
  /**
   * info banner
   */
  infoBanner: {
    heading: "What We Have to Offer?",
    backgroundImage: "/images/home/info-banner-bg.png",
    points: [
      {
        text: "Controlling your blinds has never been so easy. Contact us today to see how convenient motorized blinds really are. Our highly trained design consultants will help you make the right choice for your home or Call MET BLINDS!",
      },
    ],
  },
};

export default zebraBlinds;
