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
    Nexom,
    portfolio,
    threejs,
    buyAndSell,
    autoRepair,
    adventureworks,
    TelcoCustomerChurnAnalysis
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
      title: "CRM Administrator",
      company_name: "Nexom",
      icon: Nexom,
      iconBg: "#383E56",
      date: "Apr 2024 - Current",
      points: [
        "Onboard new users into Salesforce, including account provisioning, permission configuration, and delivering hands-on training sessions tailored to each team's workflows.",
        "Design and build custom Salesforce solutions including custom objects, Lightning flows, and apps to automate business processes and meet evolving user requirements.",
        "Develop Power Automate flows to streamline cross-platform processes and build Power BI dashboards and reports to deliver actionable insights from Salesforce and other business data sources.",
        "Build and maintain API integrations connecting Salesforce with third-party platforms including Smartsheet (project management) to enable seamless data flow across systems.",
        "Lead end-to-end data integration for newly acquired companies, including data discovery, schema analysis, migration into Salesforce, and user training — successfully integrated 4 companies to date.",
        "Write Apex code to implement complex business logic, custom triggers, and backend processes that extend Salesforce beyond declarative configuration.",
        "Build and maintain Salesforce reports and dashboards that surface real-time pipeline, sales, and operational metrics, enabling data-driven decisions across the organization.",
        "Configure and manage Salesforce marketing campaigns and support the sales team in lead management, ensuring accurate tracking of the full sales funnel from prospect to close.",
        "Leverage advanced Excel capabilities (pivot tables, complex formulas, Power Query) for ad hoc data analysis, reporting, and data preparation tasks across business units.",
        "Maintain system governance by enforcing naming conventions, managing picklist values, and keeping user guides and documentation current to support scalability across operating companies."
      ]
    },
    {
      title: "Senior Online Agent",
      company_name: "RAPID RTC a Keyloop company",
      icon: RapidRTC,
      iconBg: "#383E56",
      date: "Jan 2020 - Apr 2024",
      points: [
        "Manipulating and analyzing data gathered from PowerBI, WFM software, CMS, SalesForce, and various large databases to report on recurring trends.",
        "Designing, implementing, and maintaining detailed performance tracking reports based on the gathered data.",
        "Automating and continuously improving current processes using macros coded in VBA and other tools. Implementing streamlined processes to enhance overall project efficiency and ensure deliverables are precisely aligned with client expectations.",
        "Publishing schedules for a team of 45+ members based on their preferences and business needs.",
        "Build robust forecast demand plans to show daily, weekly and monthly staffing needs.",
        "Providing customer service to internal and external customers, focusing on process improvement, training, and overall team quality assurance.",
        "Collaborating closely with clients to gather requirements and develop user stories.",
        "Managing and creating tickets in JIRA.",
        "Assisting in the development and creation of QA forms used for scoring team performance and quality.",
        "Creating a centralized platform to provide a one-stop-shop for all team data, including metrics, performance monitoring, absenteeism, contact methods, and a history of their tenure and accomplishments.",
        "Creating and implementing training materials.",
        "Facilitating the assignment of training schedules and projects."
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
      name: "Customer Churn Prediction Pipeline",
      description:"An end-to-end data pipeline for a telecom company's customer churn problem. Engineered a modular ETL system in Python to ingest, clean, and load 7,000+ customer records into a SQLite database. Performed exploratory analysis to identify key churn drivers - contract type, tenure, and monthly charges. Trained and evaluated XGBoost and Logistic Regression models achieving 0.836 ROC-AUC. Deployed as an interactive web app with a live prediction interface and EDA dashboard.",
      tags: [
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "XGBoost",
          color: "green-text-gradient",
        },
        {
          name: "ETL",
          color: "pink-text-gradient",
        },
        {
          name: "SQLite",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        }
      ],
      image: TelcoCustomerChurnAnalysis,
      source_code_link: "https://github.com/Neil3108/telco-churn-analysis",
      website_link: "https://prakhar-sharma-telco-churn-analysis-gaj5kzaej5v4krfqtxymu6.streamlit.app/"
    },
    {
      name: "Sales Analytics Dashboard - SQL, Power BI & Streamlit",
      description:
        "End-to-end business intelligence project built on Microsoft's AdventureWorks dataset. Designed an analytics schema in SQL Server using CTEs and window functions, built a star schema data model in Power BI with DAX time intelligence measures, and deployed an interactive Streamlit dashboard with Plotly visualizations. Features RFM customer segmentation, month-over-month revenue analysis, and product performance tracking across three dashboard pages.",
      tags: [
        {
          name: "SQL Server",
          color: "blue-text-gradient",
        },
        {
          name: "PowerBI",
          color: "green-text-gradient",
        },
        {
          name: "DAX",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "Streamlit",
          color: "blue-text-gradient",
        },
        {
          name: "Plotly",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        }
      ],
      image: adventureworks,
      source_code_link: "https://github.com/Neil3108/sql-powerbi-sales-analytics",
      website_link: "https://sql-powerbi-sales-analytics-rrs2rxsbejear2mxdznyua.streamlit.app/"
    },
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