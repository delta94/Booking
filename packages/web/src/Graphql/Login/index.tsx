import * as React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter, RouteComponentProps } from 'react-router'

const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            ok
            token
        }
    }
`

interface WithLogin {
    login: any
}

interface Props {
    children: (data: WithLogin) => React.ReactNode
}

class Login extends React.PureComponent<RouteComponentProps & Props> {
    public render() {
        return (
            <Mutation mutation={loginMutation}>
                {mutate => {
                    const submit = async (email: string, password: string) => {
                        const {
                            data: {
                                login: { ok, token }
                            }
                        }: any = await mutate({ variables: { email, password } })

                        if (token && ok) {
                            localStorage.setItem('token', token)
                            this.props.history.push('/asd')
                        }
                    }

                    return this.props.children({ login: submit })
                }}
            </Mutation>
        )
    }
}

export const LoginMutation = withRouter(Login)
