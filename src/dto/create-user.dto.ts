import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    Min,
    MinLength,
} from '@nestjs/class-validator'

export class ValidateCreateUser {
    @IsString()
    @IsNotEmpty({ message: 'Usuario requerido ' })
    username: string

    @IsEmail()
    @IsNotEmpty({ message: 'Email requerido' })
    email: string

    @IsString()
    @MinLength(8, {
        message: 'La contraseña debe de tener minimo 8 caracteres',
    })
    @IsNotEmpty({ message: 'Contraseña requerida' })
    password: string

    @IsNotEmpty({ message: 'Nombre requerido' })
    @IsString()
    firstname: string

    @IsString()
    @IsNotEmpty({ message: 'Apellidos requeridos' })
    lastname: string

    @IsNumber()
    @IsNotEmpty({ message: 'Edad requerida' })
    @Min(10, { message: 'la edad minima es de 10 años' })
    age: number

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    actualWeight: number

    @IsNumber()
    @IsNotEmpty({ message: 'Meta requerida' })
    @Min(0, { message: 'Entrada no valido' })
    targetWeight: number

    @IsNumber()
    @IsNotEmpty({ message: 'Altura requerida' })
    @Min(0, { message: 'Entrada no valido' })
    height: number

    @IsString()
    @IsNotEmpty()
    date: string
}
