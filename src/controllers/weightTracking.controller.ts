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

@Controller()
class WeightTrackingController {
    @Post('authLogin')
    @HttpCode(HttpStatus.OK)
    login(@Body() body: any) {
        const email = JSON.stringify(body.credentials.email)
        const password = JSON.stringify(body.credentials.password)
        console.log(email, password)
    }

    @Post('createUser')
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() body: any) {
        return `new user data: ${JSON.stringify(body)}`
    }

    @Put('updateUserData')
    @HttpCode(HttpStatus.OK)
    updateUserData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Usuario con el ID: ${query.id} actualizado`,
        })
    }

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

    @Delete('deleteWeightData')
    @HttpCode(HttpStatus.OK)
    DeleteWeightData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Información con el id ${query.id} eliminada`,
        })
    }

    @Put('updateWeightData')
    @HttpCode(HttpStatus.OK)
    updateWeightData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Información con el id ${query.id} actualizada`,
        })
    }
}

export default WeightTrackingController
