// src/previa.js
export function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return null;
    }
    return Math.max(...lista);
}

export function verificarParOuImpar(numero) {
    if (typeof numero !== "number") return null;
    return numero % 2 === 0 ? "Par" : "Ímpar";  
}

export function contarCaracter(str, char) {
    if (typeof str !== "string" || typeof char !== "string") return null; 
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) { 
            count++;
        }
    }
    return count;
}

export function atualizarPropriedade(obj, chave, valor) {
    if (!obj.hasOwnProperty(chave)) { 
        return null;
    }
    obj[chave] = valor;  
    return obj;  
}
