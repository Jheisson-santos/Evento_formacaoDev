import { Convidados, Evento } from "@/core"
import InformacoesEvento from "./infoEvento"
import AcessarViaqr from "./acessarViaqr"
import Estatistc from "../shared/Estatistc"

export interface DashportEventoProps {
    evento: Evento;
    presentes: Convidados[]
    ausentes: Convidados[]
    totalGeral: number;
}


export default function DashportEvento(props: DashportEventoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2self-stretch">
                <InformacoesEvento evento={props.evento} className="flex-1" />
                <AcessarViaqr evento={props.evento} />
            </div>
            <div className=" grid grid-cols-3 gap-6 ,t-4">
                <Estatistc texto="Expectativa de Convidados"
                    valor={props.evento.publicEsperado} imagem="/icones/convidados.svg" />
                <Estatistc texto="Convidados Confirmados"
                    valor={props.presentes.length} imagem="/icones/confirmados.svg" />
                <Estatistc texto="Total Confirmados"
                    valor={props.totalGeral} imagem="/icones/acompanhantes.svg" />
            </div>
        </div>
    )
}