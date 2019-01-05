import * as React from 'react'

import { Title, Subtitle, Input } from '../../../../Components'
import { Shadow, LoginButton } from './style'

export const Form = ({ submit }: any) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div>
            <Title>We are aroma</Title>
            <Subtitle>Welcome back, please login to your account</Subtitle>

            <Shadow>
                <Input onChange={setEmail} type="text" label="Email Address" noBorderBottom />
                <Input onChange={setPassword} type="password" label="Password" />
            </Shadow>

            <LoginButton onClick={async () => submit(email, password)}>Login</LoginButton>
        </div>
    )
}
