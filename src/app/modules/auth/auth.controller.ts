import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthService } from './auth.service'
import { AuthenticatedRequest } from '../../../middleware/auth'
import config from '../../config'

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body)

  const { refreshToken, accessToken } = result
  res.cookie('refreshToken', refreshToken, {
    secure: config.node_enviorment === 'production',
    httpOnly: true,
  })
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successfully',
    data: { accessToken },
  })
})

const changePassword = catchAsync(async (req: AuthenticatedRequest, res) => {
  // console.log(, req.body)
  const { ...passwordData } = req.body

  const result = await AuthService.changePassword(req.user, passwordData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password changed successfully',
    data: result,
  })
})

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies
  const result = await AuthService.refreshToken(refreshToken)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrived successfully',
    data: result,
  })
})

export const AuthController = {
  loginUser,
  changePassword,
  refreshToken,
}
