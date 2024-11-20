import { Evento } from "../eventos";
import { Id } from "../shared";

const eventos: Evento[] = [
    {
        id: Id.novo(),
        alias: 'evento1',
        password: '123',
        nome: 'evento 1',
        date: new Date(),
        local: 'local 1',
        descricao: 'descricao 1',
        imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/17188879-fundo-escuro-geometrico-com-composicao-de-formas-de-gradiente-bom-para-design-de-cartazes-ilustracaoial-vetor.jpg', imagemBG: '',
        publicEsperado: 1,
        convidados: []
    }, {
        id: Id.novo(),
        alias: 'evento2',
        password: '123',
        nome: 'evento 2',
        date: new Date(),
        local: 'local 2',
        descricao: 'descricao 2',
        imagem: 'https://png.pngtree.com/thumb_back/fh260/background/20230607/pngtree-hd-wallpaper-forest-scenery-mountains-mountain-wallpaper-image_2952455.jpg', imagemBG: '',
        publicEsperado: 1,
        convidados: []
    }
];

export default eventos