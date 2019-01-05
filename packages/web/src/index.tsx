import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'

import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'
import { client } from './apollo'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Routes />
            </>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
