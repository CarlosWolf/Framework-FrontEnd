"use strict";
let vehiculo = "";
let cantidad; //= 1
let esAutomovil; // = true
//****************objetos******************
let persona = {
    nombre: "CARLOS",
    edad: 21,
    direccion: {
        calle: "Polyuc",
        comuna: "no se que es comuna"
    }
};
console.log("****************OBJETOS*****************");
console.log(persona);
//*********ARREGLOS****************** 
let persona2;
let hobbies /*string*/;
hobbies = ["VideoJuegos", "leer", "Escuchar musica", 1];
console.log("***************ARREGLOS*************");
for (const hobbie of hobbies) {
    console.log(hobbie);
}
let automovil = ["honda", 2022, "negro"];
// automovil[1] = "otro valor";
let motocicleta = ["susuki", 2022, "Rosa"];
console.log("*********TUPLAS**********************");
console.log(automovil);
/* ************** ENUM ************** */
var role;
(function (role) {
    role[role["estudiante"] = 0] = "estudiante";
    role[role["profesor"] = 1] = "profesor";
})(role || (role = {}));
let persona3 = {
    nombre: "CARLOS",
    edad: 21,
    direccion: {
        calle: "Polyuc",
        comuna: "no se que es comuna"
    },
    cursos: ["Flutrer", "SQl", "WEb"],
    role: role.estudiante
};
console.log("---------------ENUM----------------");
console.log(persona3);
/* ************* Literal **************** */
let vehiculo2;
// vehiculo2 = "arsdfga"; NOTA: DA ERROR
