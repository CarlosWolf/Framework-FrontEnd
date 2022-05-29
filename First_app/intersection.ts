interface User  {
    name: string;
    startDate: Date;
}
interface Admin  {
    name: string;
    permission: string [];
}
interface UserAdmin extends User, Admin{
    
}
const doctor: UserAdmin = {
    name:"Carlos",
    startDate: new Date(),
    permission: ["Ver paciente"]
}