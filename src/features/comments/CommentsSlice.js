import { COMMENTS } from '../../app/shared/COMMENTS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload:', action.payload);
            console.log('addComment state.commentsArray:', state.commentsArray)
            const newComment = {    //newComment object//
                id: state.commentsArray.length + 1,  //id property set to the length of the current comments poperty + 1.
                ...action.payload   //action.payload property contains an object containing the values from the comment form (commentForm.js) (rating, author, text)//
            };                      //spread the object, new comment object now contains the following properties: (id, rating, author, text)//
            state.commentsArray.push(newComment);    //Since Redux toolkit implements "immer-makes mutable changes immutable" in the createSlice function, we can use a method that mutates the state. Push the new comment into the comments array.//              
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;   //destructure the addComment action creator function from commentsSlice.actions and export//

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};