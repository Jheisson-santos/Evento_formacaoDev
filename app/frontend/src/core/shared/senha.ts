
export default class Senha {
    static passworld(tamanho: number = 15): string {
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numeros = '0123456789';
        const simbolos = '!@#$%&*()-_=+';

        const grupos = [minusculas, maiusculas, numeros, simbolos];
        const senha = [];
        for (let i = 0; i < tamanho; i++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
        }
        return senha.join('');
    }
}

console.log(Senha.passworld());
