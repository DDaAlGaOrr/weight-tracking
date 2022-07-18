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
import { ValidateNewWeightTrackingData } from 'src/dtos/WeightTrackingData.dto'
import { WeigthTrackingDataService } from 'src/services/WeigthTrackingData.service'

class DeleteWeightTrackingDataDto {
    id: number
}
@Controller('weightTrackingData')
export class WeightTrackingDataController {
    constructor(private weightTrackingDataService: WeigthTrackingDataService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    saveNewweightTrackingData(
        @Res() res: Response,
        @Body() body: ValidateNewWeightTrackingData,
    ) {
        this.weightTrackingDataService.createWeightTrackingData({
            date: body.date,
            weight: body.weight,
        })
        return res.json({
            message: 'Created',
        })
    }

    @Get('detaliedTable')
    @HttpCode(HttpStatus.OK)
    getDetaliedTable(@Res() res: Response) {
        return res.json(this.weightTrackingDataService.detailedWeightTable())
    }

    @Get('generalTable')
    @HttpCode(HttpStatus.OK)
    getGeneralTable(@Res() res: Response) {
        return res.json(this.weightTrackingDataService.generalWeihtTable())
    }

    @Get('graph')
    @HttpCode(HttpStatus.OK)
    generateGraph(@Res() res: Response) {
        return res.json(this.weightTrackingDataService.weigthTrackingGraph())
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    DeleteWeightData(
        @Query() query: DeleteWeightTrackingDataDto,
        @Res() res: Response,
    ) {
        this.weightTrackingDataService.deleteWeightTrackingData({
            id: query.id,
        })
        return res.json('Data deleted')
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateWeightData(@Query() query: any, @Res() res: Response) {
        return res.json('Pendient')
    }
}
