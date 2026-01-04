import { useState } from "react"

export default function Form() {

    let [fullName ,setFullName]= useState("");
    let handleNameChange = (event) => {
        console.log(event.target.value)
        setFullName (event.target.value)
    }
    return(
        <form>
            <label htmlFor="username"> Full name</label>
            <input placeholder="enter full name" type="text" value={fullName} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    )
}