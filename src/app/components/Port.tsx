import { Projects } from "../types/Projects"

type Props = {
    project:Projects,
}

export const Portfolio = ({project}:Props) => {
    return(
        <div className="">
            <div className="rounded-lg shadow-2xl p-4">
                <img src={`/img/${project.url}`} alt="" className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-center font-bold">{project.title}</h3>
                <p className="text-center">{project.text}</p>
            </div>
        </div>
    )
}