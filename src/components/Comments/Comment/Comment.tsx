import React from "react";
import { compareToNow } from "../../../lib/utils/dateAPI";
import { commentType } from "../../StoreProvider/StoreProvider-types";
import { Rating } from "./Rating/Rating";

const Comment = ({ name, avatar, message, date, rating, id }: commentType) => {
    const dateDiff: string = compareToNow(date);

    return (
        <div>
            <div className="avatar">
                <img style={{ height: "50px", width: "50px" }} src={avatar} alt="avatar" />
            </div>
            <div>
                <div>{name}</div>
                {rating <= -10 && <div>Открыть комментарий</div>}
                <div>{message}</div>
                <div>
                    <div>{dateDiff}</div>
                    <div>
                        <Rating rating={rating} id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Comment);
