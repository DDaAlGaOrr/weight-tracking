import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import {
    AuthUserInterface,
    UserInterface,
} from './../interfaces/Users.interface'
import { Health, HealthDocument } from './../schemas/Health.schema'
import { User, UserDocument } from './../schemas/User.schema'

interface UpdateUserInterface extends UserInterface {
    id: number
}
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Health.name) private healthModel: Model<HealthDocument>,
    ) {}

    async authCreateUser(user: UserInterface): Promise<any> {
        const email = user.email
        const emailExists = await this.userModel.find({ email: email })

        if (emailExists.length === 0) {
            return { exist: false, message: this.createUser(user) }
        } else {
            return { exist: true, message: 'Este correo ya está siendo usado' }
        }
    }
    async createUser(newUserData: UserInterface): Promise<any> {
        const height = newUserData.height
        const weight = newUserData.firstWeight
        const imc = weight / (height * height)

        const newUser = await this.userModel.create(newUserData)

        const idUser = newUser._id.toString()

        const userHealth = await this.healthModel.create({
            User: idUser,
            age: newUserData.age,
            firstWeight: newUserData.firstWeight,
            height: newUserData.height,
            targetWeight: newUserData.targetWeight,
            IMC: imc,
        })

        return { newUser: newUser, userHealth: userHealth }
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
