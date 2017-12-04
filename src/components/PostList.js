import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const PostList = props => { 

  const results = props.posts;

  let rows = [];
  for (var i=0; i < results.length; i++) {
    const theTitle=results[i].title.rendered.toLowerCase();
    const searchTerm = props.searchTerm.toLowerCase();
    
    if(theTitle.includes(searchTerm) || searchTerm === '' ){
      rows.push(<Card goToPost={props.goToPost} post={results[i]} key={results[i].id} />);
    }
  }


  if(rows.length){
    return (
      <div className="postsList">
          {rows}
      </div>
    );
  } else if(!props.loading){
    return(
      <div className="emptyList">
        <div className='post'>
          <h2>No posts found</h2>
        </div>
      </div>
    );
  }else{
    return(
      <div className="emptyList">
        <div className='post'>
          <h2>Loading</h2>
        </div>
      </div>
    );
  }
  
 
}

PostList.PropTypes = {
  posts : PropTypes.object.isRequired,
  goToPost: PropTypes.func.isRequired
}

export default PostList;