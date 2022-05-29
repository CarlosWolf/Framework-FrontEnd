interface Billable{
    currentBill(): string;
}
interface Flyable{
    altitude(): string;
}

abstract class Vehicle {
 protected readonly   brandName: string; //readonly solo se pueden utilizar los atributos en su vizualizacion
  private readonly model:  string;
  private readonly color: string; 
  private price: number;
  
    constructor(
        b: string, 
         model: string,
         color:string,
         price: number
        ){
        
        this.brandName = b;
        this.model = model;
        this.color = color;
        this.price = price;
        
    }
    /*get getPrice(){
        return `El precio actual es ${this.price}`;
    }
    set setPrice(value:number){
        this.price = value;
    }*/

    static PriceToCurrency(value:number, typeOfCurrency:string){
         let result = "";
         switch(typeOfCurrency){
                case "USD":
                    result = "US" + value;
                    break;
                 case "PESO":
                    result = "$" + value;
                    break;          
         }      
         return result;
    }
    //nuevo metodo drive abstracto
    abstract drive(): void;
   /*drive(){//metodo
        console.log(`conduciendo un ${this.brandName} modelo: ${this.model} color: ${this.color}`);
    }*/
    
}

class Car extends Vehicle implements Billable{//herencia e implementacion de interfas
    drive(): void {
        console.log(`estoy conduciendo un auto ${this.brandName}`);
    }
    currentBill(): string {
        return "La factura actual es de 200";
    }
}
class Airplane extends Vehicle implements Billable, Flyable{//herencia
    drive(): void {
        console.log(`estoy conduciendo un avion ejemplo ${this.brandName}`);
    }
    altitude(): string {
        return "VOLANDO A UNA ALTITUD DE 3000 PIES";
    }
    currentBill(): string {
        return "La factura es de 250";
    }
}


const vehicle = new Car(`mitzubishi`,'117', 'rosa', 117);
/*console.log(vehicle.getPrice);
vehicle.setPrice = 1299;*/
vehicle.drive();
console.log("----------------------------------------------");
/*const vehicle = new Vehicle(`mitzubishi`,'117', 'rosa');
vehicle.drive();*/
//vehicle.brandName = "toyota";// si no es private se cambiara el valor 
console.log(vehicle);


//Impresion de Metodo Estatico
console.log("---------------Metodo estatico---------------");
console.log(Car.PriceToCurrency(200, "USD"));

/* //nos arroja undefined
let motorcycle = {
    drive: vehicle.drive
};
console.log(motorcycle.drive());
*/