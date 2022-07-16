import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Put,
    Query,
    Res,
} from '@nestjs/common'
import { Response } from 'express'

@Controller('users')
export class UsersController {
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
}
