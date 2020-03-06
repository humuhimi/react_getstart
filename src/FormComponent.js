import React from 'react';

function FormComponent(props) {
    return( 
        <main>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                />
                <br />

                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange= {props.handleChange}
                    placeholder="Last Name"
                />
                <br />

                <input
                    name="age"
                    value={props.data.age}
                    onChange= {props.handleChange}
                    placeholder="age"
                />
                <br />
                <label>
                    <input 
                        type= "radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female" }
                        onChange={props.handleChange}
                    />Female
                </label>

                <label>
                    <input 
                        type= "radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male" }
                        onChange={props.handleChange}
                    />Male
                </label>

                <br />

                    <select value={props.data.destination} name="destination" onChange={props.handleChange}>
                        <option value="">--目的地を選んでください--</option>
                        <option value="tokyo">Tokyo</option>
                        <option value="hokkaido">Hokkaido</option>
                        <option value="nagoya">Nagoya</option>
                        <option value="osaka">Osaka</option>
                    </select>

                <br />

                <label>
                    <input 
                        type= "checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    /> are you Vegan?
                </label>

                <br />

                <label>
                    <input 
                        type= "checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    /> are you Kosher?
                </label>

                <br />

                <label>
                    <input 
                        type= "checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                    /> are you LactoseFree?
                </label>

                <br />

                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Enter information</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restriction</p>
            <p>vegan : {props.data.isVegan ? "Yes" : "No"}</p>
            <p>kosher : {props.data.isKosher ? "Yes" : "No"}</p>
            <p>lactose free : {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent