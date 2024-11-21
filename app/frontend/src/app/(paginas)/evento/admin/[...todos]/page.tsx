"use client"
import DashportEvento from "@/components/evento/dashportEvento"
import FormEventosenha from "@/components/evento/formEventosenha"
import { Convidados, Evento, eventos} from "@/core"
import {use, useEffect, useState} from "react"

export default function paginaAdminEvento(props: any) {
    const params: any = use(props.params)

    const id = params.todos[0]
    const [evento, setEvento] = useState<Evento | null>(null)
    const [password, setPassword] = useState<string | null>(params.todos[1]?? null)

    const presentes = evento?.convidados.filter((convidado) => convidado.confirmado) ?? []
    const ausentes = evento?.convidados.filter((convidado) => !convidado.confirmado) ?? []
    
    const totalGeral = evento?.convidados.reduce((total: number, convidado: Convidados) => {
      return total + convidado.qntdAcompanhantes + 1
    }, 0) ?? 0


    function getEvento() {
        const evento = eventos.find(evento => evento.id === id && evento.password === password)
        setEvento(evento ?? null)
    }

    useEffect(() => {
        getEvento()
    }, [id, password])

    return(
      <div className="flex flex-col items-center">
        {evento ? <DashportEvento evento={evento}
        presentes={presentes} ausentes={ausentes} totalGeral={totalGeral}/> : <FormEventosenha/>}

      </div>
    )

}