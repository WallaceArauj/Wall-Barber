import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home(){
  return <div>
    <Header />

    <div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Olá, bem-vindo ao Wall Barber!</h2>
    <p className="capitalaze text-sm">{format(new Date(),"EEEE',' dd 'de' MMM",{
      locale: ptBR,
    } )}</p>
    </div>
  </div>
}