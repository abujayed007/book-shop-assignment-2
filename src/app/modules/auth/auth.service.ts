import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import { User } from '../user/user.model'
import { TLoginUser } from './auth.interface'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config'
import bcrypt from 'bcrypt'
import { verifyToken } from './auth.utils'

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExists(payload?.email)
  // console.log(user)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  if (user.deactive === true) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'User is deactived')
  }

  if (!(await User.isPasswordMatched(payload.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password not mached')
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '1d',
  })

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: '30d',
    },
  )

  return {
    accessToken,
    refreshToken,
  }
}

const changePassword = async (
  userData: JwtPayload | undefined,
  payload: {
    oldPassword: string
    newPassword: string
  },
) => {
  const user = await User.isUserExists(userData?.email)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  if (user.deactive === true) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'User is deactived')
  }

  if (!(await User.isPasswordMatched(payload?.oldPassword, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')
  }

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_round),
  )
  await User.findOneAndUpdate(
    {
      email: userData?.email,
      role: userData?.role,
    },
    {
      password: newHashedPassword,
    },
    {
      new: true,
    },
  )
  return null
}

const refreshToken = async (token: string) => {
  const decoded = verifyToken(token, config.jwt_refresh_secret as string)

  const { email } = decoded

  const user = await User.isUserExists(email)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  if (user.deactive === true) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'User is deactived')
  }

  const jwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  })

  return {
    accessToken,
  }
}

export const AuthService = {
  loginUser,
  changePassword,
  refreshToken,
}
