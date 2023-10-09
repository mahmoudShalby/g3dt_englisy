import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

export enum UserRole {
  ADMIN,
  TEACHER,
  STUDENT,
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  username: string

  @Prop({ required: true })
  firstName: string

  @Prop()
  lastName: string

  @Prop({ required: true })
  password: string

  @Prop({ default: UserRole.STUDENT })
  role: UserRole
}

export const UserSchema = SchemaFactory.createForClass(User)
