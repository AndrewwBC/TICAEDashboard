export const TasksHeader = () => {
    return (
        <div className="grid xl:grid-cols-8 items-center max-[768px]:flex justify-between xl:p-2 px-2 max-[1200px]:mr-32 max-[768px]:mr-4 max-[500px]:m-0 max-[500px]:p-0">
        <h2 className="max-[768px]:text-base text-xl ">Ultimas Tarefas</h2>
        <div className="flex justify-between gap-20 col-start-6 max-[768px]:gap-4 max-[1000px]:col-start-5 xl:mr-32">
          <div className="flex flex-col">
            <span className="max-[768px]:text-base text-2xl">0</span>
            <span className="text-xs text-gray-500">Feitas</span>
          </div>
          <div className="flex flex-col">
            <span className="max-[768px]:text-base text-2xl" >0</span>
            <span className="text-xs text-gray-500 ">Fazendo</span>
          </div>
        </div>
      </div>
    )
}
export default TasksHeader