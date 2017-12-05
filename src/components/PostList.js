import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
       <ReactCSSTransitionGroup 
          component="ul"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          {rows}
          </ReactCSSTransitionGroup>
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
  loading: PropTypes.bool.isRequired,
  goToPost: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default PostList;