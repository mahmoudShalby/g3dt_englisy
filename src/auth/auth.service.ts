import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types as MongooseTypes } from 'mongoose'
import { User } from '../users/schemas/user.schema'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async generateJWTPayload(userId: MongooseTypes.ObjectId, username: string) {
    const payload = { sub: userId, username: username }
    return { access_token: await this.jwtService.signAsync(payload) }
  }

  async singup(body: Body) {
    // create user
    const user = await this.userModel.create(body)
    if (!user) throw new UnauthorizedException('bad request.')

    // generate JWT
    return this.generateJWTPayload(user._id, user.username)
  }

  async singin(username: string, pass: string) {
    // get user
    const user = await this.userModel.findOne({ username })
    if (user?.password !== pass) throw new UnauthorizedException()

    // generate JWT
    return this.generateJWTPayload(user._id, user.username)
  }
}
