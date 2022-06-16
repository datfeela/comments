import { MouseEvent, useContext } from "react";
import { StoreContext } from "../../../StoreProvider/StoreProvider";

export const Rating = ({ rating, id }: { rating: number, id: number }) => {
    const setCommentRating = useContext(StoreContext).setCommentRating;

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.id === "button+" && setCommentRating(id, rating + 1);
         e.currentTarget.id === "button-" && setCommentRating(id, rating - 1);
    };

    return (
        <div>
            <div>{rating}</div>
            <button id="button+" onClick={handleButtonClick}>
                +
            </button>
            <button id="button-" onClick={handleButtonClick}>
                -
            </button>
        </div>
    );
};
