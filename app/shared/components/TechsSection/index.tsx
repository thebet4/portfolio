import { useRef } from "react";
import { FaAws, FaAngular, FaNodeJs, FaJs,  FaPython, FaReact, FaVuejs, FaGithub} from "react-icons/fa6";
import { Rerousel } from 'rerousel';
export default function ExperienceSection() {

  const TECHS = [
    {
      name: "JavaScript",
      icon: <FaJs size={124}/>
    },    
    {
      name: "Node.js",
      icon: <FaNodeJs size={124}/>
    },     
    {
      name: "Python",
      icon: <FaPython size={124}/>
    },
    {
      name: "React",
      icon: <FaReact size={124}/>
    },
    {
      name: "Vue",
      icon: <FaVuejs size={124}/>
    },    
    {
      name: "Angular",
      icon: <FaAngular size={124}/>
    },
    {
      name: "Github",
      icon: <FaGithub size={124}/>
    },
    {
      name: "AWS",
      icon: <FaAws  size={124}/>
    },
  ]

  const techRef = useRef(null);


  return (
    <section
      id="techs"
      className="h-full w-full flex flex-col items-center justify-center snap-center text-center"
    >
      <h1 className="font-bold text-8xl text-content">My Stack</h1>
      <div className="w-screen mt-4">
        <Rerousel itemRef={techRef}>
          {
            TECHS.map(({icon, name}) => {
              return(
                <div key={name}
                  ref={techRef}
                  className="text-content w-50"
                >
                  {icon}
                </div>
              )
            })
          }
        </Rerousel>
      </div>
    </section>
  );
}
