import React from 'react';
import PropTypes from 'prop-types';


function Card(props){
  const excerpt = props.post.excerpt.rendered;
  const id = props.post.id;

  return(
    <article className="post post-excerpt" onClick={() =>{props.goToPost(id)}}>
      <header>
        <h1>{props.post.title.rendered}</h1>
      </header>
      <main>
        <div className="excerpt" dangerouslySetInnerHTML={{__html:excerpt}} />
      </main>
    </article>
  );
}

Card.PropTypes = {
  posts : PropTypes.object.isRequired,
  goToPost: PropTypes.func.isRequired
}

export default Card;