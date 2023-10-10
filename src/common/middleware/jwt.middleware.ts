import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // const body = req.body
    console.log(`body: ${req.body}`)
    next()

    // // get data from token
    // const { id, username }: authJWTPayload = await this.jwtService.verifyAsync(
    //   body.token,
    //   { secret: process.env.JWT_SECRET },
    // )

    // // get user by jwt data
    // const user = await this.userModel.findOne({ _id: id, username }).select('-password')
    // if (!user) throw new UnauthorizedException()
  }
}
