export type commentType = {
    id?: number;
    name: string;
    email?: string;
    avatar: string | undefined;
    message: string;
    date: Date;
    rating: number;
};

export type commentDefinedType = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    message: string;
    date: Date;
    rating: number;
};

// export type dateType = {
//     year: number;
//     month: number;
//     day: number;
//     hour: number;
//     minutes: number;
// };

export interface commentsType {
    [key: number]: commentDefinedType;
}

export type StateType = {
    comments: commentsType;
    addComment: (comment: commentType) => void;
    setCommentRating: (commentId: number, rating: number) => void;
};
