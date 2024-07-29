import BigData1 from "../assets/BigData1.png";
import BigData2 from "../assets/BigData2.png";
import BigData3 from "../assets/BigData3.png";
import Chat1 from "../assets/Chat1.png";
import Chat2 from "../assets/Chat2.png";
import EnergyTool1 from "../assets/EnergyTool1.png";
import HighFidelity1 from "../assets/HighFidelity1.png";
import HighFidelity2 from "../assets/HighFidelity2.png";
import HighFidelity3 from "../assets/HighFidelity3.png";
import HighFidelity4 from "../assets/HighFidelity4.png";
import Map1 from "../assets/Map1.png";
import Map2 from "../assets/Map2.png";
import Map3 from "../assets/Map3.png";
import Smart1 from "../assets/Smart1.png";
import Smart2 from "../assets/Smart2.png";
import Smart3 from "../assets/Smart3.png";
import Smart4 from "../assets/Smart4.png";

export const HERO_CONTENT = `I am a dedicated and skilled software developer with a First-Class Honours in Computer Science from the University of Leicester. With hands-on experience in data analytics, mobile and web development, and big data, I have developed a comprehensive skill set. I specialize in languages like C++, Python, JavaScript, and SQL. My goal is to use my technical expertise and problem-solving skills to contribute to impactful projects and drive organizational success.`;

export const EXPERIENCES = [
  {
    year: "Nov 2023 - Jul 2024",
    role: "Freelance Chat Bot Developer",
    company: "Self-Employed",
    description: `Designed and implemented a real-time interactive chatbot for live streaming platforms. Leveraged WebSocket technology and diverse APIs to enhance viewer interaction and deliver a secure, high-performance experience.`,
    technologies: ["Python", "WebSocket", "APIs", "Chatbot Development"],
  },
  {
    year: "Jul 2023 - July 2023",
    role: "Learning & Research Development Intern",
    company: "University of Leicester",
    description: `Developed interactive Quarto document demonstrations to enhance data science education. Applied project management skills and contributed to cutting-edge research, improving academic engagement and team efficiency.`,
    technologies: ["Quarto", "Project Management", "Data Science Research"],
  },
  {
    year: "Oct 2022 - Apr 2023",
    role: "Teaching Assistant",
    company: "University of Leicester",
    description: `Facilitated learning in Databases & Domain Modelling and Software Architecture modules. Improved student comprehension and engagement through effective teaching methods and responsive support.`,
    technologies: ["Teaching", "Student Support", "Educational Tools"],
  },
  {
    year: "Nov 2020 - Jul 2024",
    role: "Affiliate Media Marketing",
    company: "iGaming Website",
    description: `Drove significant user growth through strategic marketing campaigns and optimized user journeys. Enhanced website’s affiliate program with effective communication and targeted promotions, boosting signups and user retention.`,
    technologies: ["Marketing Strategy", "User Acquisition", "Performance Optimization"],
  }
];

export const PROJECTS = [
  {
    year: "2024",
    image: Chat1,
    title: "Interactive Chatbot for Live Streaming",
    description: `Designed and implemented a real-time interactive chatbot for a live streaming platform, using Python and WebSocket technology. Integrated multiple APIs to enhance viewer engagement and ensure robust performance.`,
    technologies: ["Python", "WebSocket", "APIs", "Realtime"],
    images: [Chat1,Chat2]
  },
  {
    year: "2023",
    image: Smart1,
    title: "IoT Smart Home Application",
    description: `Developed a smart home system integrating Python, C++, and Arduino for device control, using Raspberry Pi for processing and Google Firebase for database and authentication.`,
    technologies: ["Python", "C++", "Android", "Arduino", "Raspberry Pi", "Google Cloud Platform"],
    images: [Smart1,Smart2,Smart3,Smart4]
  },
  {
    year: "2021",
    image: Map1,
    title: "Mapping Cities in Python",
    description: `Developed a mapping application using Python and the Django Framework, incorporating OpenStreetMap API to visualize and interact with city data.`,
    technologies: ["Python", "Django", "OpenStreetMap API"],
    images: [Map2,Map3]
  },
  {
    year: "2023",
    image: BigData2,
    title: "Big Data Analysis & Cluster Modelling for Housing Prices",
    description: `Conducted comprehensive data analysis and cluster modeling to predict housing prices, leveraging Python and Jupyter Notebook for data processing and visualization.`,
    technologies: ["Python", "Jupyter Notebook"],
    images: [BigData1,BigData2,BigData3]
  },
  {
    year: "2022",
    image: HighFidelity3,
    title: "High Fidelity Task Manager Prototype",
    description: `Designed a high-fidelity task manager prototype with a focus on user experience, utilizing JavaScript, HTML, and CSS. View the prototype <a href="https://uni-kappa.vercel.app/pages/dashboard.html" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: underline; font-weight: 600;">here</a>.`,
    technologies: ["JavaScript", "HTML", "CSS", "Wireframing"],
    images: [HighFidelity1, HighFidelity2, HighFidelity3, HighFidelity4]
  },
  {
    year: "2023",
    image: EnergyTool1,
    title: "Energy Tool + API",
    description: `Created an energy management tool with a custom API using Java for the Android application and Node.js for backend services, integrated with Google Firebase for data storage.`,
    technologies: ["Java", "Android", "Node.js", "Google Firebase"],
    images: [EnergyTool1]
  }
];