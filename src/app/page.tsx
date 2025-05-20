import { Body } from "./components/Body";
import { Contact } from "./components/contact";
import { Fotter } from "./components/Fotter";
import { Header } from "./components/Header";
import { PortComplete } from "./components/PortComplete";
import { Sobre } from "./components/Sobre";


const Page = () => {
  return(
    <div className="w-full h-full">
      <Header/>
      <Body/>
      <Sobre/>
      <PortComplete/>
      <Contact/>
      <Fotter/>
    </div>
  )
}

export default Page;