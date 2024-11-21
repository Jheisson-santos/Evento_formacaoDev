import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function paginaEventos() {



    return (
        <div className="grid grid-cols-3 gap-5">
            {eventos.map(evento => (
                <div key={evento.id} className="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden">
                    <div className="relative w-full h-52">
                    <Image src={evento.imagem} fill alt={evento.nome} className="object-cover"/>
                    </div>
                    <div className="flex-1 flex flex-col p-7 gap-5 items-center text-center">
                    <span className="text-lg font-balck">{evento.nome}</span>
                    <p className="flex-1 text-sm text-zinc-400 text-center">{evento.descricao}</p>
                    <QRCode value={JSON.stringify({id: evento.id, password: evento.password})} className="w-44 h-44"/>
                    <div className="flex gap-5">
                        <Link href={`/evento/admin/${evento.id}/${evento.password}`} className="flex-1 botao vermelho">
                        admin
                        </Link>
                        <Link href={`/convite/admin/${evento.alias}`} className="flex-1 botao verde">
                        convite
                        </Link>
                    </div>
                    </div>
                </div>
                
            ))}
        </div>
    );
}