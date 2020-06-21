import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Gastón Mira | Android dev. | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal web.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Gastón Mira',
  subtitle: 'I\'m an Android developer working at Globant & learning new technologies.',
  cta: 'Who Am I?',
};

// ABOUT DATA
export const aboutData = {
  img: 'gastonPerfilWeb.jpg',
  paragraphOne: 'I\'m a Systems Engineer, with more than 7 years of experience within one of the most prestigious companies in Argentina. I\'ve done tasks as a web developer, to then focus on the development of mobile applications. I was part of onsite teams for several project discoveries.',
  paragraphTwo: 'At present, I stand out for leading teams, accompanying them for their development and continuous improvement, carrying out Android projects under his charge. Among my tasks are the estimation and planning of the projects in conjunction with the product owners and delivery leads.',
  paragraphThree: 'Making decisions regarding the architecture and design of the applications, to carry out the development of the same optimizing resources and guiding the team towards the fulfillment of objectives.',
  resume: 'https://www.linkedin.com/in/gastonmira/?locale=en_US', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'globant.jpg',
    title: 'Work done in Globant',
    info: 'I\'ve worked in several projects in different industries. From banks, supermarkets to cruise ships industries. Leading teams, planning & estimating. Also giving feedback and doing performance assessments.',
    info2: 'Gatekeeper leading interviews for candidates. Always learning last updates and tools for Android development.',
    url: 'https://www.globant.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'androidlogo.jpg',
    title: 'Proficient In',
    info: 'Android - Management - Kotlin - MVP - MVVM - Clean Architecture - Design Patterns - Gradle - Retrofit - XML - Unit testing - RxJava - Git - Android Studio - Scrum methodologies - Kanban - Java',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gastonmiraDev.png',
    title: 'gastonmira.dev',
    info: 'My website is part of the first of more personal side projects in order to learn new technologies.',
    info2: 'This project gave me an idea idea of how to develop in React using Gatsby. The next steps are to learn NodeJS & microservices and improving my Android knowledge. ',
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
