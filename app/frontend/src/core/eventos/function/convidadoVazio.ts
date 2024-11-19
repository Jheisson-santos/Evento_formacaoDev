import {Id} from '@/core/shared';
import Convidados from "../model/convidado";
export default function criarConvidadoVazio(): Partial<Convidados> {
    return {
        id: Id.novo(),
        nome: "",
        email: "",
        confirmado: true,
        acompanhante: false,
        qntdAcompanhantes: 0,
    }
}