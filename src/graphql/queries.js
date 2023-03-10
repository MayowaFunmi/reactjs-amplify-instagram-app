/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthUser = /* GraphQL */ `
  query GetAuthUser($id: ID!) {
    getAuthUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const listAuthUsers = /* GraphQL */ `
  query ListAuthUsers(
    $filter: ModelAuthUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
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
        post {
          id
          body
          photo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
