import React from 'react';
import PropTypes from 'prop-types';


const Header = props => {
  return(
    <header className='main-header'>
     <h1>Blog Posts</h1>
      <form>
        <input 
          type='text' 
          placeholder='Enter a post name to search'
          value={props.searchTerm}
          onChange={props.handleSearchInput}
          />
      </form>
    </header>
  );
}

Header.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired
}

export default Header;