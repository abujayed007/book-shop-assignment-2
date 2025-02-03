import httpStatus from 'http-status'
import { UserService } from './user.service'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'

const registerUser = catchAsync(async (req, res) => {
  const result = await UserService.registerUser(req.body)

  //   try {
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User activation updated',
    data: result,
  })
})

const updateUserActivationStatus = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await UserService.updateUserActivationStatus(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deactived ',
    data: result,
  })
})

export const userController = {
  registerUser,
  updateUserActivationStatus,
}
