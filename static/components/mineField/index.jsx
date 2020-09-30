import React from "react"
import Grid from "@material-ui/core/Grid";
import {Mine} from "../mines/logic/Mine";
import {Spinner} from "../Spinner"

const getGridElem = (id = 0) =>   <Grid item key={id}>
                                <Mine key={id}/>
                            </Grid>

const getMineField =() => [...Array(30*16).keys()].map(
    el => getGridElem(el)
)

export const MineField = () => 
{
    const [respond, setRespond] =  React.useState(Spinner)
    
    React.useEffect(() => {
        setTimeout(() => {setRespond(getMineField())}, 500)
      }, [])
    
    return <Grid container spacing={1} style= {{marginTop: "1vw"}}>
            {respond}
            </Grid>




}