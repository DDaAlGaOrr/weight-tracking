import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator'
export class AuthUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}
