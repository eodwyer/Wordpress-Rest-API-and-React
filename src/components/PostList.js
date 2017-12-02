import React from 'react';
import Card from './Card';


const PostList = props => { 

  const results = props.posts;

  let rows = [];
    for (var i=0; i < results.length; i++) {
        rows.push(<Card post={results[i]} key={i} />);
  }
  return (
    <div className="postsList">
      {rows}
    </div>
  );
 
}

export default PostList;