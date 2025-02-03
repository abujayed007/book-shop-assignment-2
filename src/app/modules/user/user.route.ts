import { Router } from 'express'
import { userController } from './user.controller'
import validateRequest from '../../../middleware/validateRequest'
import { UserValidation } from './user.validation'
import { USER_ROLE } from './user.constant'
import auth from '../../../middleware/auth'

const router = Router()

router.post(
  '/register',
  validateRequest(UserValidation.userRegisterValidationSchema),
  userController.registerUser,
)
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  userController.updateUserActivationStatus,
)

export const userRoutes = router
