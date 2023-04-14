import React, { useState } from 'react'
import './SignUp.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts, listUsers } from '../graphql/queries';
import Post from './Post';
import { Link } from 'react-router-dom';

const SearchPosts = ({sub}) => {
    const [word, setWord] = useState('')
    const [user, setUser] = useState('')
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState(false);
    const [searchUser, setSearchUser] = useState(false);
    const [userFound, setUserFound] = useState({})

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
        setSearchUser(false)
        setWord('')
      };

      const handleUser = async(param) => {
        const getUser = await API.graphql(graphqlOperation(listUsers))
        const userData = getUser.data.listUsers.items
        for (let i=0; i<userData.length; i++) {
            if (userData[i].username === param) {
                setUserFound(userData[i])
                setSearchUser(true)
                setSearch(false)
                break;
            }
        }
      }

    return (
        <>
          <p><strong>{posts.length} posts found</strong></p>
            {search ? (
                <div className="home">
                {/* card */}
                {posts.map((post) => {
                  return <Post post={post} sub={sub} />;
                })}
              </div>
            ) : (
                searchUser ? (
                  <h5 style={{cursor: 'pointer', color:"blue"}}>
                    <Link to={`/profile/${userFound.userId}`}>
                      Show Details for {userFound.username}
                    </Link>
                  </h5>
                ) : (
                  <>
                    <div className="signUp">
                      <div className="form-container">
                        <div className="form">
                          <hr />
                          <p className="loginPara">
                            Search Tags and Posts
                          </p>
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

                        <hr />
                        <h3>OR:</h3>
                        <div className="form">
                          <hr />
                          <p className="loginPara">
                            Search Users
                          </p>
                          <input
                            type="text"
                            name="code"
                            placeholder="Enter the username of a user"
                            value={user}
                            onInput={(e) => {
                              setUser(e.target.value);
                            }}
                          />
                        </div>
           
                        <input
                          type="submit"
                          id="submit-btn"
                          value="Search"
                          onClick={() => handleUser(user)}
                        />
                      </div>
                    </div>
                    </>
                )
            )}
        </>
      );
}

export default SearchPosts