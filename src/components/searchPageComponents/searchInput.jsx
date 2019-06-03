import React from 'react';
// search icon
import Lupa from '../../images/lupa.svg';
// styles
import './styles/searchInput.css';

const SearchInput = props => {
    return(
        <div className="searchInput-container">
            <div>
                <input 
                    type="text" 
                    className="inputSearch-input"
                    placeholder="search your image"
                    onKeyUp={props.onSearch}
                    id='inputSearch'
                    />
            </div>
            <div className="lupa-container" onClick={props.clickSearch}>
                <img src={Lupa} alt="buscar imagen"/>
            </div>
        </div>
    )
}

export default SearchInput;