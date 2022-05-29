let vehiculo = ""
let cantidad: number; //= 1
let esAutomovil: boolean; // = true
//****************objetos******************
let persona: {
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        comuna: string  
    }
}={
    nombre: "CARLOS",
    edad: 21,
    direccion:{
        calle: "Polyuc",
        comuna: "no se que es comuna"
    }
}
console.log("****************OBJETOS*****************");
console.log(persona);

//*********ARREGLOS****************** 
let persona2: {
    nombre: "CARLOS",
    edad: 21,
    direccion:{
        calle: "Polyuc",
        comuna: "no se que es comuna"
    },
    cursos:["Flutrer","SQl", "WEb" ]
};
let hobbies: any[]/*string*/;
hobbies= ["VideoJuegos", "leer", "Escuchar musica", 1];
console.log("***************ARREGLOS*************");
for (const hobbie of hobbies){
    console.log(hobbie);
}   
//************ TUPLAS **************** 
type vehiculoType = [string, number, string];
let automovil: vehiculoType = ["honda", 2022, "negro"];
// automovil[1] = "otro valor";
let motocicleta: vehiculoType = ["susuki", 2022, "Rosa"];
console.log("*********TUPLAS**********************");
console.log(automovil);
/* ************** ENUM ************** */
enum role {estudiante, profesor}
let persona3 = {
    nombre: "CARLOS",
    edad: 21,
    direccion:{
        calle: "Polyuc",
        comuna: "no se que es comuna"
    },
    cursos:["Flutrer","SQl", "WEb" ],
    role: role.estudiante
};
console.log("---------------ENUM----------------")
console.log(persona3);
/* ************* Literal **************** */
let vehiculo2: "automovil";
// vehiculo2 = "arsdfga"; NOTA: DA ERROR