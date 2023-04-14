import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender?: string | null;
  readonly bio?: string | null;
  readonly location?: string | null;
  readonly email: string;
  readonly photo?: string | null;
  readonly dateOfBirth?: string | null;
  readonly privacy?: string | null;
  readonly posts?: (Post | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly followers?: (Follower | null)[] | null;
  readonly following?: (Following | null)[] | null;
  readonly likes?: (Like | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender?: string | null;
  readonly bio?: string | null;
  readonly location?: string | null;
  readonly email: string;
  readonly photo?: string | null;
  readonly dateOfBirth?: string | null;
  readonly privacy?: string | null;
  readonly posts: AsyncCollection<Post>;
  readonly comments: AsyncCollection<Comment>;
  readonly followers: AsyncCollection<Follower>;
  readonly following: AsyncCollection<Following>;
  readonly likes: AsyncCollection<Like>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly photo: string;
  readonly comments?: (Comment | null)[] | null;
  readonly userID: string;
  readonly likes?: (Like | null)[] | null;
  readonly tags?: (PostTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly photo: string;
  readonly comments: AsyncCollection<Comment>;
  readonly userID: string;
  readonly likes: AsyncCollection<Like>;
  readonly tags: AsyncCollection<PostTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly userID: string;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly userID: string;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly postID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly postID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerFollower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Follower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Follower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Follower = LazyLoading extends LazyLoadingDisabled ? EagerFollower : LazyFollower

export declare const Follower: (new (init: ModelInit<Follower>) => Follower) & {
  copyOf(source: Follower, mutator: (draft: MutableModel<Follower>) => MutableModel<Follower> | void): Follower;
}

type EagerFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Following = LazyLoading extends LazyLoadingDisabled ? EagerFollowing : LazyFollowing

export declare const Following: (new (init: ModelInit<Following>) => Following) & {
  copyOf(source: Following, mutator: (draft: MutableModel<Following>) => MutableModel<Following> | void): Following;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: string;
  readonly posts?: (PostTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: string;
  readonly posts: AsyncCollection<PostTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerPostTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly tagId?: string | null;
  readonly post: Post;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly tagId?: string | null;
  readonly post: AsyncItem<Post>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostTags = LazyLoading extends LazyLoadingDisabled ? EagerPostTags : LazyPostTags

export declare const PostTags: (new (init: ModelInit<PostTags>) => PostTags) & {
  copyOf(source: PostTags, mutator: (draft: MutableModel<PostTags>) => MutableModel<PostTags> | void): PostTags;
}