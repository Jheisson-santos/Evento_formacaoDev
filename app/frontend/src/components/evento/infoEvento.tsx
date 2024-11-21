import { Evento } from "@/core"
import Info from "../shared/info"
export interface InformacoesEventoProps {
    evento: Evento;
    className?: string
}



export default function InformacoesEvento(props: InformacoesEventoProps) {
    const { evento } = props
    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ''}`}>
            <div className="flex-1 flex items-center gap-4 border-zinc-800  px-6 py-3rounded-lg">
                <span className="text-2xl font-black">{evento.alias}:</span>
                <span className="text-xl text-zinc-300">{evento.nome}</span>
            </div>
            <div className="flex gap-2">
                <Info label="Data">
                    <span>
                        {new Date(evento.date!).toLocaleDateString()}
                        {"às"}
                        {new Date(evento.date!).toLocaleTimeString()}
                    </span>
                </Info>
                <Info label="Local">{evento.local}</Info>
            </div>

            <Info label="Descrição">{evento.descricao}</Info>

        </div>
    )
}