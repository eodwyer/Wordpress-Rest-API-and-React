import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import {
//   BrowserRouter
// } from 'react-router-dom';
import Home from './routes/Home';
import PostList from './components/PostList';
import Post from './components/Post';
import './App.css';


class Header extends Component{
  render(){
    return(
      <header className='main-header'>
       <h1>Blog Posts</h1>
        <form>
          <input type='text' placeholder='Search for a post' />
          <input type='submit' value='Search' />
        </form>
        </header>
    );
  }
}




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      loading: true,
      isPost: false,
      currentPost: {}
    };
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'cats') =>{

    axios.get(`http://localhost/portfolio/scribblings/wp-json/wp/v2/posts`)
    .then(response => {
      this.setState({
        posts: response.data,
        loading: false
      });        
    })
    .catch(error => {
      console.log('Error fetching');
    });
  }

  goToPost = (id) =>{
    let post = this.state.posts.filter(function( obj ) {
      return obj.id == id;
    });

    this.setState({
      isPost: true,
      currentPost: post
    });
    
  }

  returnHome = () =>{
    this.setState({
      isPost:false,
      currentPost:{}
    });
  }

  render(){
    return(
        <div className="App">
          <Header />
          <div className='main-content'>
            {
              this.state.isPost ?
              <Post 
              post={this.state.currentPost[0]} 
              loading={this.state.loading} 
              returnHome={this.returnHome}
              />
              :  <PostList 
                posts={this.state.posts} 
                loading={this.state.loading} 
                goToPost={this.goToPost}/>
            }
              
          </div>
        </div>
    );
  }
}

export default App;


