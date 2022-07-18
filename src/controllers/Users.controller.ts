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
import { AuthUserDto } from 'src/dtos/AuthUser.dto'
import { ValidateCreateUserDto } from 'src/dtos/User.dto'
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
        return {
            message: 'auth user',
        }
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() body: ValidateCreateUserDto) {
        this.userService.createUser({
            email: body.email,
            firstname: body.firstname,
            lastname: body.lastname,
            password: body.password,
            age: body.age,
            height: body.height,
            targetWeigth: body.targetWeight,
        })
        return 'User created'
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
