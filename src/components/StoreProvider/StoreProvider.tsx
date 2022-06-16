import { createContext, useReducer } from "react";
import { actionTypes, addCommentActionType, commentsType, commentType, setCommentRatingActionType, StateType } from "./StoreProvider-types";

const defaultState: StateType = {
    comments: {},
    addComment: () => {
        console.log("func is undef");
    },
    setCommentRating: () => {
        console.log("func is undef");
    },
};

export const StoreContext = createContext(defaultState);

export const StoreProvider = (props: { children: React.ReactElement }) => {
    const commentsReducer = (state: commentsType, action: actionTypes) => {
        switch (action.type) {
            case "addComment":
                return { ...state, [action.comment.id]: action.comment };
            case "setRating":
                return { ...state, [action.commentId]: { ...state[action.commentId], rating: action.rating } };
            default:
                return state;
        }
    };

    const [comments, dispatchComments] = useReducer(commentsReducer, defaultState.comments);

    function addComment(comment: commentType) {
        comment.id = Object.keys(comments).length;
        let action: addCommentActionType = { type: "addComment", comment };
        dispatchComments(action);
    }

    function setCommentRating(commentId: number, rating: number) {
        let action: setCommentRatingActionType = { type: "setRating", commentId, rating };
        dispatchComments(action);
    }

    return <StoreContext.Provider value={{ comments, addComment, setCommentRating }}>{props.children}</StoreContext.Provider>;
};
