// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Comment, Like, Follower, Following, Tag, PostTags } = initSchema(schema);

export {
  User,
  Post,
  Comment,
  Like,
  Follower,
  Following,
  Tag,
  PostTags
};