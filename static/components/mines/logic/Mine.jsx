import React, { Component } from 'react'
import {Card} from '@material-ui/core'
import {theme, useStyles} from "./../../App/styles"
import {grey} from "@material-ui/core/colors"
import { zIndex } from 'material-ui/styles';


export class Mine extends Component {
    constructor (props){
        super(props);
        this.state = {
            isMine: false,
            minesNear: 0,
            closed: true,
            backgroundColor: theme.palette.primary.main
        }       
        this.base_color = theme.palette.primary.main
        this.open_color = theme.palette.secondary.main
        this.hover_color = theme.palette.primary.hover
        this.size = 100/30 - 0.79 + "vw"
        this.onClick = this.onClick.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
        this.get_styles_mine = this.get_styles_mine.bind(this)
        this.get_styles_text = this.get_styles_text.bind(this)
        
    }
    onClick()
    {
        if( this.state.isMine == true )
            alert("GAME OVER")
        else
            this.setState(
            {
                closed: false,
                backgroundColor: this.open_color,
            })
    }
    onMouseOver()
    {
        if(this.state.closed)
            this.setState(
                {
                    backgroundColor: this.hover_color,
                })
    }
    onMouseOut()
    {
        if(this.state.closed)
            this.setState(
                {
                    backgroundColor: this.base_color,
                })
    }
    get_number()
    {
        return this.state.closed ? "" :this.state.minesNear;
    }

    get_styles_mine() {
        return {
            width:  this.size,
            height: this.size,
            backgroundColor: this.state.backgroundColor,
            textMargin: this.size / 2
        }
    }

    get_styles_text () {
        return {
            textAlign: "center",
            fontFamily: "sans-serif",
            margin: this.size / 1.5,
            color: grey[600],
            fontSize: this.size / 2
        }
    }
    render() {
        return <Card
        onClick = {this.onClick}
        onMouseOver = {this.onMouseOver}
        onMouseOut = {this.onMouseOut}
        style =  {this.get_styles_mine()}
        >
            <h4
            style={this.get_styles_text()}
            >
            {this.get_number()}
            </h4>
        </Card>
    }
}
