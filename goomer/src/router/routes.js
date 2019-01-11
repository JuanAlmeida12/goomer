import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
                <Route path="*" component={() => (<div> Erro </div>)} />
            </Switch>
        </BrowserRouter>
    )
}