import { Module } from '@nestjs/common'

// import { CatsController } from './app.controller'
import { AppService } from './app.service'
import WeightController from './weight-data.controller'

@Module({
    imports: [],
    controllers: [WeightController],
    providers: [AppService],
})
export class AppModule {}
