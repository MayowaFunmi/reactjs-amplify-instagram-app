/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthUser = /* GraphQL */ `
  subscription OnCreateAuthUser($filter: ModelSubscriptionAuthUserFilterInput) {
    onCreateAuthUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuthUser = /* GraphQL */ `
  subscription OnUpdateAuthUser($filter: ModelSubscriptionAuthUserFilterInput) {
    onUpdateAuthUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuthUser = /* GraphQL */ `
  subscription OnDeleteAuthUser($filter: ModelSubscriptionAuthUserFilterInput) {
    onDeleteAuthUser(filter: $filter) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      followers {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      followings {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      photo
      authUser {
        id
        username
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
      postLikesId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      followers {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      followings {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      photo
      authUser {
        id
        username
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
      postLikesId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      followers {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      followings {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      photo
      authUser {
        id
        username
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
      postLikesId
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      body
      photo
      likes {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      comments {
        items {
          id
          text
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      author {
        id
        username
        email
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        photo
        authUser {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        postLikesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      body
      photo
      likes {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      comments {
        items {
          id
          text
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      author {
        id
        username
        email
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        photo
        authUser {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        postLikesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      body
      photo
      likes {
        items {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        nextToken
      }
      comments {
        items {
          id
          text
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      author {
        id
        username
        email
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        photo
        authUser {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        postLikesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      text
      author {
        id
        username
        email
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        photo
        authUser {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        postLikesId
      }
      post {
        id
        body
        photo
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        author {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      text
      author {
        id
        username
        email
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        photo
        authUser {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        postLikesId
      }
      post {
        id
        body
        photo
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        author {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      text
      author {
        id
        username
        email
        followers {
          nextToken
        }
        followings {
          nextToken
        }
        photo
        authUser {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        postLikesId
      }
      post {
        id
        body
        photo
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        author {
          id
          username
          email
          photo
          createdAt
          updatedAt
          userFollowersId
          userFollowingsId
          postLikesId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
