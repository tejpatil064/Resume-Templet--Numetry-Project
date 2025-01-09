import React from 'react'
import Resume from './Resume'

const sampleData = {
  name: "Tejas Patil",
  title: "UI/UX Designer",
  address: "Dhule, Maharashtra, India",
  number: "+91 1234567890",
  email: "tejpatil064@gmail.com",
  linkedin: "https://www.linkedin.com/in/tejpatil064/",
  website: "tejaspatil-portfolio.netlify.app",
  summary: "As a skilled and creative UI-UX designer and front-end developer with a strong passion for crafting visually stunning and user-friendly interfaces, I have a keen eye for detail and a solid background in design principles and programming languages.",
  experience: [
    {
      title: "UI/UX Desinger Intern",
      company: "Prognure Technologies",
      date: "Dec 2023 - Nov 2024",
      responsibilities: [
        "Lead the UI/UX team in Agile sprints, accelerating project delivery by 30% through timely design iterations.",
        "Developed wireframes, high fidelity prototypes and optimized information architecture, enhancing navigation efficiency by 30% and reducing task completion time by 20% using Figma.  ",
        "Crafted visually engaging interfaces , resulting in a 25% increase in user engagement of product & perform competitor analysis and user persona. "
      ]
    },
    {
      title: "Java Web Developer Intern",
      company: "R3 System Pvt. Ltd. ",
      date: "Jun 2023 - Jully 2023",
      responsibilities: [
        "Designed and implemented the architecture of 3 complex web applications using Java EE technologies like JSP, Servlets and JDBC ",
        "Cntegrated front-end components into Java application using HTML, CSS, JavaScript. nated testing and validation, ensuring compliance with industry standards."
      ]
    }
  ],
  projects: [
    {
      name: "MediSkin : Skin Care Application ",
      date: "Jan 2023 - Jun 2023",
      description: "Mobile Application Design",
      details: [
        "Designed a user-centric interface for MediSkin, increasing user engagement by through research & prototyping.",
        "Crafted intuitive UI for login, scan, history, AI chat, and profile, improving task completion by 50%. ",
        "Enhanced user satisfaction by 30% using iterative testing and usercentered design principles. "
      ]
    },
    {
      name: "LG Diaries  ",
      date: "Jan 2023 - Jun 2023",
      description: "Web Application Design",
      details: [
        "Lead UI design and frontend development of Local Guardian Diary, boosting efficiency by 40%. ",
        "Developed features for attendance, activities, and data management, enhancing oversight.",
        "Created a chat system for HODs and LGs, improving communication efficiency. "
      ]
    }
    
  ],
  skills: [
    "UI/UX Design",
    "Prototyping Tools",
    "User Research",
    "Interaction Design",
    "Visual Design",
    "Accessibility",
    "Responsive Design",
    "HTML5 & CSS3",
    "React.js",
    "Java",
    "C Programming & C#",
    "MySQL"
  ],
  education: [
    {
      degree: "B.Tech in Computer Engineering",
      school: "R. C. Patel Institute of Technology, Shirpur ",
      date: "2021 - 2025",
      details: "CGPA: 8.5/10 till SEM VI"
    }
  ],
  additionalInfo: {
    "Languages": "English, Hindi, Marathi",
    "Certifications": "Accenture UX Design Certification, Google UX Design Certification, UI/UX Design Internshala, Java Web Development R3 System Pvt. Ltd., Web Development Rinex IIT Bhubaneswar",
    "Awards/Activities": "Akatsuki Coding Culb UI/UX & Graphics Design team Lead RCPIT, 20+ UI/UX Designs, "
  }
}

function App() {
  return (
    <div className="app">
      <Resume data={sampleData} />
    </div>
  )
}

export default App