import React from "react"
import { MuiThemeProvider } from "@material-ui/core";
import { Route, Switch, Redirect } from "react-router"
import { BrowserRouter } from "react-router-dom"
import {theme} from "./styles"

import {MineField} from "../mineField"
import {TimerBar} from "../timer_bar"


export const App = () =>
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
        <Switch>
            {/* <Route path="/" exact>
                <Redirect to="/mines99" />
            </Route> */}
            <Route path="/" exact>
                <TimerBar />
                <MineField />
            </Route>
        </Switch>
        </MuiThemeProvider>
    </BrowserRouter>