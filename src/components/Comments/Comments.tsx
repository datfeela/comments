import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { commentsType } from "../StoreProvider/StoreProvider-types";
import Comment from "./Comment/Comment";

export const Comments = () => {
    const data: commentsType = useContext(StoreContext).comments;
    let comments: JSX.Element[] | JSX.Element;
    
    if (Object.values(data).length !== 0) {
        const dataReverse = Object.values(data).reverse();
        comments = dataReverse.map((el) => (
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
    } else {
        comments = <div>Здесь пока пусто...</div>;
    }
    return <div style={{ border: "1px solid white", borderRadius: "5px", margin: "0px 200px" }}>{comments}</div>;
};
