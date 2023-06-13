import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const demandasArray = [
  {
    title: 'Cursos MOOC',
    progress: '25',
  },
  {
    title: 'Fora da Caixa',
    progress: '50',
  },
  {
    title: 'Formação Continuada de Servidores... (1° e 2° Ed.)',
    progress: '75',
  },
  {
    title: 'Plataforma de Cursos do IFSul',
    progress: '100',
  },
]

export const Progress = () => {
  return (
    <div className="max-[768px]:grid-cols-1  overflow-y-auto bg-white grid grid-cols-2 items-center justify-center gap-6 rounded-md mt-6 p-6">
      <h2 className="text-2xl col-span-full" >Projetos</h2>
      {demandasArray.map(({ title, progress }) => {
        return (
          <div key={title} className="grid grid-cols-2 items-center justify-around pt-6 pb-2 bg-stone-600 rounded-lg">
            <h2 className="font-medium self-start">{title}</h2>
            <div className="mt-[-10px]">
              <CircularProgress
                size={60}
                color="#2bc41e"
                thickness={16}
                value={progress}
              >
                <CircularProgressLabel fontSize={14}>
                  {progress}%
                </CircularProgressLabel>
              </CircularProgress>
            </div>
            {/* <span className="rounded-md" style={{background: `linear-gradient(90deg, rgba(33,207,31,1) ${progress}, rgba(195,195,195,1) ${progress})`}}>{progress}</span> */}
          </div>
        )
      })}
    </div>
  )
}

export default Progress
