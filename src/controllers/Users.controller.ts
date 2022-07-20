import {
    Body,
    Controller,
    Delete,
    HttpCode,
    HttpStatus,
    Post,
    Put,
    Query,
    Res,
} from '@nestjs/common'
import { Response } from 'express'

import { AuthUserDto } from './../dtos/AuthUser.dto'
import { ValidateCreateUserDto } from './../dtos/User.dto'
import { UsersService } from './../services/Users.service'

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('authLogin')
    @HttpCode(HttpStatus.OK)
    login(@Body() body: AuthUserDto) {
        const email = JSON.stringify(body.email)
        const password = JSON.stringify(body.password)
        this.userService.authLogin({
            email: email,
            password: password,
        })
        return {
            message: 'auth user',
        }
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(
        @Body() body: ValidateCreateUserDto,
        @Res() res: Response,
    ) {
        console.log(body)
        const newUser = await this.userService.createUser({
            email: body.email,
            firstname: body.firstname,
            lastname: body.lastname,
            password: body.password,
            age: body.age,
            height: body.height,
            targetWeight: body.targetWeight,
        })
        console.log(newUser)
        return res.json({ newUser: newUser })
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateUserData(@Query() query: any, @Res() res: Response) {
        return 'pendient'
    }
    @Delete()
    @HttpCode(HttpStatus.OK)
    DeleteUserData(@Query() query: any, @Res() res: Response) {
        return 'pedient'
    }
}
