/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  // OLHAR ISSO
  router.post('/signup', adaptRoute(makeSignUpController()))
}
