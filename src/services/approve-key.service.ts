import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IMemberDocument, ISaveData } from "src/interfaces/member.interaface";
import * as f from 'fs';
import { CreateMemberModel, TrySaveData } from "src/models/member.model";

@Injectable()
export class ApproveKeyService {
    constructor(
        @InjectModel('Member') private MemberCollecction: Model<IMemberDocument>,
        @InjectModel('test') private TestCollection: Model<ISaveData>
        ) { }

    async getMemberForApproveKey() {

        // return await this.MemberCollecction.findOne({flagrsa: 3});

        const memberItemAdd = await this.MemberCollecction.findOne({
            flagrsa: 3,
            flagserver: "0",
        }, {
            _id: false,
            __v: false,
            password: false,
            flagrsa: false,
            macaddress: false,
            hashmac: false,
            firstname: false,
            lastname: false,
            telphone: false,
            email: false,
            facebook: false,
            line: false,
            latitude: false,
            longitude: false,
            organization: false,
            num: false,
            subdistrict: false,
            district: false,
            province: false,
            zipcode: false,
            id: false,
            image: false,
            role: false,
            created: false,
            updated: false,
        });
        if (!memberItemAdd) {
            const memberItemUpdated = await this.MemberCollecction.findOne({
                flagrsa: 3,
                flagserver: "1",
            }, {
                _id: false,
                __v: false,
                password: false,
                flagrsa: false,
                macaddress: false,
                hashmac: false,
                firstname: false,
                lastname: false,
                telphone: false,
                email: false,
                facebook: false,
                line: false,
                latitude: false,
                longitude: false,
                organization: false,
                num: false,
                subdistrict: false,
                district: false,
                province: false,
                zipcode: false,
                id: false,
                image: false,
                role: false,
                created: false,
                updated: false,
            });
            if (!memberItemUpdated) {
                //เก็บ log file 
                const data = ` เวลา ${new Date()} จาก {api/approve-key, GET} : ไม่มีผู้ใช้ที่ได้รับการอนุมัติ \n`;
                f.open('log/rsalog.log', 'a', (err, fd) => {
                    f.appendFile(fd, data, `utf8`, (err) => {
                        f.close(fd, (err) => {
                            if (err) throw err;
                        });
                        if (err) throw err;
                    });
                    if (err) throw err;
                });
                throw new BadRequestException('ไม่มีผู้ใช้ที่ได้รับการอนุมัติ');
            }
            const test2 = await this.MemberCollecction.updateOne({ username: memberItemUpdated.username }, {
                flagrsa: 4,
                flagserver: "1",
            });
            // console.log(test2);

            //เก็บ log file 
            const data = ` เวลา ${new Date()} จาก {api/approve-key, GET} : updated key [${memberItemUpdated.username}] \n`;
            f.open('log/rsalog.log', 'a', (err, fd) => {
                f.appendFile(fd, data, `utf8`, (err) => {
                    f.close(fd, (err) => {
                        if (err) throw err;
                    });
                    if (err) throw err;
                });
                if (err) throw err;
            });

            return memberItemUpdated;

        }
        // if (!memberItem) throw new BadRequestException('ไม่พบข้อมูลของผู้ใช้ที่ได้รับการอนุมัติให้ ApproveKey');
        const test = await this.MemberCollecction.updateOne({ username: memberItemAdd.username }, {
            flagserver: "1",
            flagrsa: 4,
        });
        // console.log(test);

        //เก็บ log file 
        const data = ` เวลา ${new Date()} จาก {api/approve-key, GET} : added key [${memberItemAdd.username}] \n`;
        f.open('log/rsalog.log', 'a', (err, fd) => {
            f.appendFile(fd, data, `utf8`, (err) => {
                f.close(fd, (err) => {
                    if (err) throw err;
                });
                if (err) throw err;
            });
            if (err) throw err;
        });

        return memberItemAdd;
    }

    async getCountToApproveKey() {
        const count = await this.MemberCollecction.countDocuments({ flagrsa: 3 });
        // console.log(count);
        return count;
    }

    async onSaveData(body: TrySaveData) {
        // body.username = "555";
        let tbody: TrySaveData;
        tbody = body;
        console.log(tbody);
        const modelItem = await this.TestCollection.create(tbody);
        console.log(modelItem);
        return modelItem;
    }
}