interface ValidationData{
    [className: string]: {
        [propName: string]: string[];
    }
}
const validations: ValidationData = {};

function validator(types: string[]){
    return function (target: any, propName: string){
        validations[target.constructor.name] = {
            [propName] : types,
        };
    };
}

class Person{
    @validator(['required'])
    email:string;
    @validator(['required', 'password'])
    password: string;
    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }
}

function validate(obj: any){
    const validationsRegistered = validations[obj.constructor.name];
    if(!validationsRegistered){
        return true;
    }
    let isValid = true;
    for(const prop in validationsRegistered){
        for(const validator of validationsRegistered[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                   // return !!obj[prop];
                case 'password':
                    isValid = isValid && obj[prop].length > 5;
                    break;
                    //return obj[prop].length > 5;
            }
        }
    }
   return isValid;
}

const personForm = document.querySelector('form');

personForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailElem = document.getElementById('email') as HTMLInputElement;
    const passwordElem = document.getElementById('password') as HTMLInputElement;
    const newPerson = new Person(emailElem.value, passwordElem.value);

    if(!validate(newPerson)){
        alert('El valor ingresado es incorrecto');
        return;
    }
    console.log(newPerson);
});