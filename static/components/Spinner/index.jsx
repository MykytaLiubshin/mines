import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';



export const Spinner = () => 
{
    return (
    <div style = {{
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        marginLeft: "45vw"
    }}>
        <CircularProgress size={100} />
    </div>
    )
}