/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userId
      username
      firstName
      lastName
      gender
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
      followers {
        items {
          id
          owner
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          owner
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        userId
        username
        firstName
        lastName
        gender
        bio
        location
        email
        photo
        dateOfBirth
        privacy
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
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
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
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
        comments {
          nextToken
        }
        userID
        likes {
          nextToken
        }
        tags {
          nextToken
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
      userID
      postID
      createdAt
      updatedAt
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
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      label
      posts {
        items {
          id
          postId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostTags = /* GraphQL */ `
  query GetPostTags($id: ID!) {
    getPostTags(id: $id) {
      id
      postId
      tagId
      post {
        id
        body
        photo
        comments {
          nextToken
        }
        userID
        likes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        tagId
        post {
          id
          body
          photo
          userID
          createdAt
          updatedAt
        }
        tag {
          id
          label
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByUserId = /* GraphQL */ `
  query UsersByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        username
        firstName
        lastName
        gender
        bio
        location
        email
        photo
        dateOfBirth
        privacy
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        photo
        comments {
          nextToken
        }
        userID
        likes {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const commentsByPostID = /* GraphQL */ `
  query CommentsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likesByPostID = /* GraphQL */ `
  query LikesByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followersByOwner = /* GraphQL */ `
  query FollowersByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followingsByOwner = /* GraphQL */ `
  query FollowingsByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingsByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postTagsByPostId = /* GraphQL */ `
  query PostTagsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postTagsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        tagId
        post {
          id
          body
          photo
          userID
          createdAt
          updatedAt
        }
        tag {
          id
          label
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postTagsByTagId = /* GraphQL */ `
  query PostTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        tagId
        post {
          id
          body
          photo
          userID
          createdAt
          updatedAt
        }
        tag {
          id
          label
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
