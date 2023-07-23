import { IoMdBuild} from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { FaTasks } from "react-icons/fa"
export const MobileMenu = ({setRoute}) => {

    return (
        <nav className='fixed bottom-0 right-0 left-0 py-2 px-4 bg-slate-50 min-[600px]:hidden'>
            <ul className="flex justify-evenly">
              {[
                [<IoMdBuild size={20} />, 'Projetos'],
                [<FaTasks size={20}/>, 'Tarefas'],
                [<GiNotebook size={20}/>, 'Planejamentos'],
              ].map(([icon, title]) => (
                <li key={title} onClick={() => setRoute(title)} className="flex flex-col items-center gap-2 cursor-pointer">
                  {icon}
                  <span className="text-xs">{title}</span>
                </li>
              ))}
            </ul>
        </nav>
    )
}

export default MobileMenu