export const postArticle = {
  data: {
    data: {
      title: 'A new Article',
      body: 'content of the new article',
    },
  },
  status: 201,
};

export const updateArticleDetail = {
  data: {
    data: {
      title: 'A new Article',
      body: 'content of the new article',
    },
  },
  status: 200,
};

export const articleResponse = {
  data: {
    data: {
      title: 'A new Article',
      body: 'content of the new article',
      slug: 'a-new-article',
      myReactions: [{ reaction: 1 }],
      reactionCount: {
        likes: 0,
        dislikes: 0,
      },
    },
  },
  status: 200,
};
export const addTagsDetail = {
  data: {
    data: {
      message: 'Successfully added tags',
    },
  },
  status: 200,
};
