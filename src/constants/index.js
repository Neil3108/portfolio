import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    PostgreSQL,
    Python,
    nodejs,
    mongodb,
    git,
    RapidRTC,
    portfolio,
    threejs,
    buyAndSell,
    autoRepair
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
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
      name: "PostgreSQL",
      icon: PostgreSQL,
    },
    {
      name: "Python",
      icon: Python,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Senior Online Agent",
      company_name: "RAPID RTC a Keyloop company",
      icon: RapidRTC,
      iconBg: "#383E56",
      date: "Jan 2020 - Current",
      points: [
        "Providing customer service to internal and external customers with a focus on process improvement, training, and overall team quality assurance, along with managing and creating tickets.",
        "Designing, implementing, and maintaining detailed performance tracking reports, and reporting on recurring trends using data in PowerBI, WFM software, CMS, and various databases.",
        "Creating and implementing training materials, along with facilitating the assignment of training schedules and projects.",
        "Assisting in the development and creation of QA forms used for scoring team performance and quality.",
        "Creating a centralized platform to provide a one-stop-shop for all team data, including metrics, performance monitoring, absenteeism, contact methods, and a history of their tenure and accomplishments.",
        "Collaborated closely with clients to gather requirements and developed user stories. Subsequently, implemented streamlined processes to enhance overall project efficiency and ensure deliverables were precisely aligned with client expectations."
      ],
    },
    {
      title: "Online Agent",
      company_name: "RAPID RTC a Keyloop company",
      icon: RapidRTC,
      iconBg: "#E6DEDD",
      date: "Dec 2018 - Jan 2020",
      points: [
        "Chatting with clients and assisting them with queries about vehicle purchase, service, and parts inquiries for dealerships.",
        "Collaborated with team leaders to demonstrate the functionalities of the tools utilized within the department.",
        "Offers assistance to team members and delivers constructive feedback to improve the quality of service.",
        "Works together with different teams to identify and report issues related to dashboards."
      ],
    }
  ];
  
  const projects = [
    {
      name: "Winnipeg Auto Shop",
      description:
        "Web-based platform that allows employees from Winnipeg Auto Shop to log into their account and create tickets for their customers. Employees can log in and add notes to the ticket. The platform with complete with authentication and authorization and only displays options based on user's privileges. Users can be Employees, Managers or Admins. The session timeout after 1 week so the users are required to login again after timeout. Please use username \"test\" and password \"12345\" to log in as admin",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: autoRepair,
      source_code_link: "https://github.com/Neil3108/technotes",
      website_link: "https://technotes-vypq.onrender.com/"
    },
    {
      name: "Winnipeg Buy And Sell",
      description:
        "A simple buy and sell website similar to Kijiji. The user can post their own listing, look at other listings, send a message to the owner of the listing, edit or delete their existing listing. Each listing has a view counter as well.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: buyAndSell,
      source_code_link: "https://github.com/Neil3108/buy-and-sell-backend-MongoDB",
      website_link: "http://buy-and-sell-prakhar.s3-website.ca-central-1.amazonaws.com/listings"
    },
    {
      name: "Portfolio Website",
      description:
        "A visually appealing portfolio website made using React JS for interactivity, Three.js for 3D graphics and Vite to serve the application. The website serves as a dynamic platform to showcase my professional work experience and my other projects. I also used EmailJS for the contact form.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Neil3108/portfolio",
      website_link: "https://prakhar-sharma-portfolio.onrender.com/"      
    },
  ];
  
  export { technologies, experiences, projects };