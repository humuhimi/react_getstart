import React from 'react'

function ContactCard(props) {
    console.log(props)
    return ( 
        <div className="contact-card">
            <img src= {props.imgURL} alt="cat_pic" />
            <h3>{props.name}</h3>
            <p>phone : {props.phone}</p>
            <p>Email : {props.email}</p>
        </div>
    )
}

export default ContactCard
