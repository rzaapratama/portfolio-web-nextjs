import {
  SiCypress,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiCypress,
    text: "Cypress"
  },
  {
    icon: SiJavascript,
    text: "JavaScript"
  },
  {
    icon: SiReact,
    text: "React"
  },
  {
    icon: SiNextdotjs,
    text: "Next"
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind"
  },
  {
    icon: SiPostman,
    text: "Postman"
  },
  {
    icon: SiFlutter,
    text: "Flutter"
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
    icon: SiNodedotjs,
    text: "Node"
  },
  {
    icon: SiExpress,
    text: "Express"
  },
  {
    icon: SiPython,
    text: "Python"
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL"
  },
  {
    icon: SiMongodb,
    text: "MongoDB"
  },
  {
    icon: SiAmazonaws,
    text: "AWS"
  },
  {
    icon: SiHeroku,
    text: "Heroku"
  },
  {
    icon: SiSupabase,
    text: "Supabase"
  },
  {
    icon: SiFirebase,
    text: "Firebase"
  },
  {
    icon: SiGit,
    text: "Git"
  },
  {
    icon: SiDocker,
    text: "Docker"
  },
  {
    icon: SiPrisma,
    text: "Prisma"
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap"
  },
  {
    icon: SiMui,
    text: "MUI"
  }
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  // {
  //   title: "Project 1",
  //   description: "Give a short description about project 1",
  //   link: "https://github.com/"
  // },
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
    description:
      "Lemon8 is a newest social media which is very widely used by young users, especially women makes this platform a very friendly platform to use because it provides many aspirations about everyday life. As a content moderator for Lemon8, my primary responsibility are : Review and curate content to ensure that it complies with our company guidelines and policies, Ensure that every content uploaded by the user is right on target in accordance with the rules given by the client, Perform data input and monitoring related to existing rules and regulations, Maintaining a high level of professionalism and quality, Take responsibility for the labeled content, Labeling content uploaded by users, Review all content uploaded by users.",
    years: "Oct, 2022 - Oct, 2023"
  },
  {
    company: "PT.GearInc Services Indonesia",
    logo: "/company-logo.png",
    position: "TikTok Content Moderator",
    description:
      "Content moderators play a crucial role on social media platforms. They are in charge of examining and evaluating user-generated content to make sure it fulfills with the rules and regulations established by the platform and to preserve a welcoming and safe environment for all users. In order to raise the quality of the platform, content moderators also collaborate with the client's regulations and permissions. In addition, content moderators are responsible for the following duties : Filtering content that is against the rules, Resolving violations of the rules, Updating the platform's quality to ensure that it is always appropriate and secure for users of all ages. Giving clients feedback, Talking with clients about issues that occur on the platform.",
    years: "Dec, 2020 - Oct, 2022"
  },
  {
    company: "Company 1",
    logo: "/company-logo.png",
    position: "Company 1 Position",
    description: "Write briefly on your experience working at Company 1.",
    years: "Aug, 2018 - Sep, 2018"
  },
  {
    company: "Uni Name",
    logo: "/company-logo.png",
    position: "Student",
    description: "Write briefly about your university experience (degree, subject, etc.)",
    years: "Aug, 2015 - Jun, 2019"
  }
];

export const aboutYou = {
  name: "Your Name",
  description: "👋 Hi, I'm Random Person. Developer. I'm passionate about.... This is a short description about yourself.... goes in the left sidebar of the landing page.",
  // yearsOfExperience: "x years",
  location: "Indonesia",
  email: "rzaapratama@gmail.com"
};

export const logoText = "Reza Pratama";

export const marketingHeadlines = {
  mainHeadline: "Hello welcome to my website, I'm Reza who loves about technology",
  subHeadline: "Software Quality Assurance"
};

export const websiteMetadata = {
  title: "Reza Pratama",
  description: "👋 Hey, Reza Pratama here. Welcome to my portfolio website."
};
