import httpStatus from 'http-status'
import { AppError } from '../../error/AppError'
import { TUser } from './user.interface'
import { User } from './user.model'

const registerUser = async (user: TUser) => {
  if (await User.isUserExists(user?.email)) {
    throw new AppError(httpStatus.CONFLICT, 'User already created')
  }
  const result = await User.create(user)
  return result
}

const updateUserActivationStatus = async (id: string) => {
  const user = await User.findById(id)

  if (user?.deactive === true) {
    return await User.findByIdAndUpdate(
      id,
      { deactive: false },
      { new: true, runValidators: true },
    )
  }
  if (user?.deactive === false) {
    return await User.findByIdAndUpdate(
      id,
      { deactive: true },
      { new: true, runValidators: true },
    )
  }
}

export const UserService = {
  registerUser,
  updateUserActivationStatus,
}
