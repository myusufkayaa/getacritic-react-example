import React, { useState } from 'react'
import empty from "../../../styles/empty.png"
import full from "../../../styles/full.png"
import "./rating.scss"


function getStar(value) {
    switch (value) {
        case 0:
            return empty
        case 100:
            return full
        default:
            return empty
    }
}



const Rating = (props) => {
    const [rating, setRating] = useState(0);
    var score=props.props.getascore
    var user=props.props.user;
    return (

        <div className="rating">
            <h3>RATİNG</h3>
            <hr></hr>
            {
                
                [...Array(5)].map((star,i) => {
                    const ratingValue = i + 1
                    return (
                            <label>
                            <input
                                className="radio"
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() =>
                                    setRating(ratingValue)}
                            />
                            <img className="star-img" src={ratingValue <= rating ? getStar(100) : getStar(0)} alt="" />
                        </label>
                        
                    );
                }
                )


            }
            <h4>{(rating==0 ? score : (((score*user)+rating)/(user+1)).toFixed(1) )+" User Score"}</h4>
        <p>{"Universal acclaim based on "+(rating==0 ? user : user+1 )+" Ratings"}</p>
        </div>
    )

};
export default Rating
