import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

const CreatePost = () => {
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState('');
  const [tagLabels, setTagLabels] = useState('');

  const createNewPost = async () => {
    const tagLabelsArray = tagLabels.split(',').map((tagLabel) => tagLabel.trim());

    // First, create the post
    const createPostInput = {
      body,
      photo
    };
    const newPost = await API.graphql(graphqlOperation(createPostMutation, { input: createPostInput }));

    // Then, create the tags
    const tags = await Promise.all(tagLabelsArray.map(async (tagLabel) => {
      const createTagInput = {
        label: tagLabel
      };
      const newTag = await API.graphql(graphqlOperation(createTagMutation, { input: createTagInput }));
      return newTag.data.createTag;
    }));

    // Finally, link the tags to the post
    const postTags = await Promise.all(tags.map(async (tag) => {
      const createPostTagInput = {
        postId: newPost.data.createPost.id,
        tagId: tag.id
      };
      const newPostTag = await API.graphql(graphqlOperation(createPostTagMutation, { input: createPostTagInput }));
      return newPostTag.data.createPostTag;
    }));

    console.log('New Post with tags:', { ...newPost.data.createPost, tags: postTags });
  };

  return (
    <div>
      <input type="text" placeholder="Post body" value={body} onChange={(e) => setBody(e.target.value)} />
      <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      <input type="text" placeholder="Tags (separated by commas)" value={tagLabels} onChange={(e) => setTagLabels(e.target.value)} />
      <button onClick={createNewPost}>Create Post</button>
    </div>
  );
};

const createPostMutation = `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      body
      photo
    }
  }
`;

const createTagMutation = `
  mutation CreateTag($input: CreateTagInput!) {
    createTag(input: $input) {
      id
      label
    }
  }
`;

const createPostTagMutation = `
  mutation CreatePostTag($input: CreatePostTagInput!) {
    createPostTag(input: $input) {
      id
      post {
        id
        body
        photo
      }
      tag {
        id
        label
      }
    }
  }
`;

export default CreatePost;
