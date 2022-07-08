import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
} from '@nestjs/class-validator'

export class ValidateCreateUser {
    @IsNotEmpty()
    @IsString()
    username: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string

    @IsNotEmpty()
    @IsString()
    firstname: string

    @IsString()
    @IsNotEmpty()
    lastname: string

    @IsNumber()
    @IsNotEmpty()
    age: number

    @IsNumber()
    @IsNotEmpty()
    actualWeight: number

    @IsNumber()
    @IsNotEmpty()
    targetWeight: number

    @IsNumber()
    @IsNotEmpty()
    height: number

    @IsString()
    @IsNotEmpty()
    date: string
}
