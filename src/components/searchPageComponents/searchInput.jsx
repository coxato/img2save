import React from 'react';
// search icon
import Lupa from '../../images/lupa.svg';
// styles
import './styles/searchInput.css';

const SearchInput = props => {
    return(
        <div className="searchInput-container">
            <input 
                type="text" 
                className="inputSearch-input"
                placeholder="search your image"
                onKeyDown={props.searchByInput}
                />
            <div className="lupa-container">
                <img src={Lupa} alt="buscar imagen"/>
            </div>
        </div>
    )
}

export default SearchInput;