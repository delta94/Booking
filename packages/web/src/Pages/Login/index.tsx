import * as React from 'react'

import { Layout, Left, Right, Shadow, LoginButton } from './style'
import { Title } from '../../Components/Title'
import { Subtitle } from '../../Components/Subtitle'
import { Input } from '../../Components/Input'
import { Row } from '../../Components/Row'

export const LoginPage = () => (
    <Layout>
        <Left>
            <div>
                <Title>We are aroma</Title>
                <Subtitle>Welcome back, please login to your account</Subtitle>

                <Shadow>
                    <Input type="text" label="Email Address" noBorderBottom />
                    <Input type="password" label="Password" />
                </Shadow>

                <Row>
                    <LoginButton>Login</LoginButton>
                </Row>
            </div>
        </Left>

        <Right>
            <p>second half</p>
        </Right>
    </Layout>
)

export default LoginPage
