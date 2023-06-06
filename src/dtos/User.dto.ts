import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from '@nestjs/class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @MinLength(8)
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    firstname: string

    @IsNotEmpty()
    @IsString()
    lastname: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @IsNumber()
    firstWeight: number

    @IsNotEmpty()
    @IsNumber()
    height: number

    @IsNotEmpty()
    @IsNumber()
    targetWeight: number
}

export class AuthUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}
