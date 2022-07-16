import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator'
export class ValidateCreateUser {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}
