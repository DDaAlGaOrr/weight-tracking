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
import { WeightService } from '../services/Weight.service'

class DeleteWeightDto {
    id: number
}
@Controller('weight')
export class WeightController {
    constructor(private weightService: WeightService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async NewWeight(@Res() res: Response, @Body() body: ValidateWeight) {
        return res.json(
            await this.weightService.createWeight({
                date: new Date(body.date),
                weight: body.weight,
                userId: body.userId,
            }),
        )
    }

    @Get('detaliedTable')
    @HttpCode(HttpStatus.OK)
    async getDetaliedTable(@Query() query: any, @Res() res: Response) {
        return res.json(
            await this.weightService.detailedWeightTable(query.userId),
        )
    }

    @Get('generalTable')
    @HttpCode(HttpStatus.OK)
    async getGeneralTable(@Query() query: any, @Res() res: Response) {
        return res.json(
            await this.weightService.generalWeightTable(query.userId),
        )
    }

    @Get('graph')
    @HttpCode(HttpStatus.OK)
    async generateGraph(@Query() query: any, @Res() res: Response) {
        return res.json(await this.weightService.weigthGraph(query.userId))
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
