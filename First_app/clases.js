var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(b, model, color, price) {
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
    Vehicle.PriceToCurrency = function (value, typeOfCurrency) {
        var result = "";
        switch (typeOfCurrency) {
            case "USD":
                result = "US" + value;
                break;
            case "PESO":
                result = "$" + value;
                break;
        }
        return result;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log("estoy conduciendo un auto ".concat(this.brandName));
    };
    Car.prototype.currentBill = function () {
        return "La factura actual es de 200";
    };
    return Car;
}(Vehicle));
var Airplane = /** @class */ (function (_super) {
    __extends(Airplane, _super);
    function Airplane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airplane.prototype.drive = function () {
        console.log("estoy conduciendo un avion ejemplo ".concat(this.brandName));
    };
    Airplane.prototype.altitude = function () {
        return "VOLANDO A UNA ALTITUD DE 3000 PIES";
    };
    Airplane.prototype.currentBill = function () {
        return "La factura es de 250";
    };
    return Airplane;
}(Vehicle));
var vehicle = new Car("mitzubishi", '117', 'rosa', 117);
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
