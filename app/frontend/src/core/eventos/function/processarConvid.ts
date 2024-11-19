import Convidado from "../model/convidado";
import validarErro from "./validarconvi";

export default function processarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarErro(convidado);

    if(erros.length > 0){
        throw new Error(erros.join('\n'))
    }

    const quantidadeAcompanhantes = convidado.qntdAcompanhantes ?? 0;
    const temAcompanhante = convidado.acompanhante && convidado.confirmado && quantidadeAcompanhantes > 0 ;


    const convidadoCompleto = {
        ...convidado,
        qntdAcompanhantes: temAcompanhante ? quantidadeAcompanhantes : 0,
        acompanhante: temAcompanhante
        
    };
    return convidadoCompleto as Convidado
}
