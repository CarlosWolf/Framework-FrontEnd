var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var httpServer = {};
//@registerEndpoint
var Families = /** @class */ (function () {
    function Families() {
        this.houses = ['Lannister', 'Targaryen'];
    }
    Families.prototype.get = function () {
        return this.houses;
    };
    Families.prototype.post = function (request) {
        this.houses.push(request);
    };
    return Families;
}());
//@registerEndpoint
var Castles = /** @class */ (function () {
    function Castles() {
        this.castles = ['Winterfell', 'Casterly Rock'];
    }
    Castles.prototype.get = function () {
        return this.castles;
    };
    Castles.prototype.post = function (request) {
        this.castles.push(request);
    };
    __decorate([
        test
    ], Castles.prototype, "post");
    return Castles;
}());
function test(target, key, descriptor) {
    console.log(target);
    console.log("identificador: ".concat(key));
    console.log("".concat(descriptor.value));
}
function registerEndpoint(target) {
    //console.log(`target: ${target}`);
    var className = target.name;
    var endpointPath = "/" + className.toLowerCase();
    httpServer[endpointPath] = new target();
}
/*registerEndpoint(Families);
registerEndpoint(Castles);*/
//console.log(httpServer);
/*
console.log(httpServer['/castles'].get());
httpServer['/castles'].post("castle black");
console.log(httpServer['/castles'].get());*/ 
