import { Evento } from "@/core";
import QRCode from "react-qr-code";

export interface AcessarViaqrProps {
    evento: Evento
}

export default function AcessarViaqr(props: AcessarViaqrProps) {
    return (
        <div className="flex flex-col justify-center gap-4 border-zinc-800 px-10 items-center">
        <span className="text-sm font-light text-zinc-400">Acessar via Mobile</span>
        <QRCode
        value={JSON.stringify({id: props.evento.id, password: props.evento.password})}
        className="w-32 h-32"/>
        </div>
    );
}