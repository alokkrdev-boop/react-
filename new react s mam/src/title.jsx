import "./title.css";

function Title({title, price}) {
    return (
        <div id="Title">
            <h1 id="maggie">{title}</h1>
            <p> Price ={price}</p>
        </div>
    )
}

export default Title