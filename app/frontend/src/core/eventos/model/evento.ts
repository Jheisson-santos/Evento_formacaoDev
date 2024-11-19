import Convidados from "./convidado";

export default interface Evento {
    id: string;
    alias: string;
    password: string;
    nome: string;
    date: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBG: string;
    publicEsperado: number;
    convidados: Convidados[];
}