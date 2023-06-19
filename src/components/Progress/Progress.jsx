import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

// mes/dia/ano
const demandasArray = [
  {
    title: "Cursos MOOC",
    progress: "25",
    dataInicio: "05/06/2023",
    dataFim: "25/06/2023",
    start: "06/05/2023",
    end: "06/25/2023",
  },
  {
    title: "Fora da Caixa",
    progress: "50",
    dataInicio: "10/06/2023",
    dataFim: "20/06/2023",
    start: "06/10/2023",
    end: "06/20/2023",
  },
  {
    title: "Formação Continuada de Servidores... (1° e 2° Ed.)",
    progress: "75",
    dataInicio: "10/06/2023",
    dataFim: "25/06/2023",
    start: "06/10/2023",
    end: "06/25/2023",
  },
  {
    title: "Plataforma de Cursos do IFSul",
    progress: "100",
    dataInicio: "16/06/2023",
    dataFim: "07/07/2023",
    start: "06/16/2023",
    end: "07/07/2023",
  },
];


const getPercentage = (totalPeriod, daysLeft) =>{
  const daysGone = totalPeriod - daysLeft
  const percentage = (daysGone / totalPeriod) * 100
  
  return percentage.toFixed(0)
}

const getDaysLeft = (start, end) => {
  const endDate = new Date(end);
  const startDate = new Date(start)
  const todayDate = new Date();

  const totalPeriodCalc = Math.abs(endDate - startDate)
  const totalPeriod = Math.ceil(totalPeriodCalc / (1000 * 3600 * 24))

  const mathDate = Math.abs(endDate - todayDate);
  const daysLeft = Math.ceil(mathDate / (1000 * 3600 * 24));
  
  const per = getPercentage(totalPeriod, daysLeft)
  return per
};

export const Progress = () => {
  return (
    <div className="max-[768px]:grid-cols-1  overflow-y-auto bg-white grid grid-cols-2 items-center justify-center gap-6 rounded-md mt-6 max-sm:p-2 p-4">
      <h2 className="text-2xl col-span-full">Projetos</h2>
      {demandasArray.map(({ title, progress, dataInicio,dataFim, start, end }) => {
        return (
          <div
            key={title}
            className="flex place-items-start justify-between max-sm:px-2 items-center pt-6 pb-2 px-10 bg-stone-600 rounded-lg"
          >
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="max-sm:text-sm font-medium">{title}</h2>
              <div className="flex gap-2">
                <div>
                  <p className="text-xs text-gray-400 font-[Roboto]">Inicio</p>
                  <p className="text-sm font-[Roboto]">{dataInicio}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-[Roboto]">Fim</p>
                  <p className="text-sm font-[Roboto]">{dataFim}</p>
           
                </div>
              </div>
            </div>
            <div className="mt-[-10px]">
              <CircularProgress
                size={60}
                color="#2bc41e"
                thickness={16}
                value={getDaysLeft(start, end)}
              >
                <CircularProgressLabel fontSize={14}>
                  {getDaysLeft(start, end)}%
                </CircularProgressLabel>
              </CircularProgress>
            </div>
            {/* <span className="rounded-md" style={{background: `linear-gradient(90deg, rgba(33,207,31,1) ${progress}, rgba(195,195,195,1) ${progress})`}}>{progress}</span> */}
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
