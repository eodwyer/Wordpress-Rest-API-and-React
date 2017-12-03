import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PostList = props => { 

  const results = props.posts;

  let rows = [];
    for (var i=0; i < results.length; i++) {
        rows.push(<Card goToPost={props.goToPost} post={results[i]} key={results[i].id} />);
  }

  return (
    <div className="postsList">
      
        {rows}

    </div>
  );
 
}

PostList.PropTypes = {
  posts : PropTypes.object.isRequired,
  goToPost: PropTypes.func.isRequired
}

export default PostList;