import { Module } from '@nestjs/common'

// import { CatsController } from './app.controller'
import { AppService } from './app.service'
import WeightTrackingController from './weightTracking.controller'
import ProductController from './product.controller'

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [AppService],
})
export class AppModule {}
