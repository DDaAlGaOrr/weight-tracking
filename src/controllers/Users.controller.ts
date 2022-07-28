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

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(
        @Body() body: ValidateCreateUserDto,
        @Res() res: Response,
    ) {
        return res.json(
            await this.userService.authCreateUser({
                email: body.email,
                firstname: body.firstname,
                lastname: body.lastname,
                password: body.password,
                age: body.age,
                firstWeight: body.firstWeight,
                height: body.height,
                targetWeight: body.targetWeight,
            }),
        )
    }

    @Post('authLogin')
    @HttpCode(HttpStatus.OK)
    async authUser(@Body() body: AuthUserDto, @Res() res: Response) {
        const authResponse = await this.userService.authLogin(body)
        return res.json({ authResponse })
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
