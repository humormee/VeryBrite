import * as LikeApiUtil from '../util/like_api_util';


export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

const receiveAllLikes = likes => {
  return ({
    type: RECEIVE_ALL_LIKES,
    likes
  })
  
}

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = likeId => {
  return ({
    type: DELETE_LIKE,
    likeId
  })
  
};

const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});


export const fetchLikes = userId => dispatch => (
  LikeApiUtil.fetchLikes(userId)
      .then((events) =>{ 
        return (
          dispatch(receiveAllLikes(events))
          )},
      e => dispatch(receiveLikeErrors(e.responseJSON)))
);

export const createLike = like => dispatch => (
  LikeApiUtil.createLike(like)
      .then(like => dispatch(receiveLike(like)),
      e => dispatch(receiveLikeErrors(e.responseJSON)))
);

export const deleteLike = like => dispatch => {
  return (
    LikeApiUtil.deleteLike(like)
        .then(like => {
          return (
            dispatch(removeLike(like.id))
          )
          
        },
          
    e => dispatch(receiveLikeErrors(e.responseJSON)))
  )
}