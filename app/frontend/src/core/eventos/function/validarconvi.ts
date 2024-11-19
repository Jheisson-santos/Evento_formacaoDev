import Convidado from "../model/convidado";

export default function validarErro(convidado: Partial<Convidado>): string[] {
 const erros: string[] = [];

 if(!convidado.nome){
    erros.push('nome é obrigatorio');
 }

 if(!convidado.email){
    erros.push('email é obrigatorio');  
 }

 if(!convidado.confirmado){
    erros.push('confirmado é obrigatorio');  
 }  

 return erros

}