import React from 'react'
import { render } from 'react-dom'

function Conditional(props){
    //condition ? statement if true : statement if false
    console.log(props.isLoading)
    return(
        <div>
        <h1>nav-bar</h1>
        <h1>now it's rendering!</h1>
        <h1>Footer</h1>
        </div>
    
    // if (props.isLoading === true){
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //     return (<h1>now it's rendering!</h1>)
    // }
    )
}

export default Conditional