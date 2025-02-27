import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import images1 from "../assets/achievements/images1.jpg";
import images2 from "../assets/achievements/images2.jpg";
import images3 from "../assets/achievements/images3.jpg";

export const HERO_CONTENT = `I am a dedicated full stack developer with extensive expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and cloud technologies.  I have developed robust and scalable web applications, leveraging the power of cloud platforms to ensure high availability and performance. Additionally, I possess experience in machine learning, enabling me to integrate intelligent features into my projects. My goal is to utilize my diverse skill set to create innovative solutions that enhance business growth and deliver exceptional user experiences..`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "July 2024 - Oct 2024",
    role: "Full Stack Developer",
    company: "ALTRUISTY",
    description: `Role played a Back-end engineer in building Employee management system for different role of authorization ofthe organization.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "SIGN LANGUAGE PREDICTION",
    image: project2,
    description:
      "Developed a real-time sign language recognitionsystem using Mediapipe, TensorFlow, and deep learning, enablingseamless communication for the hearing impaired.",
    technologies: ["Computer Vision", "Mediapipe", "TensorFlow", "Keras"],
  },
  {
    title: "Crop Prediction",
    image: project3,
    description:
      "Cultivating the future with data-driven insights to predict crop yields and optimize farming practices.",
    technologies: ["Keras", "Sci-Kit Learn", "Matplotlib", "ML Algorithms"],
  },
  {
    title: "SOCIAL MEDIA PLATFORM",
    image: project4,
    description:
      "Successfully designed and implemented a full-stack Twitter clone with user authentication, real-time tweet updates, and a responsive UI using React, Node.js, and MongoDB to replicate user profiles, timelines, and direct messaging.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const ACHIVEMENTS = [
  {
    title: "DATA-THON",
    image: images1,
    description:
      "Won - II price for developing supply chain using prediction and allocation for farmer network",
      technologies: ["Keras", "Sci-Kit Learn", "Matplotlib", "ML Algorithms"],
  },
  {
    title: "Hack-a-Bot",
    image: images2,
    description:
      "Build a bot for voice-letter for Bank loan Approval automation using the UiPath tool.",
    technologies: ["Studio", "Orchestrator", "Robot", "Process Mining"],
  },
  {
    title: "CTF(Capture the Flag)",
    image: images3,
    description:
      "Got in top 50 participates among asia in CTF competition",
    technologies: ["Cryptography", "Steganography", "Scripting", "Web Exploitation"],
  },
];

export const CONTACT = {
  address: "124, Vanjinathan St, Manikandhan Nagar, Kundrathur, Chennai - 69 ",
  phoneNo: "+91 85548 17390 ",
  email: "vmsugrish2004@gmail.com",
};
