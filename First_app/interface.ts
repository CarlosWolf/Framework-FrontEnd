enum Role{
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}
/*type Staff ={ //no esta limitado a objetos 
    name: string,
    email: string,
    role: Role
}*/
interface Staff{ //son solo para definir estructura de un objeto
    name: string,
    email: string,
    role: Role
}
 interface Billable {
     total: number,
     currentBill(): string
 }

const medico = {
    name: "Carlos",
    email: "wolf117@gmail.com",
    role: Role.Doctor,
    total: 25,
    currentBill(){
        return `Valor actual de la factura ${this.total}`
    }
}

const printStaff = (staff: Staff) =>{
    console.log(staff);
}
const printCurrentBill = (bill: Billable)=>{
    console.log(bill.currentBill());
}

printStaff(medico);
printCurrentBill(medico);
