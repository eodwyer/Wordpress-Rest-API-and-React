import React, { Component } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import Post from './components/Post';
import './App.css';


const Header = props => {
  return(
    <header className='main-header'>
     <h1>Blog Posts</h1>
      <form>
        <input 
          type='text' 
          placeholder='Enter a post name to search'
          value={props.searchTerm}
          onChange={props.handleSearchInput}
          />
      </form>
    </header>
  );
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      loading: true,
      isPost: false,
      currentPost: {},
      searchTerm: '',
    };
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'cats') =>{

    axios.get(`http://eoinodwyer.com/wp-json/wp/v2/posts/?_embed`
    )
  
    .then(response => {
      this.setState({
        posts: response.data,
        loading: false
      });        
    })
    .catch(error => {
      console.log('Error fetching: ' + error);
    });
  }

  goToPost = (id) =>{
    let post = this.state.posts.filter(function( obj ) {
      return obj.id === id;
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

  handleSearchInput = (e) =>{
    this.setState({ searchTerm: e.target.value });
  }

  render(){
    return(
        <div className="App">
          <Header 
            searchTerm={this.state.searchTerm}
            handleSearchInput={this.handleSearchInput}
          />
          <main className='main-content'>
            {
              /*render Post if post selected. Postlist otherwise */
              this.state.isPost ?
              <Post 
              post={this.state.currentPost[0]} 
              loading={this.state.loading} 
              returnHome={this.returnHome}
              />
              :  <PostList 
                  posts={this.state.posts} 
                  loading={this.state.loading} 
                  goToPost={this.goToPost}
                  searchTerm={this.state.searchTerm}
                  />
            }  
          </main>
        </div>
    );
  }
}

export default App;


