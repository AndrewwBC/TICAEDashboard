export const TasksTitles = () => {
 return (
      <div className="grid gap-5 max-[768px]:gap-10 max-[768px]:flex max-[768px]:fixed flex-col grid-cols-8 max-[768px]:mt-2 text-start">
        {[
          'Tarefa',
          'Admin',
          'Status',
          'Ativo há...',
          'Prazo Final',
        ].map((title) => {
          if (title === 'Tarefa') {
            return (
              <span key={title} className="font-semibold sm:col-start-1 sm:col-end-4 text-gray-800 text-base">
                {title}
              </span>
            )
          } else {
            return (
              <span  key={title}  className="text-sm font-semibold text-gray-800 xl:text-base">
                {title}
              </span>
            )
          }
        })}
      </div>
    )
}

export default TasksTitles