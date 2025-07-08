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
    <main>
      <div className="flex w-full gap-5 h-screen p-10 place-items-center">
        <div className="w-full h-full border border-white">
          <img src="images/portfolio.jpeg" alt="G-man254" className="w-[400px] h-[300px]"/>
        </div>
        <div className="px-20">
          <h1 className="text-6xl">Dennis Gitau Kariuki</h1>
          <p className="uppercase text-2xl mt-5">full-stack developer | ai enthusiast</p>
          {/* <p>A passionate and dedicated junior web developer propelled by the ever evolving world of technology and its unlimited possibilities.</p> */}

          <p className="text-lg mt-8">I'm a full stack developer with a passion for building innovative solutions using adavanced technologies. I'm always eager to learn and explore new ideas about Artificial Intelligence and machine learning. I'm an avid learner of new programming languages and technologies, always seeking opportunities to apply my skills in real-world projects with a championing spirit to excel and I'm excited to share my skills and experience with you.</p>
          <Button to="/about" text = "About me" />
        </div>
      </div>
      <div className="mx-auto h-screen">
        <h2 className="text-center text-4xl mt-8">My skill set</h2>
        <div className="grid grid-cols-3 gap-8 mt-8 p-8">
          <section className="bg-gradient-to-bl from-gray-400 to-gray-700 place-items-center p-5 rounded-md">
            <MonitorCog className="h-[50px] w-[50px]"/>
            <h3 className="font-bold mt-5 uppercase">critical thinking and solving technical problems</h3>
            <p>Adept at critical thinking and solving complex technical problems through structured analysis, creative solutions, and a user-focused approach.
            </p>
          </section>
          <section>
            <ChevronsLeftRightEllipsis />
            <h3>building fully functional websites and applications</h3>
            <p>Skilled in building fully functional responsive websites and applications using HTML, CSS, JavaScript, and React to build fast and scalable web applications, intuitive UI, and seamless performance across devices.
            </p>
          </section>
          <section>
            <BrainCog />
            <h3>leveraging on ai</h3>
            <p>Integrating AI-driven features, leveraging AI to enhance functionality, user engagement, personalization, and automation.
            </p>
          </section>
          <section>
            <Brain />
            <h3>project planning and ideas implementation
            </h3>
            <p>Proficient in project planning and turning ideas into actionable solutions through clear strategy, efficient execution, and attention to detail from conception to delivery.
            </p>
          </section>
          <section>
            <SquareTerminal />
            <h3>backend development and database management</h3>
            <p>experienced in backend and database management using Node.js,Express.js and mongoDB to build robust backend systems and manage databases, ensuring robust architecture, secure data handling, and seamless integration with front-end systems
            </p>
          </section>
          <section>
            <Figma />
            <h3>ui/ux designing</h3>
            <p>Skilled in crafting intuitive, user-centered and visually appealing interfaces with a focus on usability, accessibility, and seamless user experience with tools like Figma.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
