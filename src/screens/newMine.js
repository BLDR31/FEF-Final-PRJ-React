import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Navbar from '../components/Navbar';

class Mine1 extends Component {

    // onHandleChange = (e) => {
    //   let {dispatch} = this.props;
    //   dispatch({type: 'USERNAME', username: e.target.value})
    // }

    onUserGet =() => {
      let {dispatch} = this.props;
      let {username} = this.props;
      fetch(`https://api.github.com/users/BLDR31`)
        .then(res =>{
          return res.json()
        })
        .then(res => {
          dispatch({type: 'PROFILE', userprofile: res})
        })
    }

  onRepoFetch = () => {
    let {dispatch} = this.props;
    let {repos_url} = this.props.userprofile;

    fetch(repos_url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch({type: 'REPOS', repos: res})

      })
  }


  render() {
    let {userprofile} = this.props;
    let repos = this.props.repos.map((repo, i) => {
      return <li key={i}>{repo.name}</li>
    })
    return (
        <div className="App">
          <Navbar title="Search" />
          <h1>{this.props.username}</h1>
          <button onClick={this.onUserGet}>Get BLDR31s profile</button>
          <hr/>
          <h3>{userprofile.login}</h3>
          <img src={userprofile.avatar_url} alt=""/>
          <hr/>
          <button onClick={this.onRepoFetch}>Fetch Repos</button>
          {repos}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        userprofile: state.userprofile,
        repos: state.repos
    }
}
export default connect(mapStateToProps)(Mine1);
