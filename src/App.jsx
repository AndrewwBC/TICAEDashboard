import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Aside from "./components/Aside/Aside";
import HeaderPortal from "./components/HeaderPortal/HeaderPortal";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksTitles from "./components/TasksTitles/TasksTitles";
import TasksMap from "./components/TasksMap/TasksMap";

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
  return (
    <main>
      <section className="flex justify-end text-center">
        <Aside/>
        <article className="bg-[#222] rounded-l-[32px] w-full h-screen">
        <HeaderPortal/>
          <div>
            <div className="bg-white rounded-md mx-8 mt-6 p-6">
             <TasksHeader/>
              <div>
              <div className="grid items-center justify-center max-[768px]:max-h-36 overflow-x-auto grid-cols-1 max-[768px]:grid-cols-2 xl:mx-6 py-2 border-t-[1px] border-solid border-gray-300">
                <TasksTitles/>
                <TasksMap/>
              </div>                      
            </div>
            </div>
            <div className="grid grid-cols-1 gap-10 px-8">
            <div className="bg-white grid grid-cols-2 items-center justify-center gap-4 rounded-md mt-6 p-6">
                  {/* <h2 className="text-2xl" >Plataformas</h2> */}
                  {demandasArray.map(({title, progress}) => {               
                      return (
                        <div className="grid grid-cols-2 items-center justify-around pt-6 pb-2 bg-stone-700 rounded-lg">
                            <h2 className="font-medium self-start">{title}</h2>
                            <div className="mt-[-10px]">
                              <CircularProgress size={60} color="#2bc41e" thickness={16} value={progress}>
                                <CircularProgressLabel fontSize={14} >{progress}%</CircularProgressLabel>
                              </CircularProgress>
                            </div>
                            {/* <span className="rounded-md" style={{background: `linear-gradient(90deg, rgba(33,207,31,1) ${progress}, rgba(195,195,195,1) ${progress})`}}>{progress}</span> */}
                        </div>
                      )               
                  })}
            </div>
            <div className="bg-white grid grid-cols-1 items-center justify-center gap-4 rounded-md mt-6 p-6">
                  <h2 className="text-2xl" >Planejamentos</h2>
                  
            </div>
            </div>
            
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
