import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  BrowserRouter
} from 'react-router-dom';
import Home from './routes/Home';
import PostList from './components/PostList';
import './App.css';


function Post(){
    return(
      <article className="post">
        <h1>Post</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse iaculis nec enim et venenatis. Fusce aliquam molestie pulvinar.</p> 
       
      </article>
    );
}

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
      loading: true
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

      console.log(this.state.posts);
        
    })
    .catch(error => {
      console.log('Error fetching');
    });
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className='main-content'>
           
            <Home posts={this.state.posts} loading={this.state.loading} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


