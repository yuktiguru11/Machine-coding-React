import React, { useState } from 'react';
import './Rating.css';

const Rating = (props) => {
    const emptyIcon =  '/icons/stars/empty.svg';
    const filledIcon =  '/icons/stars/filled.svg';
    const halfFilledIcon =  '/icons/stars/half.svg';
    
    const[hoveredIndex, setHoveredIndex] = useState(-1);
    // Utility function to calculate if the mouse event happened on the left side of the target or the right side.
    const isLessThanHalf = (event) => {
        const {target} = event;
        const boundingClientRect = target.getBoundingClientRect();
        let mouseAt = event.clientX - boundingClientRect.left;  
        mouseAt = Math.round(Math.abs(mouseAt));
        return mouseAt <= boundingClientRect.width / 2;
    };

    const handleMouseHover = (index)=>{
        setHoveredIndex(index);
    }

    const handleMouseLeave = ()=>{
        setHoveredIndex(-1);
    }

    const renderSymbol = () => {
        return (
            <>
            <div className='star-rating'>
                {[...Array(5)].map((index)=>(
                    <img key= {index}
                        src={hoveredIndex > -1  ? filledIcon : emptyIcon}
                    className="rating-image"
                    data-testid="rating-icon"
                    alt="Rate"
                    onMouseEnter={()=>(
                        setHoveredIndex(index)
                    )}
                    onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
            
            </>
        )
    }

    return (
        <div
            tabIndex="0"
            className="star-rating"
            data-testid="star-rating-container"
        >
            {
                renderSymbol()
            }
        </div>
    )
};


export default Rating;