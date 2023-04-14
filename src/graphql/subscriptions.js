/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onCreateFollower(filter: $filter) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onUpdateFollower(filter: $filter) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onDeleteFollower(filter: $filter) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onUpdateFollowing(filter: $filter) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onDeleteFollowing(filter: $filter) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags($filter: ModelSubscriptionPostTagsFilterInput) {
    onCreatePostTags(filter: $filter) {
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
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags($filter: ModelSubscriptionPostTagsFilterInput) {
    onUpdatePostTags(filter: $filter) {
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
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags($filter: ModelSubscriptionPostTagsFilterInput) {
    onDeletePostTags(filter: $filter) {
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
