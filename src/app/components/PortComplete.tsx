
import { ProjectList } from "../data/ProjectList";
import { Portfolio } from "./Port";


export const PortComplete = () => {
    return(
    <section className="text-black bg-white">
        <div className="flex pl-5">
          <h1 className="text-3xl">Portfolio</h1>
          <h2 className="text-2xl pl-2 pt-1 text-black/50">Algumas coisas que eu fiz</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-3">
          {ProjectList.map(item => (
            <Portfolio
            key={item.id} 
            project={item}
          />
        ))}
        </div>
      </section>
    )}