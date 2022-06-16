import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import Comment from "./Comment/Comment";

export const Comments = () => {
    const data = useContext(StoreContext).comments;
    const comments =
        Object.values(data)[0] !== null &&
        Object.values(data).map((el) => (
            <Comment
                key={el.id}
                name={el.name}
                email={el.email}
                avatar={el.avatar}
                message={el.message}
                date={el.date}
                rating={el.rating}
                id={el.id}
            />
        ));
    return <div style={{ border: "1px solid white", borderRadius: "5px", margin: "0px 200px" }}>{comments}</div>;
};
