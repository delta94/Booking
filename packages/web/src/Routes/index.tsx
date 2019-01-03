import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const LazyLoginPage = React.lazy(() => import('../Pages/Login'))

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <React.Suspense fallback={<h1>Loading!!!</h1>}>
                <Route exact path="/" component={LazyLoginPage} />
            </React.Suspense>
        </Switch>
    </BrowserRouter>
)
