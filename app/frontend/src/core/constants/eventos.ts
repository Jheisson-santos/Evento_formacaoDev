import { Evento } from "../eventos";
import { Id } from "../shared";

const eventos: Evento[] = [
    {
        id: Id.novo(),
        alias: 'evento1',
        password: "123",
        nome: "Evento 1",
        date: new Date('2023-01-01'),
        local: "Local 1",
        descricao: "Descrição 1",
        imagem: "imagem1.jpg",
        publicEsperado: 10
    }, {
        id: Id.novo(),
        alias: "evento2",
        password: "456",
        nome: "Evento 2",
        date: new Date('2023-02-01'),
        local: "Local 2",
        descricao: "Descrição 2",
        imagem: "imagem2.jpg",
        publicEsperado: 20,
    }
];
console.log(eventos);