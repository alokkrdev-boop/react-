
import "./title.css";

function Title({ title, price }) {
    let style = {backgroundColor: price > 30000 ? "yellow" : "red"};
    if (price > 30000) {
        return (
            <div id="Title" style={style}>
                <h1 id="maggie">{title}</h1>
                <p>Price = {price}</p>
                <h6>Discount of 5%</h6>
            </div>
        );
    } else {
        return (
            <div id="Title">
                <h1 id="maggie">{title}</h1>
                <p>Price = {price}</p>
            </div>
        );
    }
}

export default Title;
