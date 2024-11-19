import Evento from "../model/evento";
import validarErro  from "./validarerro";
import {Id, Senha} from "../../shared/index";
export default function compleEvent(eventoParcial: Partial<Evento>): Evento {
    const erros = validarErro(eventoParcial);

    if(erros.length){
        throw new Error(erros.join('\n'));
    }

    const evento: Evento = {
        ...eventoParcial,
        id: eventoParcial.id ?? Id.novo(),
        password: eventoParcial.password ?? Senha.passworld(20),
        publicEsperado: +(eventoParcial.publicEsperado ?? 1),
} as Evento

return evento
}