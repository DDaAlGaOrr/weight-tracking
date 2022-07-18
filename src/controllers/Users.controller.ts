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
import { ValidateCreateUserDto } from 'src/dtos/User.dto'
import { AuthUserDto } from 'src/dtos/AuthUser.dto'
import { UsersService } from 'src/services/Users.service'
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
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() body: ValidateCreateUserDto) {
        this.userService.createUser({
            email: 'Email',
            username: 'Username',
            firstname: 'Firstname',
            lastname: 'Lastname',
            password: 'Password',
            age: 19,
            height: 178,
            targetWeigth: 75,
        })
        return `new user data: ${JSON.stringify(body)}`
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateUserData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Usuario con el ID: ${query.id} actualizado`,
        })
    }
    @Delete()
    @HttpCode(HttpStatus.OK)
    DeleteUserData(@Query() query: any, @Res() res: Response) {
        return res.json({
            message: 'Success',
            data: `Usuario con el ID: ${query.id} eliminado`,
        })
    }
}
