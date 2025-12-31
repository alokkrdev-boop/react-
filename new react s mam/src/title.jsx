
import "./title.css";

function Title({ title, price }) {
    if (price > 30000) {
        return (
            <div id="Title">
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
