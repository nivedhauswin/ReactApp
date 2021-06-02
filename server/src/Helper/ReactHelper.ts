import React from 'react'
import * as  ReactDOMServer from 'react-dom/server'
import ButtonList from '../../userComponent/ButtonList'

export function ExportReactComponent1(){
    var htmlInput = ReactDOMServer.renderToStaticMarkup(React.createElement(ButtonList))
    console.log(htmlInput)
    return htmlInput
}

export function ExportReactComponent2(){
    var htmlInput = `<h1>The script element</h1>
        <p id="demo"></p>
        <script>
            document.getElementById("demo").innerHTML = "Hello JavaScript!";
        </script> 
    `;
    return htmlInput
}
