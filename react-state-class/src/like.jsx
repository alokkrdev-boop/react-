import { useState } from "react";

function LikeBtn() {

    let [Isliked, setIsliked] = useState(false)
    let togglelike = () => {
        let newVal = !Isliked;
        setIsliked(!Isliked);
    }
    let click = () => {
        console.log("clicked");
    }
    return (
        <div>
            <p onClick={togglelike}>
                {Isliked ? (
                    <i className="fa-solid fa-heart"></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}

            </p>
        </div>
    )

}

export { LikeBtn }