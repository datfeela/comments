import React from "react";
import styled from "styled-components";
import { Theme } from "../../../lib/styled/variables";
import { compareToNow } from "../../../lib/utils/dateAPI";
import { commentType } from "../../StoreProvider/StoreProvider-types";
import { Content } from "./Content/Content";
import { Rating } from "./Rating/Rating";

const Comment = ({ name, email, avatar, message, date, rating, id }: commentType) => {
    const dateDiff: string = compareToNow(date);

    return (
        <Wrap>
            <AvatarWrap>
                <Avatar src={avatar} alt="avatar" />
            </AvatarWrap>
            <div>
                <Header>
                    <NameSpan>{name}</NameSpan>
                    <EmailSpan>@{email}</EmailSpan>
                </Header>
                <Content rating={rating} message={message}></Content>
                <Footer>
                    <DateSpan>{dateDiff}</DateSpan>
                    <Rating rating={rating} id={id} />
                </Footer>
            </div>
        </Wrap>
    );
};

export default React.memo(Comment);

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 61px 1fr;
    margin-bottom: 10px;
`;

const AvatarWrap = styled.div`
    margin-right: 11px;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;

const Header = styled.div`
    margin-bottom: 5px;
`;

const NameSpan = styled.span`
    margin-right: 3px;
    font-size: 15px;
    font-weight: 600;
    color: ${Theme.blueFontColor};
`;

const EmailSpan = styled.span`
    color: ${Theme.greyFontColor};
`;

const Footer = styled.div`
    padding-bottom: 8px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: 1px solid ${Theme.lightGreyColor};
`;

const DateSpan = styled.span`
    color: ${Theme.greyFontColor};
`;
