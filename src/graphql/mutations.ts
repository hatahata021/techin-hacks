/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          blogID
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          blogID
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          blogID
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
      title
      blogID
      blog {
        id
        name
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blogID
      blog {
        id
        name
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blogID
      blog {
        id
        name
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
export const createCompetition = /* GraphQL */ `
  mutation CreateCompetition(
    $input: CreateCompetitionInput!
    $condition: ModelCompetitionConditionInput
  ) {
    createCompetition(input: $input, condition: $condition) {
      id
      title
      url
      comments {
        items {
          id
          CompetitionID
          content
          talkTime
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
export const updateCompetition = /* GraphQL */ `
  mutation UpdateCompetition(
    $input: UpdateCompetitionInput!
    $condition: ModelCompetitionConditionInput
  ) {
    updateCompetition(input: $input, condition: $condition) {
      id
      title
      url
      comments {
        items {
          id
          CompetitionID
          content
          talkTime
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
export const deleteCompetition = /* GraphQL */ `
  mutation DeleteCompetition(
    $input: DeleteCompetitionInput!
    $condition: ModelCompetitionConditionInput
  ) {
    deleteCompetition(input: $input, condition: $condition) {
      id
      title
      url
      comments {
        items {
          id
          CompetitionID
          content
          talkTime
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
      CompetitionID
      Competition {
        id
        title
        url
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      talkTime
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
      CompetitionID
      Competition {
        id
        title
        url
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      talkTime
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
      CompetitionID
      Competition {
        id
        title
        url
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      talkTime
      createdAt
      updatedAt
    }
  }
`;
export const createStamp = /* GraphQL */ `
  mutation CreateStamp(
    $input: CreateStampInput!
    $condition: ModelStampConditionInput
  ) {
    createStamp(input: $input, condition: $condition) {
      id
      CompetitionID
      stampID
      createdAt
      updatedAt
    }
  }
`;
export const updateStamp = /* GraphQL */ `
  mutation UpdateStamp(
    $input: UpdateStampInput!
    $condition: ModelStampConditionInput
  ) {
    updateStamp(input: $input, condition: $condition) {
      id
      CompetitionID
      stampID
      createdAt
      updatedAt
    }
  }
`;
export const deleteStamp = /* GraphQL */ `
  mutation DeleteStamp(
    $input: DeleteStampInput!
    $condition: ModelStampConditionInput
  ) {
    deleteStamp(input: $input, condition: $condition) {
      id
      CompetitionID
      stampID
      createdAt
      updatedAt
    }
  }
`;
