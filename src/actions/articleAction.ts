// import constants
import * as ActionTypes from "constants/actionTypes";

// import model
import * as Model from "models/articleModel";

export const createArticle = {
  start: (payload: Model.Article) => ({
    type: ActionTypes.CREATE_ARTICLE_START as typeof ActionTypes.CREATE_ARTICLE_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.CREATE_ARTICLE_SUCCESS as typeof ActionTypes.CREATE_ARTICLE_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.CREATE_ARTICLE_FAILURE as typeof ActionTypes.CREATE_ARTICLE_FAILURE
  })
};

export const updateArticle = {
  start: (payload: string) => ({
    type: ActionTypes.UPDATE_ARTICLE_START as typeof ActionTypes.UPDATE_ARTICLE_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.UPDATE_ARTICLE_SUCCESS as typeof ActionTypes.UPDATE_ARTICLE_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.UPDATE_ARTICLE_FAILURE as typeof ActionTypes.UPDATE_ARTICLE_FAILURE
  })
};

export const changeArticleGoodCount = {
  start: (payload: Model.ArticleGoodCountPayLoad) => ({
    type: ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_START as typeof ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_SUCCESS as typeof ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_FAILURE as typeof ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_FAILURE
  })
};

export const deleteArticle = {
  start: (payload: Model.Article) => ({
    type: ActionTypes.DELETE_ARTICLE_START as typeof ActionTypes.DELETE_ARTICLE_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.DELETE_ARTICLE_SUCCESS as typeof ActionTypes.DELETE_ARTICLE_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.DELETE_ARTICLE_FAILURE as typeof ActionTypes.DELETE_ARTICLE_FAILURE
  })
};

export const getSlideShowArticles = {
  start: () => ({
    type: ActionTypes.GET_SLIDE_SHOW_ARTICLES_START as typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_START
  }),

  success: (articles: Model.Article[]) => ({
    type: ActionTypes.GET_SLIDE_SHOW_ARTICLES_SUCCESS as typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_SUCCESS,
    payload: articles
  }),

  failure: () => ({
    type: ActionTypes.GET_SLIDE_SHOW_ARTICLES_FAILURE as typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_FAILURE
  })
};

export const getLatestArticles = {
  start: (date?: Date) => ({
    type: ActionTypes.GET_LATEST_ARTICLES_START as typeof ActionTypes.GET_LATEST_ARTICLES_START,
    payload: date
  }),

  success: (articles: Model.Article[]) => ({
    type: ActionTypes.GET_LATEST_ARTICLES_SUCCESS as typeof ActionTypes.GET_LATEST_ARTICLES_SUCCESS,
    payload: articles
  }),

  failure: () => ({
    type: ActionTypes.GET_LATEST_ARTICLES_FAILURE as typeof ActionTypes.GET_LATEST_ARTICLES_FAILURE
  })
};

export const getArticlesByGoodCount = {
  start: () => ({
    type: ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_START as typeof ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_START
  }),

  success: (articles: Model.Article[]) => ({
    type: ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_SUCCESS as typeof ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_SUCCESS,
    payload: articles
  }),

  failure: () => ({
    type: ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_FAILURE as typeof ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_FAILURE
  })
};

export const getArticles = {
  start: () => ({
    type: ActionTypes.GET_ARTICLES_START as typeof ActionTypes.GET_ARTICLES_START
  }),

  success: (articles: Model.Article[]) => ({
    type: ActionTypes.GET_ARTICLES_SUCCESS as typeof ActionTypes.GET_ARTICLES_SUCCESS,
    payload: articles
  }),

  failure: () => ({
    type: ActionTypes.GET_ARTICLES_FAILURE as typeof ActionTypes.GET_ARTICLES_FAILURE
  })
};

export const getArticle = {
  start: (id: string) => ({
    type: ActionTypes.GET_ARTICLE_START as typeof ActionTypes.GET_ARTICLE_START,
    payload: id
  }),

  success: (article: Model.Article) => ({
    type: ActionTypes.GET_ARTICLE_SUCCESS as typeof ActionTypes.GET_ARTICLE_SUCCESS,
    payload: article
  }),

  failure: () => ({
    type: ActionTypes.GET_ARTICLE_FAILURE as typeof ActionTypes.GET_ARTICLE_FAILURE
  })
};

export const getPrevArticle = {
  start: (date: Date) => ({
    type: ActionTypes.GET_PREV_ARTICLE_START as typeof ActionTypes.GET_PREV_ARTICLE_START,
    payload: date
  }),

  success: (article: Model.Article) => ({
    type: ActionTypes.GET_PREV_ARTICLE_SUCCESS as typeof ActionTypes.GET_PREV_ARTICLE_SUCCESS,
    payload: article
  }),

  failure: () => ({
    type: ActionTypes.GET_PREV_ARTICLE_FAILURE as typeof ActionTypes.GET_PREV_ARTICLE_FAILURE
  })
};

export const getNextArticle = {
  start: (date: Date) => ({
    type: ActionTypes.GET_NEXT_ARTICLE_START as typeof ActionTypes.GET_NEXT_ARTICLE_START,
    payload: date
  }),

  success: (article: Model.Article) => ({
    type: ActionTypes.GET_NEXT_ARTICLE_SUCCESS as typeof ActionTypes.GET_NEXT_ARTICLE_SUCCESS,
    payload: article
  }),

  failure: () => ({
    type: ActionTypes.GET_NEXT_ARTICLE_FAILURE as typeof ActionTypes.GET_NEXT_ARTICLE_FAILURE
  })
};

export const getArticlesByTag = {
  start: (tagId: string) => ({
    type: ActionTypes.GET_ARTICLES_BY_TAG_START as typeof ActionTypes.GET_ARTICLES_BY_TAG_START,
    payload: tagId
  }),

  success: (articlesByTag: Model.Article[]) => ({
    type: ActionTypes.GET_ARTICLES_BY_TAG_SUCCESS as typeof ActionTypes.GET_ARTICLES_BY_TAG_SUCCESS,
    payload: articlesByTag
  }),

  failure: () => ({
    type: ActionTypes.GET_ARTICLES_BY_TAG_FAILURE as typeof ActionTypes.GET_ARTICLES_BY_TAG_FAILURE
  })
};
