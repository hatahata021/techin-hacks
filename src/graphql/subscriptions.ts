/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateCompetition = /* GraphQL */ `
  subscription OnCreateCompetition {
    onCreateCompetition {
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
export const onUpdateCompetition = /* GraphQL */ `
  subscription OnUpdateCompetition {
    onUpdateCompetition {
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
export const onDeleteCompetition = /* GraphQL */ `
  subscription OnDeleteCompetition {
    onDeleteCompetition {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
