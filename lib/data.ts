import { SiCypress, SiJavascript, SiPlaywright, SiTrello, SiHtml5, SiCss3, SiPostman, SiGit, SiBootstrap, SiTailwindcss, SiJira, SiSelenium } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiJira,
    text: "Jira"
  },
  {
    icon: SiPlaywright,
    text: "PlayWright"
  },
  {
    icon: SiTrello,
    text: "Trello"
  },
  {
    icon: SiPostman,
    text: "Postman"
  },
  {
    icon: SiCypress,
    text: "Cypress"
  },
  {
    icon: SiSelenium,
    text: "Selenium"
  },
  {
    icon: SiHtml5,
    text: "HTML5"
  },
  {
    icon: SiCss3,
    text: "CSS3"
  },
  {
    icon: SiJavascript,
    text: "JavaScript"
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap"
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind"
  },
  {
    icon: SiGit,
    text: "Git"
  }
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "UI Design : Workout App",
    description: "This is my last UI Design application on mobile about workout app. Create with figma",
    link: "https://dribbble.com/shots/14717470-Workout-Apps"
  }
  // {
  //   title: "Project 2",
  //   description: "Give a short description about project 2",
  //   link: "https://github.com/"
  // },
  // {
  //   title: "Project 3",
  //   description: "Give a short description about project 3",
  //   link: "https://github.com/"
  // },
  // {
  //   title: "Project 4",
  //   description: "Give a short description about project 4",
  //   link: "https://github.com/"
  // },
  // {
  //   title: "Project 5",
  //   description: "Give a short description about project 5",
  //   link: "https://github.com/"
  // },
  // {
  //   title: "Project 6",
  //   description: "Give a short description about project 6",
  //   link: "https://github.com/"
  // }
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "PT.GearInc Services Indonesia",
    logo: "/company-logo.png",
    position: "Lemon8 Content Moderator",
    description: "Lemon8 is a newest social media which is very widely used by young users, especially women makes this platform a very friendly platform to use because it provides many aspirations about everyday life.",
    years: "Oct, 2022 - Oct, 2023"
  },
  {
    company: "PT.GearInc Services Indonesia",
    logo: "/company-logo.png",
    position: "TikTok Content Moderator",
    description:
      "Content moderators play a crucial role on social media platforms. They are in charge of examining and evaluating user-generated content to make sure it fulfills with the rules and regulations established by the platform and to preserve a welcoming and safe environment for all users. In order to raise the quality of the platform, content moderators also collaborate with the client's regulations and permissions.",
    years: "Dec, 2020 - Oct, 2022"
  },
  {
    company: "Badan Pengembangan Sumber Daya Manusia Provinsi Bali",
    logo: "/company-logo.png",
    position: "Internship",
    description:
      "Interned as an IT Support team. In charge of handling IT infrastructure owned by the office and conducting regular maintenance so that all IT infrastructure can be used as well as possible and can support the work of employees in the office. Then do data input and data processing.",
    years: "Sep, 2018 - Nov, 2018"
  },
  {
    company: "ITB Stikom Bali",
    logo: "/company-logo.png",
    position: "Student",
    description: "Graduated with cumlaude predicate and cumulative score 3.60",
    years: "Aug, 2016 - Sep, 2020"
  }
];

export const aboutYou = {
  name: "Your Name",
  description: "👋 Hi, I'm Random Person. Developer. I'm passionate about.... This is a short description about yourself.... goes in the left sidebar of the landing page.",
  // yearsOfExperience: "x years",
  location: "Bali, Indonesia",
  email: "rzaapratama@gmail.com"
};

export const logoText = "Reza Pratama";

export const marketingHeadlines = {
  mainHeadline: `Person who have interest and passion in all related about software testing. \n Focus, Discipline, and Responsibility.`,
  subHeadline: "Software Quality Assurance"
};

export const websiteMetadata = {
  title: "Reza Pratama",
  description: "👋 Hey, Reza Pratama here. Welcome to my portfolio website."
};
