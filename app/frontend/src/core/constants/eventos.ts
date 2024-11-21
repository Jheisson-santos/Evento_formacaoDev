import { Evento } from "../eventos";
import { Id } from "../shared";


const eventos: Evento[] = [
    {
        id: "g097ubemp9v-t899bkkuuhj-ur75i36pvis",
        alias: 'Evento-fullStack',
        password: '123',
        nome: 'evento 1',
        date: new Date(),
        local: 'local 1',
        descricao: 'descricao 1',
        imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/17188879-fundo-escuro-geometrico-com-composicao-de-formas-de-gradiente-bom-para-design-de-cartazes-ilustracaoial-vetor.jpg', imagemBG: '',
        publicEsperado: 250,
        convidados: [{
            id: '1',
            nome: 'teste',
            email: 'teste@teste',
            confirmado: true,
            acompanhante: true,
            qntdAcompanhantes: 10
        },{
            id: '2',
            nome: 'teste2',
            email: 'teste2@teste',
            confirmado: true,
            acompanhante: true,
            qntdAcompanhantes: 8
        },{
            id: '3',
            nome: 'teste3',
            email: 'teste3@teste',
            confirmado: true,
            acompanhante: true,
            qntdAcompanhantes: 12
        }]
    }, {
        id: "n0ro1sxsr5f-3d3ovwynw9b-wy20rk11qc",
        alias: 'trilha-monte-belo',
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