import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listUsers } from '../graphql/queries';

const Comments = ({ com, index }) => {
  console.log('com = ', com);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userDetails = async (id) => {
      const users = await API.graphql(graphqlOperation(listUsers));
      const usersArr = users.data.listUsers.items;
      for (let i = 0; i < usersArr.length; i++) {
        if (usersArr[i].userId === id) {
          setUser(usersArr[i]);
          break;
        } //else {
        //   notifyError('user not found!');
        // }
      }
    };
    userDetails(com.userID);
  }, [com.userID]);
  return (
    <p className="comm" key={index}>
      <span className="commenter" style={{ fontWeight: 'bolder' }}>
        {user.username}{' '}
      </span>
      <span className="commentText">{com.text}</span>
    </p>
  );
};

export default Comments;
