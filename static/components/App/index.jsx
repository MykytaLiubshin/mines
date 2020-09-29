import React from "react"
import { MuiThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import {theme} from "./styles"
import {useStyle} from './styles'
import {MineField} from "../mineField"
import { useStyles } from "./styles";


export const App = () =>
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
        <Switch>
            <Route path="/" exact >

                <MineField />
            </Route>
        </Switch>
        </MuiThemeProvider>
    </BrowserRouter>