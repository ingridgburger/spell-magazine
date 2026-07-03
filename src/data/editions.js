import fallWinter2026 from "../assets/images/spell-fall-winter-2026.webp";
import spring2025 from "../assets/images/spell-spring-2025.webp";
import winter2025 from "../assets/images/spell-winter-2025.webp";
import backFallWinter2026 from "../assets/images/back-fall-winter-2026.webp";
import backSpring2025 from "../assets/images/back-spring-2025.webp";
import backWinter2025 from "../assets/images/back-winter-2025.webp";
import zineWorkshop from "../assets/images/zine-workshop.webp";
import backZineWorkshop from "../assets/images/back-zine-workshop.webp";

export const editions = [
  {
    id: "zine-workshop",
    label: "WR x SPELL Zine Workshop",
    title: "WR x SPELL Zine Workshop",
    image: zineWorkshop,
    backImage: backZineWorkshop,
    openInNewTabUrl: "https://heyzine.com/flip-book/8e21b54687.html",
    embedUrl: "https://heyzine.com/flip-book/8e21b54687.html",
    printAvailable: false,
    disclaimer: "We hosted a hands-on zine-making station during the Writers Room Open House, inviting incoming Drexel students to dive into the world of art, publishing, and DIY creativity through collage, writing, and self-expression. Explore pages from our zine workshop below!"
  },
  {
    id: "fall-winter-2026",
    label: "Fall Winter 2026",
    title: "FALL WINTER 2026 EDITION",
    image: fallWinter2026,
    backImage: backFallWinter2026,
    openInNewTabUrl: "https://heyzine.com/flip-book/3117c921b8.html",
    embedUrl: "https://heyzine.com/flip-book/3117c921b8.html",
    printOrderUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJQBFUEoO9F1VgkQj24ipuMDvtfLZgmlGmielzsEMi2PALRA/viewform?usp=send_form",
    printAvailable: true,
  },
  {
    id: "spring-2025",
    label: "Spring 2025",
    title: "SPRING 2025 EDITION",
    image: spring2025,
    backImage: backSpring2025,
    openInNewTabUrl: "https://heyzine.com/flip-book/6b337c5e1a.html",
    embedUrl: "https://heyzine.com/flip-book/6b337c5e1a.html",
    printAvailable: false,
  },
  {
    id: "winter-2025",
    label: "Winter 2025",
    title: "WINTER 2025 EDITION",
    image: winter2025,
    backImage: backWinter2025,
    openInNewTabUrl: "https://heyzine.com/flip-book/a7d4cee619.html",
    embedUrl: "https://heyzine.com/flip-book/a7d4cee619.html",
    printAvailable: false,
    disclaimer:
      "Due to technical issues, some fonts and images do not display as intended when viewing on Google Chrome. We recommend viewing the magazine on Safari, Bing, or any other browser. Thank you!",
  },
];
