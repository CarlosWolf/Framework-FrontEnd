"use strict";
/*function sumar(valor: number, valor2: number): number{
    return valor + valor2;
}*/
const sumar = (valor1, valor2) => {
    return valor1 + valor2;
};
//Funciones como tipos 
let sumar2;
sumar2 = sumar;
console.log("FUNCIONES COMO TIPOS");
console.log(sumar2(2, 2));
function imprimir2() {
    console.log(sumar2, 2);
}
/*------------------------------*/
const dividir = function (a, b) {
    return a / b;
};
function imprimir() {
    console.log("FUNCION VOID");
    console.log(sumar(2, 2));
}
//no retornar nada **NEVER**
//CON VOID PODEMOS RETORNAR NULL E UNDEFINED PERO CON NEVER NO RETORNAMOS NADA
const throwError = (message) => {
    /*if(!message){*/ //cambia de never a string
    throw new Error(message);
    /*}
    return message;//cambia de never a string*/
};
imprimir();
/*funcion callback*/
function imprimirCallback(a, b, mostrar) {
    console.log("FUNCION CALLBACK");
    let resultado = a + b;
    mostrar(resultado);
}
imprimirCallback(100, 17, (w) => {
    console.log(w);
});
