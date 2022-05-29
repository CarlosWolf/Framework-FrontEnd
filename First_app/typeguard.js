var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('volando');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('nadando');
    };
    return Fish;
}());
function printPet(pet) {
    if (pet instanceof Fish)
        pet.swim();
}
var pet = new Fish();
printPet(pet);
