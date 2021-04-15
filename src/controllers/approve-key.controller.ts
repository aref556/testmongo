import { Controller, Get, Req } from "@nestjs/common";
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

}