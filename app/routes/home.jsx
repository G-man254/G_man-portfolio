// import { Welome } from "../welcome/welcome";
import { Brain, BrainCog, ChevronsLeftRightEllipsis, Figma, MonitorCog, SquareTerminal } from "lucide-react";
import { Button } from "../components/Link";

export function meta() {
  return [
    { title: "My portfolio" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export default function Home() {
  return (
    <main className="bg-gray-900 pb-5 lg:pb-5 h-fit">
      <div className="block lg:flex w-full gap-5 lg:h-[80vh] place-items-center">
        <div className="w-full h-full flex border justify-center items-center py-2">
          <img src="images/portfolio.jpeg" alt="G-man254" className="w-[150px] h-[130px] rounded-4xl lg:w-[400px] lg:h-[280px] border-2 lg:rounded-[50%]"/>
        </div>
        <div className="px-10 lg:px-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mt-5 lg:text-6xl animate-pulse z-0">Dennis Gitau Kariuki</h1>
            <p className="uppercase text-lg md:text-xl mt-5">full-stack developer | ai enthusiast</p>

          </div>
          {/* <p>A passionate and dedicated junior web developer propelled by the ever evolving world of technology and its unlimited possibilities.</p> */}

          <p className="text-lg mt-8 xl:text-xl">I'm a full stack developer with a passion for building innovative solutions using adavanced technologies. I'm always eager to learn and explore new ideas about Artificial Intelligence and machine learning. I'm an avid learner of new programming languages and technologies, always seeking opportunities to apply my skills in real-world projects with a championing spirit to excel and I'm excited to share my skills and experience with you.</p>
          <Button path="/about" text = "About me"/>
        </div>
      </div>
      <div className="mx-5 rounded-xl mt-20 lg:mt-20 pt-3 lg:pb-10 bg-gray-800">
        <h2 className="text-center text-4xl mt-4">My skill set</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 mt-5 p-8 md:grid-cols-2 max-w-8xl lg:grid-cols-3">
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md transform md:scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-xl hover:ring-1 md:hover:ring-2 hover:ring-blue-400">
            <MonitorCog className="h-[50px] w-[50px] text-blue-400"/>
            <h3 className="font-bold mt-5 uppercase">critical thinking and solving technical problems</h3>
            <p>Adept at critical thinking and solving complex technical problems through structured analysis, creative solutions, and a user-focused approach.
            </p>
          </section>
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md transform md:scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-xl hover:ring-1 md:hover:ring-2 hover:ring-blue-400">
            <ChevronsLeftRightEllipsis className="h-[50px] w-[50px] text-blue-400" />
            <h3 className="font-bold mt-5 uppercase">building fully functional websites and applications</h3>
            <p>Skilled in building fully functional responsive websites and applications using HTML, CSS, JavaScript, and React to build fast and scalable web applications, intuitive UI, and seamless performance across devices.
            </p>
          </section>
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md transform md:scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-xl hover:ring-1 md:hover:ring-2 hover:ring-blue-400">
            <BrainCog className="h-[50px] w-[50px] text-blue-400" />
            <h3 className="font-bold mt-5 uppercase">leveraging on ai</h3>
            <p>Integrating AI-driven features, leveraging AI to enhance functionality, user engagement, personalization, and automation.
            </p>
          </section>
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md transform md:scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-xl hover:ring-1 md:hover:ring-2 hover:ring-blue-400">
            <Brain className="h-[50px] w-[50px] text-blue-400" />
            <h3 className="font-bold mt-5 uppercase">project planning and ideas implementation
            </h3>
            <p>Proficient in project planning and turning ideas into actionable solutions through clear strategy, efficient execution, and attention to detail from conception to delivery.
            </p>
          </section>
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md transform md:scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-xl hover:ring-1 md:hover:ring-2 hover:ring-blue-400">
            <SquareTerminal className="h-[50px] w-[50px] text-blue-400" />
            <h3 className="font-bold mt-5 uppercase">backend development and database management</h3>
            <p>experienced in backend and database management using Node.js,Express.js and mongoDB to build robust backend systems and manage databases, ensuring robust architecture, secure data handling, and seamless integration with front-end systems
            </p>
          </section>
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md transform md:scale-95 md:hover:scale-100 transition-transform duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-xl hover:ring-1 md:hover:ring-2 hover:ring-blue-400">
            <Figma className="h-[50px] w-[50px] text-blue-400" />
            <h3 className="font-bold mt-5 uppercase">ui/ux designing</h3>
            <p>Skilled in crafting intuitive, user-centered and visually appealing interfaces with a focus on usability, accessibility, and seamless user experience with tools like Figma.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
