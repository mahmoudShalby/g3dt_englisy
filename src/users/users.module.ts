import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { User, UserSchema } from './schemas/user.schema'

@Module({
  imports: [],
  providers: [UsersService],
})
export class UsersModule {}
