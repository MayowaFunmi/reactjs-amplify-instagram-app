/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      userId
      username
      firstName
      lastName
      bio
      location
      email
      photo
      dateOfBirth
      privacy
      posts {
        items {
          id
          body
          photo
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      userId
      username
      firstName
      lastName
      bio
      location
      email
      photo
      dateOfBirth
      privacy
      posts {
        items {
          id
          body
          photo
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      userId
      username
      firstName
      lastName
      bio
      location
      email
      photo
      dateOfBirth
      privacy
      posts {
        items {
          id
          body
          photo
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      body
      photo
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
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
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
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
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      userID
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
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      text
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      text
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
