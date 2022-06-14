import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { commentType } from "../StoreProvider/StoreProvider-types";

export const Input = () => {
    const addComment = useContext(StoreContext).addComment;

    let handleSubmit = () => {
        let comment: commentType = {
            avatar: null,
            name: "xdxd",
            date: String(new Date),
            message: 'aaaaaaaaqqqqqqqq',
            rating: 0,
        };

        addComment(comment)
    }

    return <div style={{ minHeight: '10px', marginBottom: '10px' }}>
        <button onClick={handleSubmit}>add comment</button>
    </div>;
}
