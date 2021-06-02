import React from 'react';
import {Button, Grid} from '@material-ui/core'

export default function ButtonListComponent(){

    const render = () => {
        let item:any[] = []
        for(let i = 0; i < 3; i++){
            item.push(<Button key = {i} onClick={() => {console.log(`Button ${i}`)}}>{`Button ${i}`}</Button>)
        }
        return item
    }
    return(
        <Grid container direction = "row">
            {render()}
        </Grid>
    )
}
