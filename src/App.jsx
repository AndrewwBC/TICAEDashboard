import Aside from "./components/Aside/Aside";
import HeaderPortal from "./components/HeaderPortal/HeaderPortal";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksTitles from "./components/TasksTitles/TasksTitles";
import TasksMap from "./components/TasksMap/TasksMap";
import Progress from "./components/Progress/Progress";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";

const demandasArray = [
  {
    title: "Cursos MOOC",
    progress: "25",
  },
  {
    title: "Fora da Caixa",
    progress: "50",
  },
  {
    title:
      "Formação Continuada de Servidores... (1° e 2° Ed.)",
    progress: "75",
  },
  {
    title: "Plataforma de Cursos do IFSul",
    progress: "100",
  },
];

function App() {
  const [route, setRoute] = useState('Projetos')

  return (
    <main>
      <section className="flex justify-end text-center">
        <Aside setRoute={setRoute} />
        <article className="bg-[#222] max-[600px]:rounded-none rounded-l-[32px] w-full h-screen">
        <HeaderPortal/>
          <div>
            {route === 'Tarefas' &&  <div className="bg-white rounded-md mx-8 mt-6 p-6">
             <TasksHeader/>
              <div>
              <div className="grid items-center justify-center max-[768px]:max-h-36 overflow-x-auto grid-cols-1 max-[768px]:grid-cols-2 max-[500px]:pr-10 xl:mx-6 py-2 border-t-[1px] border-solid border-gray-300">
                <TasksTitles/>
                <TasksMap/>
              </div>                      
            </div>
            </div>}
            <div className="grid grid-cols-1 gap-10 px-8">
            {route === 'Projetos' && <Progress/>}
            {route === 'Planejamentos' &&  <div className="bg-white grid grid-cols-1 items-center justify-center gap-4 rounded-md mt-6 p-6">
                  <h2 className="text-2xl" >Planejamentos</h2>                
            </div>}
            </div>
            
          </div>
        </article>
        <MobileMenu setRoute={setRoute} />
      </section>
    </main>
  );
}

export default App;
