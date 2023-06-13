const tasks = [
    {
      tarefa: 'Tarefa a ser realizada...',
      admin: 'Andrew',
      membros: '2',
      status: 'Ativo',
      ativoHá: '12 dias',
      prazoFinal: '12 Junho'
    },
    {
      tarefa: 'Tarefa a ser realizada...',
      admin: 'Andrew',
      membros: '2',
      status: 'Ativo',
      ativoHá: '12 dias',
      prazoFinal: '12 Junho'
    },
    {
      tarefa: 'Tarefa a ser realizada...',
      admin: 'Andrew',
      membros: '2',
      status: 'Ativo',
      ativoHá: '12 dias',
      prazoFinal: '12 Junho'
    },
    {
      tarefa: 'Tarefa a ser realizada...',
      admin: 'Andrew',
      membros: '2',
      status: 'Ativo',
      ativoHá: '12 dias',
      prazoFinal: '12 Junho'
    },
    {
      tarefa: 'Tarefa a ser realizada...',
      admin: 'Andrew',
      membros: '2',
      status: 'Ativo',
      ativoHá: '12 dias',
      prazoFinal: '12 Junho'
    },
  ];

export const TasksMap = () => {
    return (
      <div className="min-w-max max-[768px]:col-start-2">
        {tasks.map(({tarefa, admin, membros, status, ativoHá, prazoFinal}, index) =>(
            <div key={index} className="grid break-words grid-cols-8 max-[768px]:grid-cols-1 text-start border-b-[1px] border-green-500 pt-4 max-[768px]:gap-0.5">
              <span className="text-sm xl:text-[16] min-[768px]:col-start-1  min-[768px]:col-end-4" >{tarefa}</span>
              <span className="text-sm">{admin}</span>
              <span className="text-sm break-words">{status}</span>
              <span className="text-sm">{ativoHá}</span>
              <span className="text-sm">{prazoFinal}</span>
            </div>
          ))}
        </div>
    )
}

export default TasksMap