import { useState } from "react"
import Project from "./components/project/Project"
import style from "./style.module.css"
import { ProjectType } from "./types/types"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  SiPython, SiNodedotjs, SiTypescript, SiSocketdotio, SiSequelize, SiPostgresql, SiRedux, SiReact, SiExpo, SiHtml5, SiCss3, SiJavascript, SiJava, SiSpringboot, SiSpringsecurity } from "react-icons/si"
import { SlScreenDesktop } from "react-icons/sl"
import { AiFillAndroid, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

function App() {
  const [projects, setProjects] = useState<ProjectType[]>([
    {
      title: "Chat Application Web",
      description: "Troca de menssagens instantaneas pela web",
      resources: ["React", "Redux", "Socket.io", "Typescript"],
      linkGF: "https://github.com/FabricioLR/chat_application_front",
      linkGB: "https://github.com/FabricioLR/chat_application_back",
      linkS: "https://glittering-scone-b55660.netlify.app",
      tecnologies: [SiNodedotjs, SiTypescript, SiReact, SiSocketdotio, SiSequelize, SiPostgresql, SiRedux],
      backEndDescription: "Node, Express, Sequelize, Socket.io e Postgres"
    },
    {
      title: "Spring boot microservice",
      description: "Microserviços de yotube-copy",
      resources: ["Java", "Spring boot", "Spring Security", "Postgres"],
      linkS: "",
      linkGF: "",
      tecnologies: [SiJava, SiSpringboot, SiSpringsecurity],
    },
    {
      title: "Chat Application Mobile",
      description: "Troca de menssagens por meio de aplicativo android",
      resources: ["Expo", "React Native", "Redux", "Socket.io", "Typescript"],
      linkGF: "https://github.com/FabricioLR/chat_application_mobile",
      linkGB: "https://github.com/FabricioLR/chat_application_back",
      linkS: "https://expo.dev/artifacts/eas/3Mum8LnCXRwiLPG8n1yF6K.apk",
      tecnologies: [AiFillAndroid, SiExpo, SiNodedotjs, SiTypescript, SiReact, SiSocketdotio, SiSequelize, SiPostgresql, SiRedux],
      backEndDescription: "Node, Express, Sequelize, Socket.io e Postgres"
    },
    {
      title: "View database desktop",
      description: "Visualizar banco de dado mysql/postgres por aplicativo",
      resources: ["Python", "Pyqt5"],
      linkGF: "https://github.com/FabricioLR/view_database_python",
      tecnologies: [SiPython, SlScreenDesktop],
    },
    {
      title: "Youtube-Copy Application Web",
      description: "Site para compartilhar e assistir a videos",
      resources: ["React", "Redux", "Typescript"],
      linkGF: "https://github.com/FabricioLR/youtube_front",
      linkGB: "https://github.com/FabricioLR/youtube_back",
      linkS: "https://heroic-sunburst-890588.netlify.app",
      tecnologies: [SiNodedotjs, SiTypescript, SiReact, SiSequelize, SiPostgresql, SiRedux],
      backEndDescription: "Node, Express, Sequelize e Postgres"
    },
    {
      title: "View database online",
      description: "Visualizar banco de dado mysql/postgres pela web",
      resources: ["React", "Redux", "Typescript"],
      linkGF: "https://github.com/FabricioLR/view_database_front",
      linkGB: "https://github.com/FabricioLR/view_database_back",
      linkS: "https://main--celadon-lokum-4d69c5.netlify.app/",
      tecnologies: [SiNodedotjs, SiTypescript, SiReact, SiSequelize, SiRedux],
      backEndDescription: "Node, Express"
    },
    {
      title: "Landign page-Copy",
      description: "Landing page de um coffee shop",
      resources: ["Html", "Css", "javascript"],
      linkGF: "https://github.com/FabricioLR/LandingPage",
      linkS: "http://coffe-shop-iota.vercel.app/",
      tecnologies: [SiHtml5, SiCss3, SiJavascript],
    },
    {
      title: "Send http requests",
      description: "Envio de requisições http pela web",
      resources: ["React", "Redux", "Typescript"],
      linkGF: "https://github.com/FabricioLR/send_request",
      linkS: "https://send-request.vercel.app",
      tecnologies: [SiTypescript, SiReact, SiRedux],
    },
  ])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div id={style.main}>
      <div id={style.info}>
        <h1 id={style.name}>Fabrício</h1>
        <p id={style.goal}>Future Back or Front end Developer</p>
        <p id={style.habilities}>Node • Typescript • Redux • React • Express • Sequelize • Postgresql • Spring boot • Python</p>
      </div>
      <div id={style.demonstration}>
        <p>My Projects</p>
        <Carousel responsive={responsive} className={style.projects} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} renderDotsOutside={true}>
          {
            projects.map(project => <Project project={project}/>)
          }
        </Carousel>
      </div>
      <div id={style.archivements}>
        <p>My Archivements</p>
        <div id={style.curses}>
          <div id={style.freecodecamp}>
            <p>Free Code Camp</p>
            <p>Organização sem fins lucrativos que oferece cursos gratuitos em sua plataforma web. O mais completo bootcamp online.</p>
            <ul>
              <li><span><a href="">Responsive Web Design Certification</a></span></li>
              <li><span><a href="">JavaScript Algorithms and Data Structures</a></span></li>
              <li><span><a href="">Back End Development and APIs</a></span></li>
              <li><span><a href="">Front End Development Libraries</a></span></li>
              <li><span><a href="">Quality Assurance</a></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div id={style.contact}>
        <p>Contact</p>
        <div id={style.contactinfo}>
          <div>
            <button>My cv</button>
          </div>
          <div>
            <p>Fabrício</p>
            <p>fabriciolongodearaujo@gmail.com</p>
            <p>+55 61995798701</p>
            <div>
              <AiFillGithub size={25} onClick={() => window.location.href = "https://github.com/FabricioLR"}/>
              <AiFillLinkedin size={25} onClick={() => window.location.href = "https://www.linkedin.com/in/fabr%C3%ADcio-longo-de-ara%C3%BAjo-70321a228/"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
