import React from 'react';
import {Grid, Button} from '@material-ui/core'

export default function App(){

    const [reactComp, setReactComp] = React.useState<string>("")
    const [reactComp2, setReactComp2] = React.useState<string>("")

    React.useEffect(()=>{
        fetch("http://localhost:8081/api/react/template1").then(res => (res.text())).then(result => setReactComp(result))
        fetch("http://localhost:8081/api/react/template2").then(res => (res.text())).then(result => setReactComp2(result))
    },[])

    return(
        <Grid>
            <Grid container direction="column">
                <Button onClick = {() => {console.log("Button 1")}}>Button 1</Button>
                <Button onClick = {() => {console.log("Button 2")}}>Button 2</Button>
                <Button onClick = {() => {console.log("Button 3")}}>Button 3</Button>
            </Grid>
            <div dangerouslySetInnerHTML={{ __html: reactComp}}/>
            <div dangerouslySetInnerHTML={{ __html: reactComp2}}/>
            <iframe src = "http://localhost:8081/api/react/template1"/>
            <iframe src = "http://localhost:8081/api/react/template2"/>
        </Grid>             
    );
}