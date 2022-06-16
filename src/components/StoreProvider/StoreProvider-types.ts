export type commentType = {
    id?: number;
    name: string;
    email: string;
    avatar: string | null;
    message: string;
    date: dateType;
    rating: number;
};

export type dateType = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minutes: number;
};

export type StateType = {
    comments: Array<commentType>;
    addComment: (comment: commentType) => void;
};
