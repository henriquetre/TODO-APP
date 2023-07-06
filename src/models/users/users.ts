export class User {
    id: string;
    name:string;
    senha: string;
    email: string;
    groups?: string[];
    cardPermissions?: string[];
    propertiesPermissions?: string[];

}