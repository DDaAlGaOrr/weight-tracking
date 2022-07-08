import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Res,
    HttpCode,
    HttpStatus,
} from '@nestjs/common'
import { Response } from 'express'

@Controller()
class WeightTrackingController {
    // User login
    @Post('authLogin')
    @HttpCode(HttpStatus.OK)
    login(@Body() body: any) {
        return `credentials: ${JSON.stringify(body)}`
    }
    // Create new user
    @Post('createUser')
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() body: any) {
        return `new user data: ${JSON.stringify(body)}`
    }
    // option 2 get params
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
    DeleteProduct() {
        return 'Delete product'
    }
    @Put()
    updateProduct() {
        return 'update product'
    }
}

export default WeightTrackingController
