import React from 'react';
import PropTypes from 'prop-types';


const Post = props =>{
    if(!props.loading){
	    return(
	    	<article className="post post-content">
		      <header>
		      	<button onClick={() => {props.returnHome()}}>Return to Posts</button>
		        <h1>{props.post.title.rendered}</h1>
		      </header>
		      <main>
		      	<div className="content" dangerouslySetInnerHTML={{__html:props.post.content.rendered}} />
		      </main>
	      	</article>
	    );
	} else{
		return(
			<h2>Loading</h2>
		);
	}
}

Post.PropTypes = {
	post : PropTypes.object,
	returnHome: PropTypes.func
}

export default Post;