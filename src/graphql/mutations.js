/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthUser = /* GraphQL */ `
  mutation CreateAuthUser(
    $input: CreateAuthUserInput!
    $condition: ModelAuthUserConditionInput
  ) {
    createAuthUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthUser = /* GraphQL */ `
  mutation UpdateAuthUser(
    $input: UpdateAuthUserInput!
    $condition: ModelAuthUserConditionInput
  ) {
    updateAuthUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthUser = /* GraphQL */ `
  mutation DeleteAuthUser(
    $input: DeleteAuthUserInput!
    $condition: ModelAuthUserConditionInput
  ) {
    deleteAuthUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
