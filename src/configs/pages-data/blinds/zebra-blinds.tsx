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
      "Zebra Blinds – A stylish and versatile window covering combining the softness of shades with the light control of blinds. Perfect for homes and offices seeking a modern, clean aesthetic with superior privacy and brightness control.",
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
        title: "Smart Light Management",
        description: "Easily switch between complete darkness and filtered light using alternating sheer and opaque fabric bands.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdSecurity />,
        title: "Stylish & Modern",
        description: "A contemporary look with bold horizontal stripes that add texture, depth, and elegance to your interior.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <MdOutlineDesignServices />,
        title: "Ultimate Privacy",
        description: "Control visibility without losing natural light. Adjust how much you reveal or conceal with effortless control.",
        image: "/images/contact-section-image-1.png",
      },
      {
        icon: <BsLightningChargeFill />,
        title: "Safe & Cordless Options",
        description: "Child- and pet-friendly cordless systems are available for worry-free use.",
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
        title: "High-Quality Construction",
        description: "Zebra Blinds feature dust- and water-resistant polyester, non-toxic flame-retardant material, and durable aluminum hardware.",
      },
      {
        title: "Dual Functionality",
        description: "One blind offers multiple light settings — from light filtering to full blackout.",
      },
      {
        title: "Custom Fit for Every Space",
        description: "Suitable for residential or commercial spaces, custom-made to match your window size and décor style.",
      },
      {
        title: "Flexible Design",
        description:
          "Offered in Zebra Roller or Cordless Zebra styles, with a choice of sleek or textured designs.",
      },
    ],
  },
  /**
   * choose your fabric
   */
  chooseYourFabric: {
    heading: "Choose Your Fabric",
    subHeading:
      "Customize for privacy, mood, and design. All fabrics are durable, high-performance, and stylish.",
    blackoutHeading: "Blackout Fabrics",
    lightFilteringHeading: "Light Filtering Fabrics",
    blackoutFabrics: [
      {
        name: "Midnight Shadow",
        color: "linear-gradient(to bottom, #87847E, #4C4940)",
        textColor: "text-white",
      },
      {
        name: "Cool Charcoal",
        color: "linear-gradient(to bottom, #88705B, #4E403D)",
        textColor: "text-white",
      },
      {
        name: "Soft Taupe",
        color: "linear-gradient(to bottom, #C5BDA4, #5F5B4F)",
        textColor: "text-white",
      },
      {
        name: "Crisp White",
        color: "linear-gradient(to bottom, #C4C1B0, #908E79)",
        textColor: "text-white",
      },
    ],
    lightoutFabrics: [
      { name: "Ivory Glow", color: "#838B92", textColor: "text-white" },
      {
        name: "Sand Mist",
        color: "#D9DAD7",
        textColor: "text-white",      },
      { name: "Pale Gray", color: "#464644", textColor: "text-white" },
      { name: "Ocean Breeze", color: "#C9B692", textColor: "text-white" },
    ],
  },
  /**
   * choose hardware
   */
  chooseHardware: {
    heading: "Choose Your Hardware",
    subHeading:
      "Enhance your experience with motorized/ smart control systems– adjust your Zebra Blinds Curtains with a remote, voice control, or smartphone app.",
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
        question: "How do Zebra Blinds work?",
        answer:
          "Zebra blinds alternate between opaque and sheer fabric bands. Align opaque bands to block light or sheer bands to let light in.",
      },
      {
        question: "Can I change the appearance of my Zebra Blinds?",
        answer:
          "Yes. Choose bold striped designs for impact or soft fabrics for subtlety. There are many styles to suit your aesthetic.",
      },
      {
        question: "Are Cordless Zebra Blinds safe?",
        answer:
          "Yes. Cordless blinds eliminate dangling cords, making them safer for children and pets, while keeping the look sleek.",
      },
      {
        question: "Why choose Zebra Roller Blinds?",
        answer:
          "They’re cost-effective, easy to operate, and come in many design options for a clean, modern appearance.",
      },
      {
        question: "What window sizes are ideal for Zebra Blinds?",
        answer:
          "Standard-size windows are ideal, but custom solutions are available for large or uniquely shaped windows.",
      },
      {
        question: "What do Zebra Blinds look like from outside?",
        answer:
          "Zebra blinds maintain a consistent look from both inside and out, offering style and privacy.",
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
        text: "Add a touch of luxury and aesthetics with our Zebra Blinds and Curtain. Schedule a free consultation and our experts will make a perfect recommendation tailored to your interior and style.",
      },
    ],
  },
};

export default zebraBlinds;
