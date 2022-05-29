var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Anestesista"] = 1] = "Anestesista";
    Role[Role["Asistente"] = 2] = "Asistente";
    Role[Role["Administrativo"] = 3] = "Administrativo";
})(Role || (Role = {}));
var medico = {
    name: "Carlos",
    email: "wolf117@gmail.com",
    role: Role.Doctor,
    total: 25,
    currentBill: function () {
        return "Valor actual de la factura ".concat(this.total);
    }
};
var printStaff = function (staff) {
    console.log(staff);
};
var printCurrentBill = function (bill) {
    console.log(bill.currentBill());
};
printStaff(medico);
printCurrentBill(medico);
