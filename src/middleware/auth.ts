import jwt, { JwtPayload } from 'jsonwebtoken'
import httpStatus from 'http-status'
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../app/utils/catchAsync'
import { AppError } from '../app/error/AppError'
import config from '../app/config'
import { TUserRole } from '../app/modules/user/user.interface'
import { User } from '../app/modules/user/user.model'

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload
}
const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(
    async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
      const token = req.headers.authorization

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized user')
      }

      let decoded
      try {
        decoded = jwt.verify(
          token,
          config.jwt_access_secret as string,
        ) as JwtPayload
      } catch (err) {
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized')
        }
      }
      // console.log(decoded)

      const { email, role } = decoded as JwtPayload

      const user = await User.isUserExists(email)

      if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found')
      }

      if (user?.deactive === true) {
        throw new AppError(httpStatus.NOT_ACCEPTABLE, 'User is deactived')
      }

      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized user')
      }
      // console.log(decoded)
      req.user = decoded as JwtPayload
      next()
    },
  )
}

export default auth
