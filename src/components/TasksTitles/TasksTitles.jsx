export const TasksTitles = () => {
 return (
      <div className="grid max-[768px]:flex max-[768px]:fixed flex-col grid-cols-8  max-[768px]:mt-3 text-start">
        {[
          'Tarefa',
          'Admin',
          'Membros',
          'Status',
          'Ativo há...',
          'Prazo Final',
        ].map((title) => {
          if (title === 'Tarefa') {
            return (
              <span className="font-semibold sm:col-start-1 sm:col-end-4 text-gray-800 text-base">
                {title}
              </span>
            )
          } else {
            return (
              <span className="text-sm font-semibold text-gray-800 xl:text-base">
                {title}
              </span>
            )
          }
        })}
      </div>
    )
}

export default TasksTitles