import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

const dreamCurtains = {
  slug: "dream-curtains",
  icon: "/icons/blinds/dream-curtains.svg",
  title: "Dream Curtains",
  description:
    "Dream curtains combine elegant design with practical functionality, offering luxurious window treatments that enhance your home's aesthetic appeal.",

  /**
   * blinds banner
   */
  blindsBanner: {
    heading: "Dream Curtains",
    subHeading:
      "Get the best of all– privacy, light control, and aesthetics. Dream Curtains offers an immaculate blend of luxury, functionality, and elegance, elevating any decor.",
    cta: "Shop Now",
    background: "/images/blinds/DreamCurtains/banner.jpg",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Dream Curtains",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Light Control",
        description: "Regulate the amount and direction of the sunlight, creating a comfortable and glare-free ambience all day.",
        image: "/images/blinds/DreamCurtains/Light Control.jpg",
      },
      {
        icon: <MdSecurity />,
        title: "Optimal Privacy",
        description: "Maintain your privacy without sacrificing natural light, all thanks to the innovative Trifold design.",
         image: "/images/blinds/DreamCurtains/Optimal Privacy.avif",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Ultra Luxury Design",
        description: "Experience unparalleled  luxury with exquisite fabric and craftsmanship, redefining your personal space.",
        image: "/images/blinds/DreamCurtains/Ultra Luxury Design.jpg",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Energy Efficient",
        description: "Control indoor temperatures by reducing heat gain in summer, resulting in increased energy savings and lower cooling cost.",
       image: "/images/blinds/DreamCurtains/Energy Efficient.jpg",
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
        title: "Premium Material",
        description: "Choose between various fabric blends, PVC, wood, and aluminum",
      },
      {
        title: "Custom Light Adjustment",
        description: "Light filtering, total blackout, UV protection",
      },
      {
        title: "Smart Integration",
        description: "Control the blinds through Google Home, Alexa, and Apple HomeKit",
      },
      {
        title: "Versatile",
        description:
          "Manual, cordless, motorized, or SmartHome compatibility",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "No more compromise with your style– pick from a wide range of textures and colors to compliment your interior.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      "/images/contact-section-image-1.png",
      "/images/hardwares/hardware-1.png",
        "/banners/home-banner-1.png",
        "/images/hardwares/hardware-4.png",
    ],
    lightoutFabrics: [
   "/images/contact-section-image-1.png",
   "/images/hardwares/hardware-1.png",
     "/banners/home-banner-1.png",
     "/images/hardwares/hardware-4.png",
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "Exquisite hardware material that matches your decor style, without sacrificing the luxury.",
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
      "Enhance your experience with a motorized/ smart control system– adjust your retractable blinds with a remote, voice control, or smartphone app.",
    buttonText: "Request  free Quote",
  },
  /**
   * blinds features
   */
  blindsFeatures: {
    heading: "How It Works?",
    image: "/images/blinds/DreamCurtains/how its works.jpg",
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
        userName: "Jennifer Smith",
        rating: 5,
        date: "2023-10-20",
        comment:
          "The dream curtains look absolutely beautiful in my dining room. The quality is exceptional!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Thomas Anderson",
        rating: 4,
        date: "2023-11-25",
        comment:
          "Perfect for my home office. The blackout fabric works amazingly well.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Maria Garcia",
        rating: 5,
        date: "2023-11-10",
        comment:
          "Love how they drape elegantly. The motorized option is so convenient!",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "David Wilson",
        rating: 5,
        date: "2023-10-28",
        comment:
          "The installation was professional and the curtains look stunning.",
      },
      {
        userImage: "/profile-image.jpg",
        userName: "Sarah Johnson",
        rating: 4,
        date: "2023-10-22",
        comment: "Great quality and the fabric selection is extensive.",
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
        question: "Are Dream Curtains available in different fabrics?",
        answer:
          "Yes. You can choose from Met Blind’s wide range of dream Curtains fabric to compliment your decor style.",
      },
      {
        question: "How can I clean and maintain my Dream Blinds?",
        answer:
          "Just regular dusting with brush or light vacuuming will keep your Dream Curtains clean. For deeper cleaning, you can use a damp cloth with little detergent.",
      },
      {
        question: "Are Motorized Dream Curtains machine washable?",
        answer:
          "Most Dream Motorized Curtains can be washed in a machine, while others require dry cleaning. Read the fabric instructions carefully.",
      },
      {
        question: "Do Dream Curtains fade over time?",
        answer:
          "Met Blinds’ Dream Art Blackout Curtains are designed to resist fading. Prevent direct sun exposure to keep them intact for a longer period.",
      },
    ],
  },
  
  /**
   * info banner
   */
  infoBanner: {
    heading: "Ready to Transform Your Space?",
    backgroundImage: "/images/home/info-banner-bg.png",
    points: [
      {
        text: "Add a touch of luxury and aesthetics with our Dream Curtains and Blinds. Schedule a free consultation and our experts will make a perfect recommendation tailored to your interior and style.",
      },
    ],
  },
};

export default dreamCurtains;
