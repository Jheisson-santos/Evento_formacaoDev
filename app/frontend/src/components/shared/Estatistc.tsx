import Image from "next/image"

export interface EstatistcProps {   
    texto: string
    valor: any
    imagem: string
}

export default function Estatistc (props: EstatistcProps ) {
    return (
        <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
            <div className="flex flex-1 flex-col">
                <span className="font-light text-zinc-400">{props.texto}</span>
                <span className="text-2xl font-black">{props.valor}</span>
            </div>
            <Image src={props.imagem} width={80} height={80} alt="icones"/>
        </div>
    )
}