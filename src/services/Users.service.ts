import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

import {
    AuthUserInterface,
    UserInterface,
} from './../interfaces/Users.interface'
import {
    MessagesInterface,
    AuthMessagesInterface,
} from './../interfaces/Messages.interface'
import { Health, HealthDocument } from './../schemas/Health.schema'
import { User, UserDocument } from './../schemas/User.schema'

interface UpdateUserInterface extends UserInterface {
    id: number
}
const saltOrRounds = 10
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Health.name)
        private healthModel: Model<HealthDocument>,
        private readonly jwtService: JwtService,
    ) {}

    async CreateUser(user: UserInterface): Promise<MessagesInterface> {
        const email = user.email
        const PasswordHash = await bcrypt.hash(user.password, 10)
        const height = user.height
        const weight = user.firstWeight
        const IMC = (weight / (height * height)).toFixed()

        const emailExists = await this.userModel.find({ email: email })

        if (emailExists.length != 0) {
            return {
                status: false,
                statusCode: 400,
                message: 'This email is already being used',
            }
        }

        const userId = (
            await this.userModel.create({
                email: email,
                password: PasswordHash,
                firstname: user.firstname,
                lastname: user.lastname,
            })
        )._id.toString()

        if (!userId) {
            return {
                status: false,
                statusCode: 400,
                message: `something went wrong`,
            }
        }

        const insertHealthData = (
            await this.healthModel.create({
                userId: userId,
                birthdate: user.birthdate,
                firstWeight: user.firstWeight,
                height: user.height,
                targetWeight: user.targetWeight,
                IMC: IMC,
            })
        )._id

        if (!insertHealthData) {
            return {
                status: false,
                statusCode: 400,
                message: `something went wrong`,
            }
        }

        return {
            status: true,
            statusCode: 201,
            message: `User created`,
        }
    }

    async authLogin(
        credentials: AuthUserInterface,
    ): Promise<AuthMessagesInterface> {
        const email = credentials.email
        const password = credentials.password

        const user = await this.userModel.findOne({ email: email })
        if (!user) {
            return {
                status: false,
                statusCode: 401,
                message: 'the email is wrong',
                token: '',
            }
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return {
                status: false,
                statusCode: 401,
                message: 'the password is wrong',
                token: '',
            }
        }
        const userId = user._id.toString()
        const token = this.jwtService.sign(userId)

        return {
            status: true,
            statusCode: 200,
            message: 'success',
            token: token,
        }
    }
    updateUser(updateUser: UpdateUserInterface) {
        return 'update user'
    }
    deleteUser(id: any) {
        return 'delete user'
    }
}
