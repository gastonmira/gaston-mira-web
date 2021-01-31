import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Gastón Mira | Android dev. | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software Engineer from Argentina.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Gaston Mira',
  subtitle: "I'm a software engineer from Argentina working at Ualá & living like a day at a time.",
  cta: 'Who Am I?',
};

// ABOUT DATA
export const aboutData = {
  img: 'gastonPerfilWeb.jpg',
  paragraphOne:
    "I'm a Systems Engineer, working as Mobile lead at Ualá. Before, I worked more than 7 years in one of the most prestigious companies in Argentina. I've done tasks as a web developer, to then focus on the development of mobile applications. I was part of onsite teams for several project discoveries.",
  paragraphTwo:
    'At the moment, I stand out for leading teams, accompanying them for their development and continuous improvement, delivering mobile apps. Among my tasks are the estimation and planning of the projects in conjunction with the product owners and delivery leads.',
  paragraphThree:
    'Making decisions regarding the architecture and design of the applications, to carry out the development of the same optimizing resources and guiding the team towards the fulfillment of objectives.',
  resume: 'https://www.linkedin.com/in/gastonmira/?locale=en_US', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'uala-logo.png',
    title: "What I'm doing at Ualá?",
    info: 'I’m working as a mobile lead, aiming to improve a +40 devs team, looking for new horizons at the company. Finding new ways of team building, and guiding people toward personal growth. I’m developing career paths for our team, improving the onboarding process, and looking forward to standardizing our technical interviewing process.',
    info2: 'From a technical perspective, I also help with architectural decisions of the mobile app.',
    url: 'https://www.uala.com.ar/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'globant.jpg',
    title: 'Work done in Globant',
    info:
      "I've worked on several projects in different industries. From banks, supermarkets to cruise ships industries. Leading teams, planning & estimating. Also giving feedback and doing performance assessments. Also I have experience modularizing features in native to integrate with React Native project.",
    info2:
      'Gatekeeper leading interviews for candidates. Experience working on-site & daily communication with clients. Always learning last updates and tools for Android development.',
    url: 'https://www.globant.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'androidlogo.jpg',
    title: 'Proficient In',
    info:
      'Android - Management - Kotlin - MVP - MVVM - Clean Architecture - Design Patterns - Gradle - Retrofit - XML - Unit testing - RxJava - Git - Android Studio - Scrum methodologies - Kanban - Java',
    info2: 'Learning: React Native - React',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gastonmiraDev.png',
    title: 'gastonmira.dev',
    info:
      'My website is part of the first of more personal side projects in order to learn new technologies.',
    info2:
      'This project gave me an idea idea of how to develop in React using Gatsby. The next steps are to learn NodeJS & microservices and improving my Android knowledge. ',
    url: 'https://gastonmira.dev/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to contact me?',
  btn: 'Say hi!',
  email: 'hello@gastonmira.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/gastonmdq',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gastonmira/?locale=en_US',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/gastonmira',
    },
    {
      id: uuidv1(),
      name: 'twitch',
      url: 'https://www.twitch.tv/gastonmdq',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
