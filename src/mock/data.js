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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
