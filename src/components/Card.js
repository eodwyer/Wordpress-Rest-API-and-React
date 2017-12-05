import React from 'react';
import PropTypes from 'prop-types';


function Card(props){
  const excerpt = props.post.excerpt.rendered;
  const id = props.post.id;

  return(
    <article className="post post-excerpt" onClick={() =>{props.goToPost(id)}}>
      <header>
        <h1>{props.post.title.rendered}</h1>
        <img src={props.post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url} alt='' />
      </header>
      <main>
        <div className="excerpt" dangerouslySetInnerHTML={{__html:excerpt}} />
        <a>Read More</a>
      </main>
    </article>
  );
}

Card.PropTypes = {
  posts : PropTypes.object.isRequired,
  goToPost: PropTypes.func.isRequired
}

export default Card;