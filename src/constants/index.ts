import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import Training from "../assets/Training.png";

export const HERO_CONTENT = `I am a passionate full stack developer with hands-on experience in React, Next.js, Node.js, and TypeScript. I excel at building efficient user interfaces and powerful back-end systems, with expertise in PostgreSQL, Prisma, and MongoDB. As a recent graduate, I aim to leverage my skills to deliver innovative web solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With experience in a variety of technologies including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - August 2023",
    image: Training,
    role: "Training Program",
    company: "Tech Company",
    description: `Completed comprehensive training on Python, Data Structures and Algorithms, Linux, and Database Management Systems. Demonstrated proficiency by achieving a high score in training assignments.`,
    technologies: ["Python", "Linux", "Data Structures", "DBMS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    image: project1,
    description:
      "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented a secure payment gateway, real-time inventory management, and a responsive user interface to enhance user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
  },
  {
    title: "Social Media Dashboard",
    image: project2,
    description:
      "Built a social media analytics dashboard that aggregates data from multiple platforms. Used Next.js for server-side rendering and Tailwind CSS for a sleek, responsive design.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "API Integration"],
  },
  {
    title: "Task Management App",
    image: project3,
    description:
      "Created a task management application with collaborative features. Users can create, assign, and track tasks in real-time. Integrated with Firebase for authentication and real-time updates.",
    technologies: ["React", "Firebase", "Redux", "TypeScript"],
  },
];

export const CONTACT = {
  address: "1234 Example Street, City, Country",
  phoneNo: "+1 123 456 7890",
  email: "example@example.com",
};
