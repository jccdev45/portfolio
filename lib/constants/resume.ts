import { PROJECT_LIST_ITEMS } from "./project-list-items"

export interface Skill {
  category: string
  skills: string[]
}

interface ResumeData {
  contactInfo: {
    name: string
    location: string
    email: string
    site: string
    github: string
    linkedin: string
    phone: string
  }
  summary: string
  skills: Skill[]
  projects: typeof PROJECT_LIST_ITEMS
  education: {
    school: string
    degree: string
    date: string
  }[]
  workHistory: {
    company: string
    location: string
    position: string
    date: string
    description: string[]
  }[]
}

export const resumeData: ResumeData = {
  contactInfo: {
    name: "Jordan Cruz-Correa",
    location: "New York, NY",
    email: "jccdev45@gmail.com",
    site: "https://jccdev.vercel.app",
    github: "https://github.com/jccdev45",
    linkedin: "https://linkedin.com/in/jordan-cruz-correa",
    phone: "Available upon request",
  },
  summary:
    "Experienced frontend-focused software engineer with a strong background in React, Typescript, and NextJS. Skilled in developing responsive and user-friendly web applications using cutting-edge JavaScript frameworks and libraries. Proficient in HTML, CSS, and TailwindCSS for creating visually appealing interfaces. Familiar with backend technologies such as Supabase and Node.js, and open to exploring full-stack opportunities. Demonstrates exceptional problem-solving abilities and thrives in fast-paced environments. Committed to continuous learning and staying up-to-date with the latest trends in web development. Seeking a challenging role to contribute technical skills and creativity to drive innovation in exciting projects.",
  skills: [
    {
      category: "FRONTEND",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "NextJS",
        "TailwindCSS",
        "shadcn-ui",
        "Remix",
      ],
    },
    {
      category: "BACKEND",
      skills: [
        "Supabase",
        "Firebase",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "Bun",
      ],
    },
    {
      category: "TOOLS",
      skills: ["Git/GitHub", "VS Code", "Vercel", "Netlify"],
    },
    {
      category: "SOFT SKILLS",
      skills: [
        "Problem-solving",
        "Adaptability",
        "Teamwork",
        "Stress Management",
      ],
    },
  ],
  projects: PROJECT_LIST_ITEMS,
  education: [
    {
      school: "Institute of Culinary Education",
      degree: "Certificate of Completion Culinary Arts 2023",
      date: "May 2022 - January 2023",
    },
    {
      school: "General Assembly",
      degree: "Certificate of Completion Software Engineering Immersive 2020",
      date: "October 2019 - January 2020",
    },
    {
      school: "Code Immersives (Digital Film Academy)",
      degree: "Certificate of Completion Web Development Immersive 2019",
      date: "September 2018 - August 2019",
    },
  ],
  workHistory: [
    {
      company: "Freelance",
      location: "NYC, NY",
      position: "Web Developer",
      date: "January 2020 - Present",
      description: [
        "Utilized technologies such as NextJS, React, Typescript, and TailwindCSS to deliver responsive and performant web solutions.",
        "Adhered to SEO best practices while designing sites.",
        "Discussed site and app requirements with clients to produce actionable development plans.",
        "Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings",
      ],
    },
    {
      company: "Zou Zou's",
      location: "NYC, NY",
      position: "Line Cook",
      date: "November 2022 - February 2023",
      description: [
        "Instructed new staff in proper food preparation, storage, use of kitchen equipment and sanitation.",
        "Set up and prepared cooking supplies and workstations during opening and closing to maximize productivity.",
        "Prepared multiple orders simultaneously during peak periods with high accuracy rate, maximizing customer satisfaction, and repeat business.",
        "Prepared food items in compliance with recipes and portioning control guidelines",
      ],
    },
    {
      company: "General Assembly",
      location: "NYC, NY",
      position: "Teaching Assistant",
      date: "March 2020 - September 2020",
      description: [
        "Supported online classroom activities, tutoring, and reviewing work.",
        "Tutored struggling students individually and in small groups to reinforce learning concepts.",
        "Helped with grading assignments via Github code review, providing constructive feedback to students based on results.",
        "Acted as team lead for student project weeks, providing direct support and guidance for capstone project completion",
      ],
    },
    {
      company: "Luz Electric and Control Systems Inc.",
      location: "NYC, NY",
      position: "Electrical Helper",
      date: "January 2013 - January 2018",
      description: [
        "Provided and assisted with new electrical installations, repairs and services at locations all throughout New York City.",
        "Directly interfaced with customers to assist them in selecting the best possible products for their needs, in accordance with job requirements and trade regulations",
      ],
    },
    {
      company: "United States Army",
      location: "Fort Bliss, USA",
      position: "Power Generator Equipment Repairer",
      date: "January 2008 - January 2012",
      description: [
        "Provided maintenance and repairs for various diesel generators powering anti-air missile defense systems.",
        "Troubleshot according to regulations and kept timely logs for all work performed.",
        "Acted as the sole generator mechanic for various diesel generators powering anti-air missile defense systems.",
        "Worked with and learned from both wheel mechanics and warrant officers to maintain and repair generators as needed",
      ],
    },
  ],
}
