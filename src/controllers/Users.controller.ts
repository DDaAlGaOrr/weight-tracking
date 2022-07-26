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
import { AuthUserDto, ValidateCreateUserDto } from './../dtos/User.dto'
import { UsersService } from './../services/Users.service'

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('authLogin')
    @HttpCode(HttpStatus.OK)
    login(@Body() body: AuthUserDto) {
        this.userService.authLogin({
            email: body.email,
            password: body.password,
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
        const newUser = await this.userService.authCreateUser({
            email: body.email,
            firstname: body.firstname,
            lastname: body.lastname,
            password: body.password,
            age: body.age,
            firstWeight: body.firstWeight,
            height: body.height,
            targetWeight: body.targetWeight,
        })
        return res.json({ message: newUser })
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
