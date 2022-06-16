export type commentType = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    message: string;
    date: Date;
    rating: number;
};

export interface commentsType {
    [key: number]: commentType;
}

export type StateType = {
    comments: commentsType;
    addComment: (comment: commentType) => void;
    setCommentRating: (commentId: number, rating: number) => void;
};

//action types

export type actionTypes = addCommentActionType | setCommentRatingActionType;

export type addCommentActionType = {
    type: "addComment";
    comment: commentType;
};

export type setCommentRatingActionType = {
    type: "setRating";
    commentId: number;
    rating: number;
};
