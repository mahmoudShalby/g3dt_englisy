import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { JwtMiddleware } from './common/middleware/jwt.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.use(JwtMiddleware)
  await app.listen(4000)
}
bootstrap()
