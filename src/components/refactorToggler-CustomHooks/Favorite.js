import React from "react"
import useToggler from "./useToggler"

function Favorite(props) {
    const [isFavorited, toggle] = useToggler(false)
    
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span 
                    onClick={toggle}
                >
                    {isFavorited ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    ) 
}

export default Favorite
