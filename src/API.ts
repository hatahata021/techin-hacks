/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blogID: string,
  blog?: Blog | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogID: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCompetitionInput = {
  id?: string | null,
  title: string,
  url: string,
};

export type ModelCompetitionConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelCompetitionConditionInput | null > | null,
  or?: Array< ModelCompetitionConditionInput | null > | null,
  not?: ModelCompetitionConditionInput | null,
};

export type Competition = {
  __typename: "Competition",
  id: string,
  title: string,
  url: string,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  CompetitionID: string,
  Competition?: Competition | null,
  content: string,
  talkTime?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompetitionInput = {
  id: string,
  title?: string | null,
  url?: string | null,
};

export type DeleteCompetitionInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  CompetitionID: string,
  content: string,
  talkTime?: number | null,
  createdAt?: string | null,
};

export type ModelCommentConditionInput = {
  CompetitionID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  talkTime?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCommentInput = {
  id: string,
  CompetitionID?: string | null,
  content?: string | null,
  talkTime?: number | null,
  createdAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateStampInput = {
  id?: string | null,
  CompetitionID: string,
  stampID: string,
};

export type ModelStampConditionInput = {
  CompetitionID?: ModelIDInput | null,
  stampID?: ModelStringInput | null,
  and?: Array< ModelStampConditionInput | null > | null,
  or?: Array< ModelStampConditionInput | null > | null,
  not?: ModelStampConditionInput | null,
};

export type Stamp = {
  __typename: "Stamp",
  id: string,
  CompetitionID: string,
  stampID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStampInput = {
  id: string,
  CompetitionID?: string | null,
  stampID?: string | null,
};

export type DeleteStampInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items?:  Array<Blog | null > | null,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCompetitionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelCompetitionFilterInput | null > | null,
  or?: Array< ModelCompetitionFilterInput | null > | null,
  not?: ModelCompetitionFilterInput | null,
};

export type ModelCompetitionConnection = {
  __typename: "ModelCompetitionConnection",
  items?:  Array<Competition | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  CompetitionID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  talkTime?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelStampFilterInput = {
  id?: ModelIDInput | null,
  CompetitionID?: ModelIDInput | null,
  stampID?: ModelStringInput | null,
  and?: Array< ModelStampFilterInput | null > | null,
  or?: Array< ModelStampFilterInput | null > | null,
  not?: ModelStampFilterInput | null,
};

export type ModelStampConnection = {
  __typename: "ModelStampConnection",
  items?:  Array<Stamp | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompetitionMutationVariables = {
  input: CreateCompetitionInput,
  condition?: ModelCompetitionConditionInput | null,
};

export type CreateCompetitionMutation = {
  createCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompetitionMutationVariables = {
  input: UpdateCompetitionInput,
  condition?: ModelCompetitionConditionInput | null,
};

export type UpdateCompetitionMutation = {
  updateCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompetitionMutationVariables = {
  input: DeleteCompetitionInput,
  condition?: ModelCompetitionConditionInput | null,
};

export type DeleteCompetitionMutation = {
  deleteCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStampMutationVariables = {
  input: CreateStampInput,
  condition?: ModelStampConditionInput | null,
};

export type CreateStampMutation = {
  createStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStampMutationVariables = {
  input: UpdateStampInput,
  condition?: ModelStampConditionInput | null,
};

export type UpdateStampMutation = {
  updateStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStampMutationVariables = {
  input: DeleteStampInput,
  condition?: ModelStampConditionInput | null,
};

export type DeleteStampMutation = {
  deleteStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items?:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCompetitionQueryVariables = {
  id: string,
};

export type GetCompetitionQuery = {
  getCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompetitionsQueryVariables = {
  filter?: ModelCompetitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompetitionsQuery = {
  listCompetitions?:  {
    __typename: "ModelCompetitionConnection",
    items?:  Array< {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      CompetitionID: string,
      Competition?:  {
        __typename: "Competition",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      talkTime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStampQueryVariables = {
  id: string,
};

export type GetStampQuery = {
  getStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStampsQueryVariables = {
  filter?: ModelStampFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStampsQuery = {
  listStamps?:  {
    __typename: "ModelStampConnection",
    items?:  Array< {
      __typename: "Stamp",
      id: string,
      CompetitionID: string,
      stampID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CommentsByDateQueryVariables = {
  CompetitionID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByDateQuery = {
  commentsByDate?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      CompetitionID: string,
      Competition?:  {
        __typename: "Competition",
        id: string,
        title: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      talkTime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompetitionSubscription = {
  onCreateCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompetitionSubscription = {
  onUpdateCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompetitionSubscription = {
  onDeleteCompetition?:  {
    __typename: "Competition",
    id: string,
    title: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        CompetitionID: string,
        content: string,
        talkTime?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    CompetitionID: string,
    Competition?:  {
      __typename: "Competition",
      id: string,
      title: string,
      url: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    talkTime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStampSubscription = {
  onCreateStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStampSubscription = {
  onUpdateStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStampSubscription = {
  onDeleteStamp?:  {
    __typename: "Stamp",
    id: string,
    CompetitionID: string,
    stampID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
