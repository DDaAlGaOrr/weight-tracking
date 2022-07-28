import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
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
        private readonly jwtService: JwtService,
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
        const imc = (weight / (height * height)).toFixed()

        const newUser = await this.userModel.create(newUserData)

        const idUser = newUser._id.toString()

        const userHealth = await this.healthModel.create({
            userId: idUser,
            age: newUserData.age,
            firstWeight: newUserData.firstWeight,
            height: newUserData.height,
            targetWeight: newUserData.targetWeight,
            IMC: imc,
        })

        return { newUser: newUser, userHealth: userHealth }
    }

    async authLogin(credentials: AuthUserInterface) {
        const email = credentials.email
        const password = credentials.password

        const authUser = await this.userModel.find({
            email: email,
            password: password,
        })
        if (authUser.length > 0) {
            const userId = authUser[0]._id.toString()
            const token = this.jwtService.sign(userId)
            return {
                authUser: true,
                token: token,
                email: email,
                userId: userId,
            }
        } else {
            return { authUser: false }
        }
    }
    updateUser(updateUser: UpdateUserInterface) {
        return 'update user'
    }
    deleteUser(id: any) {
        return 'delte user'
    }
}
