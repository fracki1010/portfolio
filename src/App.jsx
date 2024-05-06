import { Nav } from "./components/NavBar.jsx";
import { Button } from "flowbite-react";
import "./App.css";
import profile from "./assets/profile.png";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbBrandFlutter } from "react-icons/tb";
import { faCss3Alt, faJava, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { TailwindIcon } from './components/TailwindIcon.jsx'


function App() {
  return (
    <>
      <header></header>
      <body className=" p-4 bg-gradient-to-r from-indigo-500 from-20% via-sky-700 via-30% to-slate-700 to-80%">
        <div className=" grid grid-cols-5 gap-5 grow">
          <div className=" card col-span-3 grid-cols-2">
            <img
              src={profile}
              alt="profile"
              className=" max-w-56 rounded-bl-3xl"
            />
            <h1 className=" text-5xl place-content-center">
              <span className=" font-bold text-black">Hi</span>, My name is{" "}
              <span className=" text-black font-bold">Franco</span>, i developer
            </h1>
          </div>
          <div className=" card col-span-2 bg-transparent"></div>
          <div className=" card col-span-2 place-content-center items-center">
            <IoLogoGithub
              className="m-2 hover:scale-125 duration-200 cursor-pointer"
              color="black"
              size="35"
            />
            <FaLinkedin
              className=" cursor-pointer hover:scale-125  duration-200 m-2"
              color="blue"
              size="35"
            />
          </div>
          <div className=" card col-span-3 flex flex-col">
            <h2 className=" text-3xl font-mono p-3 text-black">My skills</h2>
            <div className=" flex flex-wrap p-5 place-content-around gap-4 grow">
              <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#0a89eb" }} size="3x" />
              <FontAwesomeIcon icon={faHtml5} style={{color: "#efbb01",}} size="3x"/>
              <FontAwesomeIcon icon={faJava} size="3x" style={{color: 'red'}}/>
              <FontAwesomeIcon icon={faReact} size="3x" style={{color: ' #61dbfb' }} />
              <TbBrandFlutter size='45' />
              <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} size="3x" />
              
              <TailwindIcon />
              
            </div>
          </div>
          <div className=" card ">article</div>
          <div className=" card ">article</div>
          <div className=" card ">article</div>
          <div className=" card col-span-2 ">article</div>
        </div>
      </body>
    </>
  );
}

export default App;
