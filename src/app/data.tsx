type Tool = {
  name: string;
  image: string;
};

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  tools: Tool[];
  github: string;
};

export const projects: Project[] = [
  {
    id: 0,
    title: "QuizWhiz",
    image: "/images/quizwhiz.png",
    description:
      " QuizWhiz is an innovative learning platform that revolutionizes the way you prepare for exams and quizzes.\
      Sign up, take AI-generated quizzes, schedule quizzes, track your progress, and learn new concepts to enhance your exam preparation and quiz performance.\
      Powered by ChatGpt",
    link: "https://quizwhiz-72df8.web.app",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "REACT", image: "/images/react.svg" },
      { name: "Tailwind", image: "/images/tailwind.svg" },
      { name: "JS", image: "/images/js.svg" },
      { name: "ChakraUI", image: "" },
      { name: "ChatGPT", image: "" },
      { name: "Firebase", image: "/images/firebase.svg" },
      { name: "GIT", image: "" },
    ],
    github: "https://github.com/Bolexzy/QUIZWHIZ",
  },
  {
    id: 1,
    title: "Travel Diary",
    image: "/images/travel-jounal.png",
    description:
      "A dynamic web application powered by React.\
        With this React-based project, I've crafted a  mini-chronicle of globe-trotting escapades. Featuring remarkable locations and a minimalistic design.\
        This project contents is only static and not available for user interactions or engagements.",
    link: "https://imaginative-dango-63fa75.netlify.app",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "REACT", image: "/images/react.svg" },
      { name: "Tailwind", image: "/images/tailwind.svg" },
      { name: "JS", image: "/images/js.svg" },
      { name: "GIT", image: "" },
    ],
    github: "https://github.com/Bolexzy/travel_diary",
  },
  {
    id: 2,
    title: "Business Card",
    image: "/images/business-card.png",

    description:
      "My Digital Business Card project is a virtual introduction to my personality.\
        The design is sleek and modern, mirroring my approach to work and life and an innovation to the traditional hard copy business cards.\
        I've utilized the latest web technologies, including React and Tailwind CSS, to ensure a seamless and responsive experience across various devices.\
        ",
    link: "https://heartfelt-pasca-64edc1.netlify.app",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "REACT", image: "/images/react.svg" },
      { name: "Tailwind", image: "/images/tailwind.svg" },
      { name: "JS", image: "/images/js.svg" },
    ],
    github: "https://github.com/Bolexzy/business_card",
  },
  {
    id: 3,
    title: "Drag-and-Drop Image Gallery",
    image: "/images/dnd-gallery.png",
    description:
      "The Drag-and-Drop Image Gallery is where aesthetics meet innovation.This project is a fully functional and responsive image gallery built with Next.js. Users can log in, browse a collection of images, and use drag-and-drop functionality to rearrange them within the gallery.\
      Each image comes with descriptive tags for easy categorization and search. You'll find it a breeze to filter through your collection based on these tags, simplifying navigation and discovery.\
      ",
    link: "https://gallery-hngx.vercel.app",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "Tailwind", image: "/images/tailwind.svg" },
      { name: "JS", image: "/images/js.svg" },
      { name: "NextJS", image: "/images/next.svg" },
      { name: "NextAUTH", image: "" },
      { name: "GIT", image: "" },
    ],
    github: "https://github.com/Bolexzy/gallery_hngx",
  },
  {
    id: 4,
    title: "MovieBox",
    image: "/images/movie-box.png",
    description:
      "This project is designed as a go-to platform for discovering movies, viewing description, and making informed choices for your next movie nigh\
      The heart of MovieBox lies in its integration with the TMDB API, which ensures an up-to-date library of movies across genres. With MovieBox, you can easily search for your favorite films, check out detailed information, and even watch trailers to get a taste of what's in store.\
",
    link: "https://movie-box-hngx.vercel.app/",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "Tailwind", image: "/images/tailwind.svg" },
      { name: "JS", image: "/images/js.svg" },
      { name: "REACT", image: "/images/react.svg" },
      { name: "GIT", image: "" },
    ],
    github: "https://github.com/Bolexzy/MovieBox_HNGX",
  },
  {
    id: 5,
    title: "Rock Paper Scissors",
    image: "/images/rps-game.png",
    description:
      "This project is all about friendly competition and quick decision-making. The game interface is sleek, intuitive, and user-friendly, making it accessible to players of all ages. With just a few clicks, you can engage in exciting matches against a computer opponent or challenge your friends to epic duels.\
        The game mechanics are as simple as the original: Rock crushes Scissors, Scissors cuts Paper, and Paper covers Rock.\
        ",
    link: "https://bolexzy.github.io/rock-paper-scissors-game/",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "JS", image: "/images/js.svg" },
      { name: "GIT", image: "" },
    ],
    github: "https://github.com/Bolexzy/rock-paper-scissors-game",
  },
  {
    id: 6,
    title: "Renewable Energy World",
    image: "/images/energyrenewableworld.png",
    description:
      "This 'Renewable Energy World' website is a project completed at Qwasar, to showcase my love for green energy and my skills in search engine optimization and WordPress development.\
       Also with the goal of educating and raising awareness about the benefits of renewable energy sources.\
       The contents of the site are for informational purposes only and are not meant to serve as an endorsement of any particular renewable energy technology or company",
    link: "https://energyrenewableworld.home.blog",
    tools: [
      { name: "HTML", image: "/images/html.svg" },
      { name: "CSS", image: "/images/css.svg" },
      { name: "WordPress", image: "/images/tailwind.svg" },
      { name: "JS", image: "/images/js.svg" },
    ],
    github: "",
  },
];

export default projects;
