import { Translation } from "./types";

const en: Translation = {
  header: {
    name: "Muhammad Noman Ajmal",
    title: "Software Engineer | Full Stack Developer",
    location: "Riyadh, Saudi Arabia",
    dob: "09 June 1998",
    phone: "00966545864496",
    email: "nomanajmal007@gmail.com",
    toggleTheme: "Toggle theme",
    toggleLanguage: "Toggle language",
    description:
      "Hi, I’m a Full-Stack Developer with 5+ years of experience building scalable and high-performance web apps. I specialize in Ruby on Rails for backend and use modern JS frameworks like React, Next.js, and Angular for the frontend. I help turn ideas into clean, maintainable, and efficient solutions.",
  },
  education: {
    title: "Education",
    items: [
      {
        period: "Oct 2017 - Jul 2021",
        institution: "University of Central Punjab, Lahore, Pakistan",
        degree:
          "Bachelor of Computer Science (3.33 out of 4 CGPA) Attested by Saudi Culture and Saudi Embassy",
        description: "",
      },
      {
        period: "Aug 2015 - Jun 2017",
        institution: "Punjab Group of Colleges, Lahore, Pakistan",
        degree:
          "Intermediate in Computer Science (Broad of Intermediate & Secondary Education Lahore)",
        description: "",
      },
      {
        period: "Apr 2013 - May 2015",
        institution: "Lahore Model School, Lahore, Pakistan",
        degree:
          "Matriculation in Computer Science (Broad of Intermediate & Secondary Education Lahore)",
        description: "",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "06/2023 - present",
        company: "Oivan, Riyadh",
        role: "Senior Software Engineer",
        description:
          "I played a pivotal role in the development of the Ejar Housing web application by NHC (National Housing Company), focusing on implementing innovative features to enhance its functionality and user experience. Additionally, I diligently maintained the app by swiftly addressing bugs and technical issues to ensure seamless operation. Through collaborative efforts and proactive problem-solving, I sustained the app's performance and reliability, meeting user needs effectively while upholding high standards of quality and efficiency.",
        description_2:
          "Currently, I am working on the Saudi Electric Efficiency Center (SEEC) project, where I am responsible for adding new stories and features to the website from scratch. This includes implementing data tables with CRUD operations, ensuring efficient data management, and enhancing the platform's overall usability. By focusing on performance optimization and feature expansion, I contribute to improving the user experience and functionality of the system.",
      },
      {
        period: "03/2023 - 06/2023",
        company: "InterPay, Riyadh",
        role: "JavaScript Developer",
        description: `I built a new Portal for the logistics web app from the ground up. I added new features to make it better and fixed any problems that popped up along the way. I worked with others to make sure we stayed on track, keeping the app running smoothly for everyone to use.`,
      },
      {
        period: "10/2020 - 12/2022",
        company: "Coding Cops, Lahore",
        role: "Software Engineer",
        description: `Developed full-stack web applications on Ruby on Rails (Backend API), Angular, and React Js (Frontend), with full dedication. I have added new features, debugged/fixed bugs, written test cases/scripts/jobs, and deployed them during this job.`,
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "Saudi Energy Efficiency Center (React / Next.Js / .NET Framework)",
        description: `The SEEC project enables ISO 50001 licensing after course completion and tracks energy consumption for facilities across Saudi Arabia. It includes three web apps: a landing website, a dashboard, and an e-learning system, all built with React/Next.js and a .NET backend. I redesigned the landing page to match the new Figma design and provide project details to visitors. The dashboard supports multiple roles (Admin/User), allowing users to manage facilities, enroll in courses, handle licensing, and submit energy data to SEEC. I also added new features based on client and customer needs.`,
        technologies: [
          "React",
          "Next.js",
          ".NET Framework",
          "Tailwind CSS",
          "Jira",
          "Github",
          "DBeaver",
          "PostgreSQL",
        ],
        link: "https://www.enms.seec.gov.sa/",
      },
      {
        name: "Ejar Housing Web App by NHC (National Housing Company) (Ruby on Rails/Angular)",
        description: `The housing web app provides rental services, facilitating contracts between lessors and tenants for government record-keeping in Saudi Arabia. It operates as a request-based system, where contract parties can approve or reject requests. I implemented a contract waiver feature, allowing tenants to be replaced through requests between the contract parties. Additionally, I added an electronic notification system to keep all parties informed of any updates or progress in the contract.`,
        technologies: [
          "Ruby on Rails",
          "Angular",
          "Jira",
          "Github",
          "PgAdmin",
          "PostgreSQL",
        ],
        link: "https://eservices.ejar.sa/",
      },
      {
        name: "Intercity Admin Portal (Angular / Vue.Js)",
        description: `The web admin portal is designed to manage the shipping of products across Saudi Arabia. It allows admins to assign riders to specific orders, track their real-time locations, and update shipping details as needed. Additionally, Firebase integration enables the portal to send notifications for various events. The project includes two separate portals, each developed using different frameworks: Angular and Vue.js.`,
        technologies: [
          "Angular",
          "Vue.js",
          "Firebase",
          "Jira",
          "Bitbucket",
          "Angular Material",
        ],
        link: "https://customer.intercityxpress.com/login",
      },
      {
        name: "Xalidus HR/Sapling (Ruby on Rails/React Js/Angular)",
        description: `The HR system website streamlines employee payroll, document management (signatures/uploads), tasks, and onboarding/offboarding processes, benefiting millions of users in the US and UK. I implemented a UI switcher and welcome modal using LaunchDarkly Feature Flags. Additionally, I replaced the default Devise authentication with a custom OAuth-based system, Identity Server. I also managed integrations with BambooHR, Xero, and ADP, ensuring seamless data synchronization between these platforms and Sapling.`,
        technologies: [
          "Ruby on Rails",
          "React",
          "Angular",
          "Jira",
          "Angular Material",
          "PgAdmin",
          "PostgreSQL",
          "Jenkins",
          "Github",
        ],
        link: "https://www.kallidus.com/sapling-login/",
      },
      {
        name: "Locable (Ruby on Rails)",
        description: `Entrepreneurs use the business marketing website to promote their businesses. I developed a platform that allows customers to buy and sell products seamlessly. Additionally, I integrated Stripe for payments using the Stripe Ruby API. I also implemented a feature for uploading custom company posts with customizable sections, enhancing content flexibility.`,
        technologies: ["Ruby on Rails", "Stripe"],
        link: "https://www.locable.com/",
      },
      {
        name: "Automatic Resume Ranking (Python/Django/Machine Learning)",
        description: `Automatic Resume Ranking is a Machine Learning and NLP-based web app used to rank and score multiple resumes. PostgreSQL is used in it for the database. Python/Django is used to create the web app.`,
        technologies: ["Python", "Django", "Machine Learning", "PostgreSQL"],
        link: "#",
      },
    ],
  },
  skills: {
    title: "Skills",
    items: [
      "Strong Knowledge of Computer Science Concepts - OOP, Database, Operating System and Data Structures",
      "Excellent conceptual and analytical skills",
      "Effective interpersonal skills",
      "Good Problem Solving and Logic Building",
      "Excellent Grip on Microsoft (Word, Excel, and PowerPoint)",
      "Great Team Player",
      "Great Management Skills",
      "Good communication - written and oral skills",
      "Excellent Typing Speed",
    ],
  },
  technicalSkills: {
    title: "Technical Skills",
    items: [
      "Ruby / Ruby on Rails",
      "Javascript / TypeScript",
      "Next.js",
      "React",
      "Vue Js",
      "Angular",
      ".NET Framework / ASP.net",
      "C# / C / C++",
      "Python / Django",
      "Tailwind CSS",
      "Angular Material",
      "Rxjs",
      "MySQL",
      "HTML / CSS",
      "JQuery",
      "Github / Gitlab",
      "GraphQL",
      "Azure DevOps",
      "Jira",
      "PostgreSQL",
      "AJAX / Postman",
      "Microsoft Office",
      "Jenkins",
      "R Language",
      "PgAdmin / DBeaver",
      "Linux / Ubuntu",
    ],
  },
  personality: {
    title: "Personality",
    items: [
      "Communicative",
      "Creativity",
      "Flexibility/adaptability",
      "Problem-solving",
      "Self-motivated",
      "Punctuality",
      "Organized",
      "Critical thinking",
      "Time management",
    ],
  },
  certifications: {
    title: "Certifications & Courses",
    items: [
      {
        name: "Udemy: Dissecting Ruby on Rails 5",
        issuer: "Udemy",
        date: "",
        link: "",
      },
      {
        name: "Udemy: React The Complete Guide",
        issuer: "Udemy",
        date: "",
        link: "",
      },
      {
        name: "Udemy: HTML 5 and CSS 3 Fundamentals",
        issuer: "Udemy",
        date: "",
        link: "",
      },
      {
        name: "FreeCodeCamp: Angular for Beginners Course",
        issuer: "FreeCodeCamp",
        date: "",
        link: "",
      },
      {
        name: "TestDome: Ruby on Rails",
        issuer: "TestDome",
        date: "Dec 23, 2022",
        link: "https://www.testdome.com/certificates/038f42dc7eb34257a897f44c013a2ec5",
      },
      {
        name: "Saudi Council of Engineers",
        issuer: "Saudi Council of Engineers",
        date: "",
        link: "",
        description: "Membership ID: 911564 with valid transferable iqama",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "English", level: 5 },
      { name: "Urdu", level: 5 },
      { name: "Punjabi", level: 5 },
      { name: "Arabic", level: 3 },
    ],
  },
  hobbies: {
    title: "Hobbies",
    items: [
      "Technology",
      "Snooker",
      "Football",
      "Listening Music",
      "Traveling & Tourism",
      "Gaming",
      "Coding",
    ],
  },
  contact: {
    title: "Contact",
    email: "nomanajmal007@gmail.com",
    phone: "0545864496",
    social: {
      github: "https://github.com/nomanajmal009",
      linkedin: "https://www.linkedin.com/in/muhammad-noman-ajmal-ab9b27211/",
      twitter: "#",
    },
  },
};

export default en;
