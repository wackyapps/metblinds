import {
  Inter,
  Rubik,
  Montserrat,
  Poppins,
  ABeeZee,
  Bebas_Neue,
} from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "cyrillic"],
  style: ["italic", "normal"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

// Note: The following fonts are not available through Google Fonts and need to be handled differently:
// - Glober
// - Helvetica Neue
// - Altone Trial
// These fonts should be added as local fonts in your project

export { inter, rubik, montserrat, poppins, abeezee, bebasNeue };
