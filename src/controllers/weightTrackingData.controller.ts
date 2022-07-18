import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Put,
    Query,
    Res,
} from '@nestjs/common'
import { Response } from 'express'
import { WeigthTrackingDataService } from 'src/services/WeigthTrackingData.service'
import { ValidateNewWeightTrackingData } from 'src/dtos/WeightTrackingData.dto'

@Controller('weightTrackingData')
export class WeightTrackingDataController {
    constructor(private weightTrackingDataService: WeigthTrackingDataService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async saveNewweightTrackingData(
        @Res() res: Response,
        @Body() body: ValidateNewWeightTrackingData,
    ) {
        await this.weightTrackingDataService.CreateWeightTrackingData(body)
        return res.json({
            message: 'success',
            data: body,
        })
    }

    @Get('detaliedTable')
    @HttpCode(HttpStatus.OK)
    async getDetaliedTable(@Res() res: Response) {
        await this.weightTrackingDataService.DetailedWeightTable({
            date: '07/12/2022',
            IMC: 34,
            actualWeight: 90,
            loseWeight: 1,
        })
        return res.json({
            message: 'success',
        })
    }

    @Get('generalTable')
    @HttpCode(HttpStatus.OK)
    getGeneralTable(@Res() res: Response) {
        this.weightTrackingDataService.GeneralWeihtTable({
            initialWeight: 91,
            actualWeight: 90,
            targetWeight: 75,
        })
        return res.json({
            message: 'success',
        })
    }

    @Get('graph')
    @HttpCode(HttpStatus.OK)
    generateGraph(@Res() res: Response) {
        this.weightTrackingDataService.WeigthTrackingGraph({
            date: '07/11/2022',
            weight: 91,
        })
        return res.json({
            message: 'success',
        })
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    DeleteWeightData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Información con el id ${query.id} eliminada`,
        })
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateWeightData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Información con el id ${query.id} actualizada`,
        })
    }
}
