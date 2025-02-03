import validateRequest from '../../../middleware/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'
import { Router } from 'express'
import auth from '../../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
)
router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthController.changePassword,
)
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthController.refreshToken,
)

export const AuthRoutes = router
