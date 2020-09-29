import React from "react"
import Grid from "@material-ui/core/Grid";
import {Mine} from "../mines/logic/Mine";


const getGridElem = (id = 0) =>   <Grid item>
                                <Mine key={id}/>
                            </Grid>

export const MineField = () => 
{
    const a = [...Array(30*16).keys()].map(
        el => getGridElem(el)
    )
    
    return <Grid container spacing={1}>
                {
                    a
                }
            </Grid>
            }