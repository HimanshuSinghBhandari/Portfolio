 
import Project_1 from "../public/assets/project/project1.png";
import Project_2 from "../public/assets/project/project2.png";
import Project_3 from "../public/assets/project/project3.png";
import Project_4 from "../public/assets/project/project4.png";
// import Project_5 from "../public/assets/project/project5.png";
// import Project_6 from "../public/assets/project/project6.png";
// import Project_7 from "../public/assets/project/project7.png";

// NavBar Data
export const navBarData = [
  { num: 1, title: "HOME", asPath: "/#" },
  { num: 2, title: "ABOUT", asPath: "/#about" },
  { num: 3, title: "PROJECT", asPath: "/#project" },
  { num: 4, title: "CONTACT", asPath: "/#contact" },
];

export const aboutData = [
  {
    num: 1,
    title: "A Full Stack Developer, fueled by chai and friends, straight outta from India",
    contetnt:
      "It's not just a job for me; it's my creative playground, where I get to craft amazing web experiences . Being a Developer isn't just what I do, it's who I am - a tech enthusiast on a mission to build innovative, user-friendly applications that make a real difference in people's lives.",
  },
  {
    num: 2,
    title: "I love bringing life into my code",
    contetnt:
      "Don't ask me how I do it, because even I'm not sure. Somehow, I manage to bring my code to life. I guess you could say I've mastered the art of googling my way through it all.",
  },
  {
    num: 3,
    title: "I'm open to freelancing and internships",
    contetnt:
      "Getting around the industry in 2024 is tough, really tough. But I'm sticking to it, determined to find my place and make progress, bit by bit.",
  },
];


 
export const projectData = [
  {
    num: 1,
    title: "Portfolio(Himanshu)",
    category: "Personal Project",
    date: "2024. 03. 03. ~ 2024. 04. 11.",
    refacDate: "2024. 04. 11",
    desc: "Its a  personal portfolio project, a carefully curated space where i display my skills, achievements, and projects to the world.",
    img: Project_1,
    url: "",
    github_url: "",
    skill: [
      "NextJS",
      "TypeScript",
      "Framer-motion",
      "GSAP",
      "Tailwind",
    ],
  },
  {
    num: 2,
    title: "PathFinding Visulalization",
    category: "Personal Project",
    date: "2023. 11. 07. ~ 12. 01.",
    refacDate: "Update Frequently",
    desc: "Pathfinding visualization refers to the graphical representation of algorithms designed to find the most optimal path between two points in a given environment or grid.",
    img: Project_2,
    url: "https://pathfinding-visualization-seven.vercel.app/",
    github_url: "https://github.com/HimanshuSinghBhandari/Pathfinding-visualization",
    skill: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Data structure and Algorithum",
      "BFS",
      "DFS",
    ],
  },
  {
    num: 3,
    title: "Shoe Ecomerce",
    category: "Personal Free Time project",
    date: "2023. 07. 08. ~ 08. 05.",
    refacDate: "2023. 09. 13",
    desc: "A simple React.JS e-commerce website that allows user to view products, view their details, and add to a cart where they can remove the item or increase the quantity.",
    img: Project_3,
    url: "https://shoes-ecom-two.vercel.app/",
    github_url: "https://github.com/HimanshuSinghBhandari/shoes_ecom",
    skill: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "GSAP",
      "Framer-motion",
    ],
  },
  {
    num: 4,
    title: "I's gallary 갤러리",
    category: "팀프로젝트(5명) - 멋쟁이사자처럼",
    date: "2023. 03. 01. ~ 03. 29.",
    refacDate: "예정",
    desc: "React, Vite로 구성한 SNS 웹페이지입니다. 기획 & 디자인 & 개발을 직접 수행했습니다. Firebase로 회원가입/로그인을 연동하여 구현하고, Framer-Motion을 이용하여 애니메이션을 추가했습니다.",
    img: Project_3,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    notion_url:
      "https://ink-kite-3ad.notion.site/I-s-gallery-1f16669e89c342e09f13b68a625bee48?pvs=4",
    skill: ["React", "Framer-motion", "Firebase", "Figma"],
  },
//   {
//     num: 5,
//     title: "티빙 클론 - Taing",
//     category: "팀프로젝트(5명) - 멋쟁이사자처럼",
//     date: "2023. 01. 27. ~ 02. 09.",
//     refacDate: "예정",
//     desc: "순수 HTML, CSS, JavaScript만으로 제작한 Tving 클론코딩 웹페이지입니다. Swiper 라이브러리를 이용해 캐러셀 기능을 추가했고, Fetch를 이용해 이미지를 불러오게 구현했습니다.",
//     img: Project_4,
//     url: "https://likelion-fe4-rp11.github.io/Asparagus/",
//     github_url: "https://github.com/seovee/masterClass-Fin",
//     notion_url:
//       "https://ink-kite-3ad.notion.site/Taing-6887a72330f94cb2835629827d96bbc8?pvs=4",
//     skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
//   },
//   {
//     num: 6,
//     title: "회원가입 구현",
//     category: "개인프로젝트 - 원티드",
//     date: "2023. 08. 12. ~ 08. 16.",
//     refacDate: "예정",
//     desc: "React-hook-form 라이브러리를 이용한 회원가입, 로그인 기능구현 웹페이지입니다.",
//     img: Project_5,
//     url: "https://seovee.github.io/wanted-pre-onboarding-frontend/",
//     github_url: "https://github.com/seovee/wanted-pre-onboarding-frontend",
//     notion_url:
//       "https://ink-kite-3ad.notion.site/2a1b45c9a5e2488fae6157f39fb11036?pvs=4",
//     skill: ["React", "React-Router", "React-hook-form", "Style-Component"],
//   },
//   {
//     num: 7,
//     title: "바닐라 반응형 구현",
//     category: "개인프로젝트 - 원티드",
//     date: "2023. 08. 21. ~ 08. 24.",
//     refacDate: "예정",
//     desc: `HTML, CSS로만 반응형을 연습한 웹페이지입니다. 데스크톱, 태블릿, 모바일용 3가지를 순수 HTML, CSS로 적용해보았습니다.`,
//     img: Project_6,
//     url: "http://seovee.github.io/wanted-fe-challenge/",
//     github_url: "https://github.com/seovee/wanted-fe-challenge",
//     skill: ["HTML", "CSS"],
//   },
];
