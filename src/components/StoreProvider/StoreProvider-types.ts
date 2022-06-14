export type commentType = {
    id?: number;
    name: string;
    avatar: string | null;
    message: string;
    date: string;
    rating: number;
};

export type StateType = {
    comments: Array<commentType>;
    addComment: (comment: commentType) => void;
};