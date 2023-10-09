import { UserRole } from "../schemas/user.schema"

export class createUserDto {
  username: string
  firstName: string
  lastName: string
  password: string
  role: UserRole
}
