import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './schemas/user.schema'
import { Model } from 'mongoose'
import { createUserDto } from './dto/create-user.dto'
import { updateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(body: createUserDto) {
    const obj = await this.userModel.create(body)
    if (!obj) throw new BadRequestException()
    return obj
  }



// ////////////////////////////////////////////
  async findAll() {
    return await this.userModel.find()
  }
// ///////////////////////////////////////////



  async findOne(body: User) {
    const obj = await this.userModel.findOne(body)
    if (!obj) throw new BadRequestException()
    return obj
  }

  async update(user: User, newUser: updateUserDto) {
    const obj = await this.userModel.updateOne(user, newUser)
    if (!obj) throw new BadRequestException()
    return obj
  }

  async delete(user: User) {
    const obj = await this.userModel.deleteOne(user)
    if (!obj) throw new BadRequestException()
    return obj
  }
}
