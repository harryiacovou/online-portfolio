import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItemValue,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Harry Michael-Iacovou',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: `@HarryIacovou`,
  twitterCreator: `@HarryIacovou`,
  twitterDomain: `harrymi.co.uk`,
  twitterUrl: `https://harrymi.co.uk`,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Education: 'education',
  Work: 'work',
  Skills: 'skills',
  Stats: 'stats'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Harry Michael-Iacovou!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a London-based <strong className="text-stone-100">software developer</strong> in global tax.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/CV.pdf',
      text: 'CV',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A driven Computer Science graduate from Lancaster University (First-Class Honours), 
  currently working in the payroll division of a global tax software company. I have a strong interest 
  in full-stack development and a growing understanding of real-world software solutions in complex, 
  high-stakes environments. I thrive in collaborative teams, adapt quickly to new challenges, and 
  consistently aim to deliver high-quality, impactful work.`,
  aboutItems: [
    {label: 'Location', text: 'London, UK', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'British / Cypriot', Icon: FlagIcon},
    {label: 'Interests', text: 'Traveling, Cycling, Film, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Lancaster University', Icon: AcademicCapIcon},
    /*{label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Greek',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'HTML',
        level: 10,
      },
	{
        name: 'CSS (Tailwind, Standard)',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
	{
        name: 'C',
        level: 5,
      },
      {
        name: 'C#',
        level: 9,
      },
      	{
        name: 'SQL (SQLite, MSSQL)',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    imageUrl: 'https://source.unsplash.com/random/',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemValue[] = [
  {
    date: 'Oct 2021 - Jul 2024',
    location: 'Lancaster University',
    title: 'BSc (Hons) Computer Science',
    content: (
    <>
      <p>I have recently completed the final year of a three-year Computer Science course. Additionally, took a Part I minor in Accounting & Finance. I am proud to say that I have achieved a first-class degree.</p>
      <p>Activities and societies: Film Society, part-time work as Teaching Assistant</p>
      <ul className="list-disc list-inside indent-0.5">
        <li>Using AI to classify network traffic was my dissertation project. I used Python and trained a number of machine learning models on encrypted network traffic data, tweaking use of layers, optimisers, and using schedulers to reduce learning speed as the model trains which helps increase its accuracy. I evaluated the results and determined that out of the models (MLP, Decision Tree, Random Forest, KNN & SVM), the mutli-layer perceptron performs best due to its tuning and layer choices allowing it to identify more complex relationships with low correlation data. Network traffic classification is useful to help many different organisations, for example, internet service providers for QoS by prioritising traffic, reducing latency, and avoiding congestion on the network.</li>
        <li>A program in C to read and interpret data from a raw FAT16 image, displaying internal folders and reading files. I created a custom file-handler that assigns descriptors to the files in the image. (Received 100% [A+])</li>
        <li>A group project in Java to create a Pixel-Based Graphics Editor, using key programming principles such as extensibility to make a highly functional and robust program. We utilise the Git version control system with a topic-branch Git workflow. (received A, A+ and A on three parts of project)</li>
      </ul>
    </>),
  },
  {
    date: '2018 - 2021',
    location: 'Langley Park School for Boys',
    title: 'A-Levels in Computer Science, Politics & Media Studies',
    content: (
      <>
        <ul className="list-disc list-inside indent-0.5">
          <li>Computer Science - A</li>
          <li>Media Studies - B</li>
          <li>Politics - C</li>
        </ul>
      </>
    ),
  },
];

export const experience: TimelineItemValue[] = [
  {
    date: 'Aug 2024 - Present',
    location: 'Aethersys, London, UK',
    title: 'Software Analyst (A1)',
    content: (
      <>
        <p>
          On the payroll team working on the development of global tax software. 
        </p>
        <p>Create and improve new technology solutions to improve the ways that clients complete their payroll process, supporting clients in automating payroll-related tax processes.</p>
        <p>
          Contribute to the design, testing, and enhancement of solutions that integrate payroll data with equity compensation. 
        </p>
        <p>
          Work closely with clients to ensure software solutions support them as best as possible. 
        </p>
        <br />
        <ul className="list-disc indent-0.5 list-inside">
          <li>Implemented a way for clients to generate company-tailored demographics files</li>
          <li>Created logic to locate and match compensation from prior pay periods and allow clients to see how an employee's pay has changed over time</li>
          <li>Added a way for clients to bulk import data into the software via zip upload</li>
          <li>Reworked the data requests system, creating new, easier to use pages and backend logic, allowing clients to create data requests and gather employee compensation data from vendors</li>
          <li>Resolved large-scale bugs, including concurrency issues affecting important environments, fixing issues with recurring jobs, and reworking how pay periods are created to prevent infinite loops,
             adjust for non-calendar tax years, and improve the code-base for easier readability and maintainability.</li>
          <li>Improving the ways that clients can generate reports by making a more complex set of filters available which allows clients to narrow down the data that they require much more easily</li>
        </ul>
      </>
    ),
  }, 
  {
    date: 'Oct 2022 - Apr 2024',
    location: 'Lancaster University, Lancaster, UK',
    title: 'Undergraduate Teaching Assistant',
    content: (
      <>
        <p>
          Providing teaching and support to first and second-year Computer Science students during term-time
          practical sessions, helping students to progress in their learning and understanding of the
          fundamentals of computer science, software development and operating systems.
        </p>
        <p>
          Invited to become a part of the teaching assistant team in 2022 and again in 2023.
        </p>
        <br/>
        <p>I have supported students in the following topics:</p>
        <ul className="list-inside list-disc indent-0.5">
          <li>Fundamentals of Computer Science module</li>
          <li>Discrete mathematics</li>
          <li>Data structures</li>
          <li>Operating systems (concurrency and filesystems)</li>
          <li>Software Development module</li>
          <li>Programming in Java</li>
          <li>Git Version Control</li>
          <li>Collaboration when programming</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Jul 2023 - Sep 2023',
    location: 'Aethersys, London, UK',
    title: 'Work Experience/C# and React Development',
    content: (
      <>
        <p>Gaining valuable knowledge creating real-world networked financial software in React, HTML, JavaScript and C#
        </p>
        <ul className="list-disc indent-0.5 list-inside">
          <li>Version control in a business</li>
          <li>Testing and debugging</li>
          <li>Making server software thread-safe with concurrency</li>
          <li>Increasing usability on front-end website, making affordances clearer using HCI knowledge</li>
          <li>Communicating with team to form best solutions for problems presented</li>
          <li>Using a mediator design pattern in large-scale projects</li>
          <li>Using API calls to get and process data</li>
          <li>Database management, including successfully migrating multiple database tables to ensure data loss does not occur</li>
          <li>I was assigned an analytical project to produce useful tables using information from the Git and the Azure DevOps API about contributions for managers to evaluate staff performance</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Apr 2022 - Jun 2022',
    location: 'Lancaster University, Lancaster, UK',
    title: 'IT Operations Assistant',
    content: (
      <>
        <p>
          This role is important and plays a large part in the smooth and effective running of IT services at the University.
        </p>
        <p>
          Teaching Space Checks: I examine and test IT equipment in lecture theatres and other teaching spaces to look for issues that could impact teaching or other uses of the space. If issues are found I troubleshoot and report these issues to IT staff so they can be rectified as soon as possible.
        </p>
        <p>
          Workshop: In this part of the role I mainly restocked equipment in different spaces around campus. I also updated software and firmware on devices. Another thing I did in this role is research software products and services that the University are looking for and find options that give optimum results.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are some ways you can contact me. Feel free to reach out if you have any questions or just want to say hi!',
  items: [
    {
      type: ContactType.Email,
      text: 'harry@harrymi.co.uk',
      href: 'mailto:harry@harrymi.co.uk',
    },
    {
      type: ContactType.Location,
      text: 'London, UK',
      href: '',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@harrymi03',
    //   href: 'https://www.instagram.com/harrymi03/',
    // },
    {
      type: ContactType.Github,
      text: 'Thrilla1',
      href: 'https://github.com/Thrilla1',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Thrilla1'},
  /*{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},*/
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/harry-iacovou/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/harrymi03/'},
];
