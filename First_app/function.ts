/*function sumar1(valor: number, valor2: number): number{
    return valor + valor2;
}*/
const sumar = (valor1: number, valor2: number ) :number => {
   return valor1 + valor2;
}
//Funciones como tipos 
let sumar2:(a: number, b: number) => number;
sumar2 = sumar;
console.log("FUNCIONES COMO TIPOS");
console.log(sumar2(2,2));

function imprimir2(): void{
    console.log(sumar2,2);
}
/*------------------------------*/

const dividir = function(a:number, b: number): number{
    return a/b;
}
function imprimir(): void{
    console.log("FUNCION VOID");
    console.log(sumar(2, 2));
}
//no retornar nada **NEVER**
//CON VOID PODEMOS RETORNAR NULL E UNDEFINED PERO CON NEVER NO RETORNAMOS NADA
const throwError = (message:string) :never => {
    /*if(!message){*///cambia de never a string
        throw new Error(message);
    /*}
    return message;//cambia de never a string*/
}
imprimir();
/*funcion callback*/
function imprimirCallback(a: number, b: number, mostrar:(value: number)=>void): void{
    console.log("FUNCION CALLBACK");
    let resultado = a +b;
    mostrar(resultado);
}
imprimirCallback(100,17,(w) => { 
    console.log(w);
 })