import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



 
export class TimerBar extends Component {
    constructor (props){
        super(props);
        
        this.timer = this.timer.bind(this)
        this.pad = this.pad.bind(this)
        this.useStyles = this.useStyles.bind(this)
        this.state = {
            began: Date.now(),
            time: "00:00",
            classes: this.useStyles()
        }       
        
    }



    useStyles() { return makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          alignItems: 'center',
        },
      }))};
    pad (n, width = 2, z = '0') {
        n += ''
        return n.length > width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    timer () {
        setInterval(
            () => {
                const seconds = Math.floor((Date.now() - this.state.began)/1000)  % 60
                const minutes = Math.floor(Math.round(((Date.now() - this.state.began)/1000)) / 60 )
                this.setState({
                    time: `${this.pad(minutes)}:${this.pad(seconds)}`
                })
            }, 1000
        )
    }
    render() {
        this.timer()
        return (
            <div className={this.state.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={this.state.classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" styles={
                        {
                            flexGrow: 1,
                            alignItems: 'center'
                        }
                    }>
                        Mines {this.state.time}
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
        
    }
}