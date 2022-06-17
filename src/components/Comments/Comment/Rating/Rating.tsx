import { Button } from "@mui/material";
import { MouseEvent, useContext } from "react";
import styledComp from "styled-components";
import { styled } from "@mui/system";
import { Theme } from "../../../../lib/styled/variables";
import { StoreContext } from "../../../StoreProvider/StoreProvider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Rating = ({ rating, id }: { rating: number; id: number }) => {
    const setCommentRating = useContext(StoreContext).setCommentRating;

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.id === "button+" && setCommentRating(id, rating + 1);
        e.currentTarget.id === "button-" && setCommentRating(id, rating - 1);
    };

    return (
        <Wrap>
            <RatingBlock>
                <span>Рейтинг:</span> <RatingNumBlock>{rating}</RatingNumBlock>
            </RatingBlock>
            <StyledButton variant="contained" size="small" id="button+" onClick={handleButtonClick}>
                <KeyboardArrowUpIcon id="arrow-up" />
            </StyledButton>
            <StyledButton variant="contained" id="button-" onClick={handleButtonClick}>
                <KeyboardArrowUpIcon id="arrow-down" />
            </StyledButton>
        </Wrap>
    );
};

const Wrap = styledComp.div`
    display: grid;
    grid-template-columns: 1fr 22px 22px;
    grid-column-gap: 5px;
    align-items: center;
    // border-bottom: 1px solid ${Theme.lightGreyColor};
`;

const RatingBlock = styledComp.div`
    width: 90px;
    display: flex;
    justify-content: space-between;
    margin-right: 4px;
`;

const RatingNumBlock = styledComp.span`
    font-weight: 600;
`;

const StyledButton = styled(
    Button,
    {}
)({
    height: "22px",
    minWidth: "22px",
    padding: "0px",

    "#arrow-down": {
        transform: "rotate(0.5turn)",
    },
});
