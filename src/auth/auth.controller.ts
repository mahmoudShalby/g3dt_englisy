import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SigninAuthDto } from './dto/signin-auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: Body) {
    return await this.authService.singup(body)
  }

  @Post('signin')
  async signin(@Body() body: SigninAuthDto) {
    return await this.authService.singin(body.username, body.password)
  }
}
