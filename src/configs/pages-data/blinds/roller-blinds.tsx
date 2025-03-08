import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const rollerBlinds = {
  slug: "roller-blinds",
  icon: "/icons/blinds/roller-blinds.svg",
  title: "Roller Blinds",
  description:
    "Roller blinds are a classic window covering solution that rolls up and down smoothly, offering excellent light control and privacy.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Roller Blinds",
    subHeading:
      "Roller blinds are a versatile and practical window covering solution that provides perfect light control and privacy while maintaining a clean, modern look.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Roller Blinds",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Perfect Light Control",
        description: "Adjust light levels with precision",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Maximum Privacy",
        description: "Complete privacy when needed",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Clean Design",
        description: "Sleek and modern appearance",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Reduce energy costs with proper insulation",
        image: "/images/contact-section-image-1.png",
      },
    ],
  },
  /**
   * key features
   */
  keyFeaures: {
    heading: "KEY FEATURES",
    features: [
      {
        title: "Material",
        description: "Fabric/Wood/Aluminum/Polyester",
      },
      {
        title: "Operation",
        description: "Manual, Cordless, Motorized, Smart Home Compatible",
      },
      {
        title: "Light Filtration",
        description: " Blackout, Light Filtering, UV Protection",
      },
      {
        title: "Smart Integration",
        description:
          "Compatible with Alexa, Google Home, Apple HomeKit (If applicable)",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "Select from our wide range of fabrics to create the perfect roller blinds for your space. From light filtering to blackout options, find the ideal solution for your needs.",
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
      "Select from our range of hardware options to ensure your roller blinds perfectly match your interior design.",
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
   * choose control system
   */
  chooseControlSystem: {
    heading: "Choose Your Control System",
    subHeading:
      "Add motorization and/or smart AI voice controls to help automate your light control and simplify your life. Set scenes to enjoy your favourite weather and more!",
    buttonText: "Request  free Quote",
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
        title: "Smooth Operation",
      },
      {
        icon: "/svgs/easy-to-manage.svg",
        title: "Easy Maintenance",
      },
      {
        icon: "/svgs/customizability.svg",
        title: "Customizable",
      },
      {
        icon: "/svgs/versatility.svg",
        title: "Versatile Design",
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
        userName: "David Thompson",
        rating: 5,
        date: "2023-10-15",
        comment:
          "The roller blinds are exactly what I needed. Great quality and easy to install!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Lisa Chen",
        rating: 4,
        date: "2023-11-20",
        comment:
          "Perfect for my bedroom. The blackout fabric works amazingly well.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Robert Wilson",
        rating: 5,
        date: "2023-11-05",
        comment:
          "Excellent customer service and the blinds look fantastic in my living room.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Martinez",
        rating: 5,
        date: "2023-10-28",
        comment: "The motorized option is a game-changer. So convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "James Brown",
        rating: 4,
        date: "2023-10-22",
        comment: "Great value for money. The blinds are durable and stylish.",
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
        question: "What are the benefits of roller blinds?",
        answer:
          "Roller blinds offer excellent light control, privacy, energy efficiency, and a clean, modern appearance. They're also easy to maintain and operate.",
      },
      {
        question: "Can roller blinds be motorized?",
        answer:
          "Yes, roller blinds can be motorized for added convenience. We offer both manual and motorized options to suit your needs.",
      },
      {
        question: "How do I clean roller blinds?",
        answer:
          "Roller blinds can be easily cleaned with a soft cloth or vacuum attachment. For deeper cleaning, we recommend professional cleaning services.",
      },
      {
        question: "What is the installation process?",
        answer:
          "Our professional installation team will measure your windows, ensure perfect fit, and install your roller blinds with precision and care.",
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
        text: "Transform your space with our premium roller blinds. Contact us today for a free consultation and let our experts help you choose the perfect blinds for your home. Call MET BLINDS now!",
      },
    ],
  },
};

export default rollerBlinds;
