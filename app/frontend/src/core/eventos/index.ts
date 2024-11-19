import Evento from "./model/evento";
import Convidados from "./model/convidado";


import criarEventoVazio from "./function/criareventovazio";
import processarConvidado from "./function/processarConvid";
import validarErro from "./function/validarerro";
import validarConvidado from "./function/validarconvi";
import compleEvent from "./function/compleEvent";

export { criarEventoVazio, processarConvidado, validarErro, validarConvidado, compleEvent };
export type { Evento, Convidados, }