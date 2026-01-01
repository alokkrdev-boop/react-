function hndlsubmit (event){
    event.preventDefault();
    console.log("form was submitted")

}


function Form () {
    return (
        <form > 
            <input placeholder="write something" />
            <button onClick={hndlsubmit}>Submit</button>
        </form>
    )
}

export default Form