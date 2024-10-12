import { ActiveTab } from "./index";

export interface WorkData {
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

const data: Record<ActiveTab, WorkData> = {
  ZirambaStores: {
    startDate: "June 2021",
    endDate: "October 2021",
    role: "Fullstack developer",
    highlights: [
      "Worked as a junior developer and played a significant role developing the company’s online construction e-commerce platform.",
      "Utilized React, Redux, CSS for the front-end and Django, RESTful API for the back-end."
    ],
  },
  OMANET: {
    startDate: "April 2024",
    endDate: "September 2024",
    role: "Full Stack developer",
    highlights: [
      "Developed and deployed the educational/e-commerce website for OMANET Uganda with Next.js, Prisma and Tailwind.",
      "Integrated online payments into the website using Interswitch.",
      "Utilized MongoDB for high performance and scalability as well as Auth.js for authentication",
    ],
  },
  ClutchTechnologies: {
    startDate: "June 2022",
    endDate: "July 2023",
    role: "Front-end developer",
    highlights: [
      
      "Built and deployed applications for various clientele in various areas like education, entertainment, transport and healthcare",
      "Utilized technologies like React, React Native, Zustand and Next.js.",
    ],
  },
  sudaplays: {
    startDate: "December 2021",
    endDate: "April 2022",
    role: "Unity and Construct 3 Dev",
    highlights: [
      "Worked for Sudaplays on their platform that mainly uses Construct 3 and Unity technologies.",
      "Built new games as well as online PvP Capability for multiple of said games.",
    ],
  },
  AccessAgriculture: {
    startDate: "September 2023",
    endDate: "March 2024",
    role: "Front-end Developer",
    highlights: [
      "I have worked as a front-end developer in their development of an organic, agricultural platform."
    ],
  },
  freelance: {
    startDate: "March 2021",
    endDate: "Present",
    role: "Fullstack engineer and Unity game Developer",
    highlights: [
      "As a freelancer, I have built a wide variety of software applications, including iOS and Android apps, websites, games, learning platforms and APIs.",
      "I have experience with a variety of programming languages and technologies, including Firebase, JavaScript, TypeScript, React, React Native, Node.js and Unity.",
      
    ],
  },
};

export default data;
