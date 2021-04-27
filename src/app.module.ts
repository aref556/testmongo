import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { memberSchema } from './schemas/member.schema';
import { ApproveKeyController } from './controllers/approve-key.controller';
import { ApproveKeyService } from './services/approve-key.service';
import { testSchema } from './schemas/test.schema';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/member_db'),
      MongooseModule.forFeature([
        { name: 'Member', schema: memberSchema },
        {name: 'test', schema: testSchema},
      ])
  ],
  controllers: [
    AppController,
    ApproveKeyController,
  ],
  providers: [
    AppService,
    ApproveKeyService,
  ],
})
export class AppModule {}
