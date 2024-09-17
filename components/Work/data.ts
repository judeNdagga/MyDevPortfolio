import { ActiveTab } from "./index";

export interface WorkData {
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

const data: Record<ActiveTab, WorkData> = {
  Ziramba: {
    startDate: "June 2021",
    endDate: "October 2021",
    role: "Fullstack developer",
    highlights: [
      "I have worked as a fullstack developer for this company, and played a significant role in the development and maintenance of their web applications using technologies like React, Redux and Django."
    ],
  },
  OMANET: {
    startDate: "April 2024",
    endDate: "Present",
    role: "Front-end developer",
    highlights: [
      "I have built an educational/e-commerce website for this company with Next.js, Prisma and Tailwind."
    ],
  },
  ffp: {
    startDate: "Dec 2022",
    endDate: "April 2023",
    role: "React Native developer",
    highlights: [
      
      "I have experience building iOS and Android mobile apps using React-Native/TypeScript. I have used a variety of technologies, such as React Native, Expo, and Firebase. I have also faced a variety of challenges, such as performance optimization, user experience, and security. I have successfully overcome these challenges and delivered high-quality mobile apps that have improved the user experience and made them more secure.",
      "I built the in-house app using React Native. The company app kept track of the company's suppliers as well as their schedule. The admin dashboard was used to manage the company's products, customers, and orders. React native was a good choice for this project because it allowed me to build a user-friendly and responsive website and admin dashboard.",
    ],
  },
  sudaplays: {
    startDate: "March 2022",
    endDate: "Nov 2022",
    role: "Unity and Construct 3 Dev",
    highlights: [
      "I have worked with Sudaplays on their online platform that mainly uses Construct 3 and Unity technologies to create new games as well as online PvP capability of said games."
    ],
  },
  AccessAgriculture: {
    startDate: " Feb 2022",
    endDate: "July 2023",
    role: "Fullstack Developer",
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
