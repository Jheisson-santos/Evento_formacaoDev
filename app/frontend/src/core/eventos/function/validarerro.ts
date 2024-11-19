import Evento from "../model/evento";

export default function validarErro(evento: Partial<Evento>): string[] {
 const erros: string[] = [];

 if(!evento.alias){
    erros.push('alias é obrigatorio');
 }

 if(!evento.nome){
    erros.push('nome é obrigatorio');
 }

 if(!evento.descricao){
    erros.push('descricao é obrigatorio');
 }  

 if(!evento.date){
    erros.push('data é obrigatorio');
 }

 if(!evento.local){
    erros.push('local é obrigatorio');
 }
 return erros

}