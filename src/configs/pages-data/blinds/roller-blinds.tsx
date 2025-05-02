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
    heading: "Roller Shades",
    subHeading:
      "Roller shades provide a perfect balance between privacy and light control. Whether in your home or office, these versatile window coverings let in soft light while keeping your space private. Available in blackout options for complete darkness, ideal for media rooms or bedrooms, and sheer options for brighter, more active spaces like kitchens and living rooms.",
    cta: "Shop Now",
    background: "/banners/about-banner-img.png",
  },
  /**
   * why choose blinds slider
   */
  whyChooseBlindsSlider: {
    heading: "Why Choose Roller Shades",
    features: [
      {
        icon: <WiDaySunny />,
        title: "Light Control",
        description: "Easily adjust the amount of light entering your space, creating a comfortable, glare-free environment.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Privacy",
        description: "Enjoy complete privacy without sacrificing natural light, thanks to the innovative design of roller shades.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Modern Design",
        description: "Sleek and minimalist, roller shades seamlessly blend into any contemporary decor, offering a clean, stylish appearance.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Space Saving",
        description: "Roller shades retract neatly into a compact roll, saving space and providing unobstructed views.",
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
        title: "Premium Material",
        description: "Choose between various fabric blends, PVC, wood, and aluminum",
      },
      {
        title: "Smart Integration",
        description: "Control the blinds through Google Home, Alexa, and Apple HomeKit",
      },
      {
        title: "Versatile Operation",
        description: "Choose between manual, motorized, or even voice-activated systems to operate your blinds.",
      },
      {
        title: "Custom Fit",
        description:
          "Roller shades can be tailored to any window size, from standard to specialty windows, providing seamless fit and style.",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "No need to compromise on style—choose from a vast selection of fabric blinds and shades in various textures and colors to perfectly complement your interior.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
   blackoutFabrics: [
      {
        name: "Midnight Black",
        image: "/images/contact-section-image-1.png",
       textColor: "text-white",
      },
      {
        name: "Soft Gray",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",
      },
      {
        name: "Warm Sandstone",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",
      },
      {
        name: "Pure White",
        image: "/images/contact-section-image-1.png",
        textColor: "text-white",
      },
    ],
    lightoutFabrics: [
      { name: "Sheer Ivory", image: "/images/contact-section-image-1.png", textColor: "text-white" },
      {
        name: "Misty Blue",
        image: "/images/contact-section-image-1.png",
        textColor: "text-[#464644]",
      },
      { name: "Cloudy Gray",  image: "/images/contact-section-image-1.png", textColor: "text-white" },
      { name: "Soft Beige",  image: "/images/contact-section-image-1.png", textColor: "text-white" },
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "Opt for hardware materials that complement your interior decor, enhancing both functionality and aesthetics.",
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
      "Upgrade to motorized or smart Control System – control them effortlessly with a remote, voice command, or smart device.",
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
        question: "Are roller shades safe for homes with children or pets?",
        answer:
          "Yes, cordless roller shades are a great choice for homes with young children and pets.",
      },
      {
        question: "Do roller shades work on all window types?",
        answer:
          "Yes, they fit standard, specialty, and custom windows.",
      },
      {
        question: "Can I motorize my roller shades?",
        answer:
          "Absolutely! Roller shades can be motorized for added convenience and ease.",
      },
      {
        question: "What is the difference between blackout and light filtering fabrics?",
        answer:
          "Blackout fabrics block all light, while light filtering fabrics allow some natural light to filter in while maintaining privacy.",
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
        text: "Enhance your home or office with premium roller shades. Contact us for a free consultation and we’ll help you select the perfect option for your needs.",
      },
    ],
  },
};

export default rollerBlinds;
