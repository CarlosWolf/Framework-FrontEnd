export abstract class Person implements Mappable{
    protected name: string;
    protected location: {
        lat: string;
        lng: string;
    };

    constructor(name: string, location: {lat: string, lng: string}){
        this.name = name;
        this.location = {
            lat: location.lat,
            lng: location.lng
        }
    };

    get getLocation(){
        return this.location;
    }

    markerTitle(address: () => string): string {
        return `La dirección de ${this.name} es ${address()}`;
    }
}