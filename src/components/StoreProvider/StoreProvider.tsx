import { createContext, useReducer, useState } from "react";
import { commentDefinedType, commentsType, commentType, StateType } from "./StoreProvider-types";

const defaultState: StateType = {
    comments: {},
    addComment: (comment) => {
        console.log("func is undef");
    },
    setCommentRating: (commentId, rating) => {
        console.log("func is undef");
    },
};

export const StoreContext = createContext(defaultState);

export const StoreProvider = (props: any) => {
    const commentsReducer = (state: commentsType, action: any) => {
        switch (action.type) {
            case "addComment":
                return { ...state, [action.comment.id]: action.comment };
            case "setRating":
                return { ...state, [action.commentId]: { ...state[action.commentId], rating: action.rating } }; // state[action.commentId] = { ...state[action.commentId] }), (state[action.commentId].rating = [action.rating])
        }
        return state;
    };

    const [comments, dispatchComments] = useReducer(commentsReducer, defaultState.comments);

    const addComment = (comment: commentType) => {
        comment.id = Object.keys(comments).length;
        dispatchComments({ type: "addComment", comment });
    };

    const setCommentRating = (commentId: number | undefined, rating: number) => {
        dispatchComments({ type: "setRating", commentId, rating });
    };

    return <StoreContext.Provider value={{ comments, addComment, setCommentRating }}>{props.children}</StoreContext.Provider>;
};
