import { IoMdBuild} from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { FaTasks } from "react-icons/fa"
export const Aside = ({setRoute}) => {

    return (
        <aside className="shrink px-4 my-1 max-[600px]:hidden"
        >
          <div className="flex flex-col pt-6 xl:mb-0">
            <div className="flex flex-col mb-20 items-center justify-center gap-24">
              <h1 className="text-xl hover:text-lime-700">TICAE</h1>
              <img
                heigth={120}
                width={120}
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <nav className="mb-40">
            <ul className="flex flex-col gap-4 ml-4">
              {[
                [<IoMdBuild />, 'Projetos'],
                [<FaTasks />, 'Tarefas'],
                [<GiNotebook />, 'Planejamentos'],
              ].map(([icon, title]) => (
                <li key={title} onClick={() => setRoute(title)} className="group/hea flex items-center gap-2 cursor-pointer">
                  {icon}
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </nav>
          <h2 className="text-x">Atualizado em: 20/05/2023</h2>
        </aside>
    )
}

export default Aside