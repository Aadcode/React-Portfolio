import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import Training from "../assets/Training.png"


export const HERO_CONTENT = `I am a passionate full stack developer with hands-on experience in React, Next.js, Node.js, and TypeScript. I excel at building efficient user interfaces and powerful back-end systems, with expertise in PostgreSQL, Prisma, and MongoDB. As a recent graduate, I aim to leverage my skills to deliver innovative web solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With experience in a variety of technologies including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - August 2023",
    image: Training,
    role: "Martian Training Program",
    company: "Persistent Systems",
    description: `Completed comprehensive training on Python, Data Structures and Algorithms, Linux, and Database Management Systems. Demonstrated proficiency by achieving an 85% score in training assignments.`,
    technologies: ["Python", "Linux", "Data Structures", "DBMS"],
  },
];

export const PROJECTS = [
  {
    title: "Aastha Insurance Website",
    image: project1,
    description:
      "Developed a user-friendly interface for streamlining insurance processes with a single click. Enhanced customer experience and improved platform performance using React JS, JavaScript, Spring Boot, MySQL, and Hibernate.",
    technologies: ["React JS", "JavaScript", "Spring Boot", "MySQL", "Hibernate"],
  },
  {
    title: "Payment Wallet Web Application",
    image: project2,
    description:
      "Designed a financial management web application with Next.js and Tailwind CSS, featuring a dynamic dashboard. Implemented secure authentication and real-time transaction updates using PostgreSQL, Prisma ORM, Node.js, and Next-Auth.",
    technologies: ["Next.js", "Tailwind CSS", , "PostgreSQL", "Prisma ORM", "Node.js"],
  },
  {
    title: "Blogging Web Application",
    image: project3,
    description:
      "Created a Medium-like platform using React JS and Tailwind CSS. Built a backend with Hono, Postgres, Prisma ORM, and Typescript, achieving reduced server response time and efficient deployment on Cloudflare.",
    technologies: ["React.js", "Tailwind CSS", "Hono", "Postgres", "Prisma ORM", "Typescript"],
  },
];

export const CONTACT = {
  address: "Kanadia Road, Alok Nagar, Indore",
  phoneNo: "+91 9977455713",
  email: "aadarshjain1927@gmail.com",
};
