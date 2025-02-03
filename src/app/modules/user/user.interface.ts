/* eslint-disable no-unused-vars */
import { Document, Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export type TUserRole = keyof typeof USER_ROLE

export interface TUser extends Document {
  name: string
  email: string
  role: 'admin' | 'user'
  deactive: boolean
  password: string
  comparePassword(enteredPassword: string): Promise<boolean>
}

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}
