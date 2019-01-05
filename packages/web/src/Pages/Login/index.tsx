import * as React from 'react'

import { LoginForm } from './Components/LoginForm'
import { Layout, Left, Right } from './style'

export const LoginPage = () => (
    <Layout>
        <Left>
            <LoginForm />
        </Left>

        <Right>
            <p>second half</p>
        </Right>
    </Layout>
)

export default LoginPage
