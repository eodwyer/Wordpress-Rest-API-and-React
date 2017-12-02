import React from 'react';
import Excerpt from './Excerpt'

function Card(props){
  const excerpt = props.post.excerpt.rendered;
  return(
    <article className="post-excerpt">
      <header>
        <h1>{props.post.title.rendered}</h1>
      </header>
      <main>
        <div className="excerpt" dangerouslySetInnerHTML={{__html:excerpt}} />
      </main>
    </article>
  );
}

export default Card;