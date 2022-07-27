import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UsersController } from './../controllers/Users.controller'
import { User, userSchema } from './../schemas/User.schema'
import { Health, HealthSchema } from './../schemas/Health.schema'
import { UsersService } from './../services/Users.service'

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: userSchema,
            },
            {
                name: Health.name,
                schema: HealthSchema,
            },
        ]),
        JwtModule.register({ secret: 'topSecret' }),
    ],
})
export class UsersModule {}
