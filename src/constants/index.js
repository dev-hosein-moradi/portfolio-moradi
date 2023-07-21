import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  person,
  next,
  company,
  tarkhineh,
  moboshare,
  mrAghrabeh,
  dataFinance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next Js",
    icon: next,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Madiar Mehr Mana",
    icon: company,
    iconBg: "#383E56",
    date: "March 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Dive deep into the implementation UI.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Noavaran",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies like Socket.io .",
      "The main part of redux and UI implementation was my responsibility and I managed the tasks well.",
      "Implementing responsive design and ensuring cross-browser compatibility with Tailwind css.",
      "Deep implementation Redux",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Rira Auto",
    icon: company,
    iconBg: "#383E56",
    date: "ّFreelancer Team",
    points: [
      "CRM development for car showrooms to carry out buying, selling and leasing processes in Turkey and establishing easy communication between company managers and customers.",
      "Working in a team of 5 people on two related websites. Interaction with designers and other developers.",
      "Using WebSocket to create Real-Time communication between administrators to manage contracts and products.",
      "My main work was in the field of UI implementation.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Soft Skin",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Freelancer Team",
    points: [
      "Development of two websites related to cosmetics and health products. One related to intra-organizational communication and the other to manage communication between customers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Very creative, fully responsive and modern UI implementation",
      "I was working on Redux and TailwindCss implementation individually in a two-person team.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Cooperation with Hosein in various projects of the company helped a lot in the development of the company's symbol. Friendly and good at work.",
    name: "amir rezaei",
    designation: "Senior developer",
    company: "madiar mehr mana",
    image: person,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hosein does.",
    name: "saman",
    designation: "Freelance team leader",
    company: "freelancer",
    image: person,
  },
  {
    testimonial:
      "After the development of the website by Hosein, we are completely confident about the clean code of the project and this has increased the quality of our service by 50% !",
    name: "kian mortazavi",
    designation: "CTO",
    company: "noavaran",
    image: person,
  },
];

const projects = [
  {
    name: "tarkhineh",
    description:
      "web-based CRM for Chain restaurant. Easing the management of chain restaurants for managers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tarkhineh,
    source_code_link: "https://github.com/dev-hosein-moradi/tarkhineh-food",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/dev-hosein-moradi/MORENT",
  },
  {
    name: "MoboShare",
    description:
      "Web-based platform that enables users to interact with each other in an attractive environment. They are given the possibility of Real-Time Chat and sharing of events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "mogodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: moboshare,
    source_code_link: "https://github.com/dev-hosein-moradi/moboshare",
  },
  {
    name: "mr aghrabeh",
    description: "web-based shopify platform to manage watch services",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mrAghrabeh,
    source_code_link: "https://github.com/dev-hosein-moradi/mr-aghrabeh",
  },
  {
    name: "finance",
    description:
      "Data finance platform. focus on clean code, UI and responsive web design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dataFinance,
    source_code_link: "https://github.com/dev-hosein-moradi/data-finance",
  },
];

export { technologies, experiences, testimonials, projects };
