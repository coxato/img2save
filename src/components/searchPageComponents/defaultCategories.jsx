import React from 'react';

import './styles/defaultCategories.css'

const DefaultCategories = props => {
    return(
        <div className="categories-container center">

            <div className="categories-parrafos center" onClick={props.handleCategoryClick}>
                <p className="font-small family-gill">adventure</p>
                <p className="font-small family-gill">cars</p>
                <p className="font-small family-gill">cities</p>
                <p className="font-small family-gill">cute</p>
                <p className="font-small family-gill">landscapes</p>
                <p className="font-small family-gill">lamborghini</p>
                <p className="font-small family-gill">love</p>
                <p className="font-small family-gill">travel</p>
                <p className="font-small family-gill">happy</p>
                <p className="font-small family-gill">wallpapers</p>
            </div>
        </div>
    )
}

export default DefaultCategories;