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

import { ValidateWeight } from '../dtos/Weight.dto'
import { WeigthService } from '../services/Weigth.service'

class DeleteWeightDto {
    id: number
}
@Controller('weight')
export class WeightController {
    constructor(private weightService: WeigthService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async NewWeight(@Res() res: Response, @Body() body: ValidateWeight) {
        const newData = await this.weightService.createWeight({
            date: new Date(body.date),
            weight: body.weight,
        })
        console.log(newData)
        return res.json({
            message: 'Created',
            newData: newData,
        })
    }

    @Get('detaliedTable')
    @HttpCode(HttpStatus.OK)
    getDetaliedTable(@Res() res: Response) {
        return res.json(this.weightService.detailedWeightTable())
    }

    @Get('generalTable')
    @HttpCode(HttpStatus.OK)
    getGeneralTable(@Res() res: Response) {
        return res.json(this.weightService.generalWeihtTable())
    }

    @Get('graph')
    @HttpCode(HttpStatus.OK)
    generateGraph(@Res() res: Response) {
        return res.json(this.weightService.weigthGraph())
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    DeleteWeight(@Query() query: DeleteWeightDto, @Res() res: Response) {
        this.weightService.deleteWeight({
            id: query.id,
        })
        return res.json('Data deleted')
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateWeight(@Query() query: any, @Res() res: Response) {
        return res.json('Pendient')
    }
}
