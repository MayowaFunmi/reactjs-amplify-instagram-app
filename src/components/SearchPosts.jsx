import React, { useState } from 'react'
import './SignUp.css';
import logo from '../images/logo.jpeg';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';
import Post from './Post';

const SearchPosts = ({sub}) => {
    const [word, setWord] = useState('')
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState(false);

    const handleSearch = async (param) => {
        const getPosts = await API.graphql(graphqlOperation(listPosts));
        const postData = getPosts.data.listPosts.items;
        var x = []
        for (let i=0; i<postData.length; i++) {
            if (postData[i].body.includes(param)) {
                x.push(postData[i])
            }
        }
        //console.log('x = ', x)
        //setData(x)
        const sortedPosts = x.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
        setSearch(true)
        setWord('')
        console.log('posts =', posts)
      };

    return (
        <>
            {posts.length} posts found
            {search ? (
                <div className="home">
                {/* card */}
                {posts.map((post) => {
                  return <Post post={post} sub={sub} />;
                })}
              </div>
            ) : (
                <div className="signUp">
                 <div className="form-container">
                   <div className="form">
                     <img className="signUpLogo" src={logo} alt="" />
                     <p className="loginPara">
                      Search Page
                     </p>
                     <div>
                       <input
                         type="text"
                         name="code"
                         placeholder="Enter a word or phrase to search ..."
                         value={word}
                         onInput={(e) => {
                           setWord(e.target.value);
                         }}
                       />
                     </div>
           
                     <input
                       type="submit"
                       id="submit-btn"
                       value="Search"
                       onClick={() => handleSearch(word)}
                     />
                   </div>
                 </div>
               </div>
            )}
        </>
      );
}

export default SearchPosts