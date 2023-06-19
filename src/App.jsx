import Aside from "./components/Aside/Aside";
import HeaderPortal from "./components/HeaderPortal/HeaderPortal";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksTitles from "./components/TasksTitles/TasksTitles";
import TasksMap from "./components/TasksMap/TasksMap";
import Progress from "./components/Progress/Progress";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  const [route, setRoute] = useState('Projetos')

  return (
    <main>
      <section className="flex justify-end text-center">
        <Aside setRoute={setRoute} />
        <article className="bg-[#222] max-[600px]:rounded-none rounded-l-[32px] w-full h-screen">
        <HeaderPortal/>
          <div>
            {route === 'Tarefas' &&  <div className="bg-white rounded-md max-[600px]:m-2 max-[600px]:mt-8 mx-8 mt-6 p-6">
             <TasksHeader/>
              <div>
              <div className="grid items-center justify-center max-[768px]:max-h-72 overflow-x-hidden  grid-cols-1 max-[768px]:flex max-[768px]:justify-between  grid-cols-[auto, 1fr] xl:mx-6 py-2 border-t-[1px] border-solid border-gray-300">
                <TasksTitles/>
                <TasksMap/>
              </div>                      
            </div>
            </div>}
            <div className="grid grid-cols-1 gap-10 max-sm:px-2 px-8">
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
