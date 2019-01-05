import * as React from 'react'

import { LoginMutation } from '../../../../Graphql'
import { Form } from './Form'

export const LoginForm = () => <LoginMutation>{({ login }: any) => <Form submit={login} />}</LoginMutation>
