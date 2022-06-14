import { createContext, useState } from "react";
import { commentType, StateType } from "./StoreProvider-types";

const defaultState: StateType = {
    comments: [],
    addComment: (comment) => {
        console.log("func is undef");
    },
};

export const StoreContext = createContext(defaultState);

export const StoreProvider = (props: any) => {
    const [comments, setComments] = useState(defaultState.comments);

    const addComment = (comment: commentType) => {
        //comment avatar - https://via.placeholder.com/100x100.png?text=Avatar
        comment.id = comments.length;
        setComments([comment, ...comments]);
    };
    return <StoreContext.Provider value={{ comments, addComment }}>{props.children}</StoreContext.Provider>;
};
