import React from 'react';
import PostList from '../components/PostList';
import {
  Route,
  NavLink,
  Redirect 
} from 'react-router-dom';

const Home = (props) => (
	<div className='home'>
		{
	        (props.loading) 
	        ? <h2>Loading..</h2> 
	        : <PostList posts={props.posts} loading={props.loading} />
	    }
	</div>
);	

export default Home;		