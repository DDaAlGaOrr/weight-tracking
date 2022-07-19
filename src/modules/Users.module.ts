import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersController } from '../../src/controllers/Users.controller'
import { UsersService } from '../../src/services/Users.service'
import { User, userSchema } from './../schemas/User.schema'

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: userSchema,
            },
        ]),
    ],
})
export class UsersModule {}
