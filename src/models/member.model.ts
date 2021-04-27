import { FlagAccount, IAccount, RoleAccount } from "../interfaces/app.interface";

export class CreateMemberModel implements IAccount {
    date_new: Date;
    username: string;
    password: string;

    rsakey: string;
    flagrsa: FlagAccount;
    flagserver: string;
    macaddress: string;

    hashmac: string;
    firstname: string;
    lastname: string;
    telphone: string;
    email: string;
    facebook: string;
    line: string;

    latitude: string;
    longitude: string;
    organization: string;
    num: string;
    subdistrict: string;
    district: string;
    province: string;
    zipcode: string;

    id?: any;
    image?: string;

    role?: RoleAccount;

    created?: Date;
    updated?: Date;
}

export class UpdateMemberModel implements IAccount {
    
    username: string;
    password: string;
    rsakey: string;
    flagrsa: FlagAccount;
    flagserver: string;

    macaddress: string;

    hashmac: string;
    firstname: string;
    lastname: string;
    telphone: string;
    email: string;
    facebook: string;
    line: string;
    latitude: string;
    longitude: string;
    organization: string;
    num: string;
    subdistrict: string;
    district: string;
    province: string;
    zipcode: string;
    id?: any;
    image?: string;
    role?: RoleAccount;
    created?: Date;
    updated?: Date;
}

export class ParamMemberModel {
    id: number;
}

export class TrySaveData {
    username: string;
}