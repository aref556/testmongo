import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { CreateMemberModel, TrySaveData } from "src/models/member.model";
import { ApproveKeyService } from "src/services/approve-key.service";


@Controller('api/approve-key')
export class ApproveKeyController {
    constructor(
        private service: ApproveKeyService,
    ) { }

    @Get()
    getUserApprove() {
        return this.service.getMemberForApproveKey();
    }

    @Get('count')
    getCountUserApproveKey() {
        return this.service.getCountToApproveKey();
    }

    @Post('save-data')
    register(@Body() body: TrySaveData) {
        return this.service.onSaveData(body);
    }

}

