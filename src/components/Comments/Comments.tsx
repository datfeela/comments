import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { Comment } from "./Comment/Comment";

export const Comments = () => {
    const data = useContext(StoreContext).comments;
    const comments = data[0] !== null && data.map((el) => <Comment key={el.id} data={{ ...el }} />);
    return <div style={{ border: '1px solid white', borderRadius: '5px', margin: '0px 200px' }}>{comments}</div>;
};
