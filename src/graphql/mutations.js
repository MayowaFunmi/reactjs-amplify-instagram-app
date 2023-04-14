/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      text
      userID
      postID
      createdAt
      updatedAt
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
      userID
      postID
      createdAt
      updatedAt
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
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      postID
      createdAt
      updatedAt
    }
  }
`;
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
      id
      owner
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createPostTags = /* GraphQL */ `
  mutation CreatePostTags(
    $input: CreatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    createPostTags(input: $input, condition: $condition) {
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
export const updatePostTags = /* GraphQL */ `
  mutation UpdatePostTags(
    $input: UpdatePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    updatePostTags(input: $input, condition: $condition) {
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
export const deletePostTags = /* GraphQL */ `
  mutation DeletePostTags(
    $input: DeletePostTagsInput!
    $condition: ModelPostTagsConditionInput
  ) {
    deletePostTags(input: $input, condition: $condition) {
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
