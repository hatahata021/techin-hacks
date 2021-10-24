/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        blog {
          id
          name
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
export const getCompetition = /* GraphQL */ `
  query GetCompetition($id: ID!) {
    getCompetition(id: $id) {
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
export const listCompetitions = /* GraphQL */ `
  query ListCompetitions(
    $filter: ModelCompetitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompetitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        url
        comments {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CompetitionID
        Competition {
          id
          title
          url
          createdAt
          updatedAt
        }
        content
        talkTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStamp = /* GraphQL */ `
  query GetStamp($id: ID!) {
    getStamp(id: $id) {
      id
      CompetitionID
      stampID
      createdAt
      updatedAt
    }
  }
`;
export const listStamps = /* GraphQL */ `
  query ListStamps(
    $filter: ModelStampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CompetitionID
        stampID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByDate = /* GraphQL */ `
  query CommentsByDate(
    $CompetitionID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByDate(
      CompetitionID: $CompetitionID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        CompetitionID
        Competition {
          id
          title
          url
          createdAt
          updatedAt
        }
        content
        talkTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
