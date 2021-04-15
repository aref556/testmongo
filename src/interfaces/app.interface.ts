// ข้อมูลสมาชิก
export interface IAccount {
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

    // address
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

// สถานะของ rsa user
export enum FlagAccount {
    Not_Have = 1,
    Have = 2,
    Approved = 3,
}

// สิทธ์ผู้ใช้งาน
export enum RoleAccount {
    Member = 1,
    Admin = 2,
    Superadmin = 3
}