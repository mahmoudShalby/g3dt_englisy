import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SigninDto } from './dto/signin.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: Body) {
    return await this.authService.singup(body)
  }

  @Post('signin')
  async signin(@Body() body: SigninDto) {
    return await this.authService.singin(body.username, body.password)
  }
}
