import {Id} from '@/core/shared';
import Evento from '../model/evento';

export default function criarEventoVazio(): Partial<Evento> {
    return {
        id: Id.novo(),
        nome: "",
        descricao: "",
        date: new Date(),
        local: "",
        publicEsperado: 1,
        imagem: "",
        imagemBG: "",
    };
}