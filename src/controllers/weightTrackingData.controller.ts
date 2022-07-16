import {
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Put,
    Query,
    Res,
} from '@nestjs/common'
import { Response } from 'express'

@Controller('weightTrackingData')
export class WeightTrackingDataController {
    @Get('detaliedTable')
    @HttpCode(HttpStatus.OK)
    getDetaliedTable(@Res() res: Response) {
        return res.json({
            message: 'success',
            data: {
                date: '07/07/2022',
                actualWeight: 90,
                loseWeight: 1,
                IMC: 34,
            },
        })
    }

    @Get('generalTable')
    @HttpCode(HttpStatus.OK)
    getGeneralTable(@Res() res: Response) {
        return res.json({
            message: 'success',
            data: {
                initialWeight: 91,
                actualWeight: 90,
                targetWeight: 75,
            },
        })
    }

    @Get('graph')
    @HttpCode(HttpStatus.OK)
    generateGraph(@Res() res: Response) {
        return res.json({
            message: 'success',
            data: [
                {
                    weight: 91,
                    date: '07/07/2022',
                },
                { weight: 90, date: '08/07/2022' },
            ],
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
