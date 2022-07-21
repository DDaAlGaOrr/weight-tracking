import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { AuthUserInterface } from './../interfaces/AuthUser.interface'
import { UserInterface } from '../interfaces/User.interface'
import { User, UserDocument } from './../schemas/User.schema'

interface UpdateUserInterface extends UserInterface {
    id: number
}
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async createUser(newUserData: UserInterface): Promise<User> {
        const newUser = await this.userModel.create(newUserData)
        return newUser
    }
    authLogin(credentials: AuthUserInterface) {
        console.log(credentials)
    }
    updateUser(updateUser: UpdateUserInterface) {
        console.log(updateUser)
    }
    deleteUser(id: any) {
        console.log(id)
    }
}
