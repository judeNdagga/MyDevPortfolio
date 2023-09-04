/* eslint-disable react/display-name */
import { ReactNode } from "react";

export const items = [
  
  {
    link: "https://www.ziramba.com/ug",
    imgSrc: "/images/ziramba.png",
    title: "Ziramba",
    description: (): ReactNode => (
      <>
        Construction e-commerce made easy.
        <br /> We connect you to the best construction material suppliers, contractors, and service providers in your area.
      </>
    ),
    tags: ["ReactJS", "Fusion-Auth", "Apollo"],
  },
  {
    link: "https://www.omanetug.org",
    imgSrc: "/images/omanet.png",
    title: "OMANET Uganda",
    description: (): ReactNode => (
      <>
        Build capacity and promote training, research and extension on organic production, health and nutrition.
      </>
    ),
    tags: ["ReactJS", "Redux", "CSS"],
  },

  {
    link: "https://devsu-ganda-frontend-git-main-judendagga.vercel.app/",
    imgSrc: "/images/devsu.png",
    title: "DEVSUganda HR",
    description: (): ReactNode => (
      <>
        
        <br /> Keep track of employees and company projects with this easy-to-use human resource software.
      </>
    ),
    tags: ["ReactJS", "Django", "Material-UI"],
  },
  
  {
    link: "https://play.google.com/store/apps/details?id=com.scaron.mama&hl=en_US&gl=US",
    imgSrc: "/images/mama.png",
    title: "Mama Learning Platform",
    description: (): ReactNode => (
      <>
        Extensive learning platform for children.
      </>
    ),
    tags: ["Unity", "C#"],
  },
  {
    link: "https://v1b3m.vercel.app/",
    imgSrc: "/images/port.png",
    title: "Personal site",
    description: (): ReactNode => (
      <>
        A personal site where I showcase my projects.
      </>
    ),
    tags: ["ReactJS", "Next.js", "Chakra UI"],
  },
  
  
  {
    link: "https://play.google.com/store/apps/details?id=me.simonojok19.bus_stop&hl=en&gl=UG",
    imgSrc:
      "/images/bus.png",
    title: "React Native and Unity Mobile Apps",
    description: (): ReactNode => (
      <>
        I've developed some mobile apps as well that are available for review on the app store.
      </>
    ),
    tags: ["React-Native", "Redux", "Firebase"],
  },
];
