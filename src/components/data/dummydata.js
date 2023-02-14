import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "Ichwaldi Dios Sya'Ban",
    post: " Software Developer",
    design: ".NET Developer",
    desc: "Design, develop, troubleshoot, debug, test, ensure browser compatibility and implement website code by using MS SQL Server and C#, and ASP.NET MVC, Javascript ",
  },
]
export const about = [
  {
    desc: "As a recent graduate of Sriwijaya University Palembang majoring in Computer Engineering with a GPA  (3.20). I have good motivation for growing, eager to learn, and can work in a team and individually.",
    desc1: "I am also now developing my skills in several areas including: technology, networking, computers, music, cryptocurency. I am currently looking for a job in the world of computer technology, industry, mechanics, machinery, mining, because I want to develop the skills I have.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: " Full-Stack Developer ",
    desc: "The Full-Stack Developer designs and maintains websites and systems to serve a company's needs. They develop these platforms to function independently, not needing to rely on third-party services to remain consistent.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: " Clean code is clear, understandable, and maintainable. When you write clean code, you're keeping in mind the other people who may read and interpret your code at a later time. ",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Frontend Developer",
    desc: "Build the interface that users see and interact with. They create websites in HTML, CSS, and JavaScript so people can access a site or application through their browser controls",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Data Analyst	",
    desc: "collects, cleans, and interprets data sets in order to answer a question or solve a problem. ",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Backend Developer",
    desc: "responsible for creating and maintaining technology at the back end of a website (the server, database and application).",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "System Engineering",
    desc: "Installs, configures, and tests operating systems, application software, and system management tools. ",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "2",
    title: "PROJECTS ON GOING",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "3",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "12",
    title: "MANGGUNG DINIKAHAN",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "17",
    title: "PEOPLES SEE ME",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Dios Anaknya Baik Kok",
    image: "./images/testimonials/team-1.png",
    name: "Irham Rafi",
    post: ".NET Developer",
  },
  {
    id: 2,
    text: "Teman Ngobrol Yang Baik Banget",
    image: "./images/testimonials/team-2.png",
    name: "Anonymous",
    post: "Mantan Pacarnya",
  },
  {
    id: 3,
    text: "Githubnya diprivate ",
    image: "./images/testimonials/team-3.png",
    name: "Heru Herman",
    post: "Kang Freelance Brebes Pride ",
  },
]
export const blog = [
  {
    id: 1,
    title: " Cara Belajar ASP.NET MVC",
    date: "Feb 12, 2023",
    author: "Diossyaban",
    desc: "Nanti Saya Upload",
    cover: "./images/blog/b1.jpg",
  },
  {
    id: 2,
    title: "Tuntas Kerjain Hackerank Solution",
    date: "Feb 13, 2023",
    author: "Diossyaban ",
    desc: "Nanti Saya Upload",
    cover: "./images/blog/b2.jpg",
  },
  {
    id: 3,
    title: "Apakah .NET 2023 Akan Mati?",
    date: "Feb 14, 2023",
    author: "Diossyaban ",
    desc: "Nanti Saya Upload",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Jl. Perjuangan Raya Kebun Jeruk",
    text2: "Jakarta, Indonesia ",
  },
  {
    icon: <PhoneIphone />,
    text1: "+6281369302158",
    text2: "+62895700834429",
  },
  {
    icon: <EmailOutlined />,
    text1: "ichwaldidiossyaban@gmail.com",
    text2: "diossyaban17@gmail.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
