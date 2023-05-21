export const TasksHeader = () => {
    return (
        <div className="grid xl:grid-cols-8 items-center max-[768px]:flex justify-between xl:p-2 px-2 grid-cols-6">
        <h2 className="max-[768px]:text-base text-xl ">Ultimas Tarefas</h2>
        <div className="flex justify-between gap-20 col-start-7 max-[768px]:gap-4 col-end-9 xl:mr-32">
          <div className="flex flex-col">
            <span className="max-[768px]:text-xl text-2xl">0</span>
            <span className="text-xs text-gray-500">Feitas</span>
          </div>
          <div className="flex flex-col">
            <span className="max-[768px]:text-xl text-2xl" >0</span>
            <span className="text-xs text-gray-500 ">Em progresso</span>
          </div>
        </div>
      </div>
    )
}
export default TasksHeader