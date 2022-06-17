import { useContext } from "react";
import styled from "styled-components";
import { Theme } from "../../lib/styled/variables";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { commentsType } from "../StoreProvider/StoreProvider-types";
import Comment from "./Comment/Comment";

export const Comments = () => {
    const data: commentsType = useContext(StoreContext).comments;
    let comments: JSX.Element[] | JSX.Element;

    if (Object.values(data).length !== 0) {
        comments = Object.values(data).map((el) => (
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
        comments = <Placeholder>Здесь пока пусто...</Placeholder>;
    }
    return <Wrap>{comments}</Wrap>;
};

const Wrap = styled.div`
    background-color: #fff;
    border-top: 1px solid ${Theme.greyColor};
    border-bottom: 1px solid ${Theme.greyColor};
    padding: 25px 20px;

    @media (max-width: 600px) {
        padding: 12px 10px;
    }
`;

const Placeholder = styled.span`
    margin-left: 5px;
    font-size: 15px;
    color: #818181;

    @media (max-width: 900px) {
        font-size: 14px;
    }

    @media (max-width: 600px) {
        font-size: 13px;
    }
`;
