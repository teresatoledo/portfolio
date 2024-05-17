import { CSS, Git, Github, HTML5, JavaScript, MySQL, Next, Node, Reactt, Sass, TailwindCSS } from "./Logos"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Separator } from "./ui/separator"

function Skills() {
  
  return (
    <div className="max-w-6xl mx-auto sm:px-24 pb-10" id="skills">
      <h2 className="pl-6 font-main font-bold  hover:text-darkblue duration-75 delay-75 text-2xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Skills</h2>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-bold">Front-end</h3>
        <div className="w-20 flex flex-wrap sm:flex-nowrap justify-center gap-5">
              <div className="flex gap-2 items-center ">
                <HTML5/>
                <span>HTML5</span>
              </div>
              <div className="flex gap-2 items-center">
                <CSS/>
                <span>CSS</span>
              </div>
              <div className="flex gap-2 items-center">
                <Sass/>
                <span>SASS</span>
              </div>
              <div className="flex gap-2 items-center">
                <TailwindCSS/>
                <span>Tailwind</span>
              </div>
              <div className="flex gap-2 items-center">
                <JavaScript/>
                <span>JavaScript</span>
              </div>
              <div className="flex gap-2 items-center">
                <Reactt/>
                <span>React</span>
              </div>
              <div className="flex gap-2 items-center">
                <Next/>
                <span>Next</span>
              </div>
        </div>
        <Separator/>
        <h3 className="text-lg font-bold">Back-end</h3>
        <div className="w-20 flex gap-5 justify-center">
        <div className="flex gap-2 items-center">
                <Node/>
                <span>Node</span>
              </div>
              <div className="flex gap-2 items-center">
                <MySQL/>
                <span>MySQL</span>
              </div>
        </div>
        <Separator/>
        <h3 className="text-lg font-bold">Other</h3>
        <div className="w-20 flex gap-5 justify-center">
        <div className="flex gap-2 items-center">
                <Git/>
                <span>Git</span>
              </div>
              <div className="flex gap-2 items-center">
                <Github/>
                <span>GitHub</span>
              </div>
        </div>
        <Separator/>
        <h3 className="text-lg font-bold">Soft skills</h3>
      </div>
      
    </div>
  )
}

export default Skills