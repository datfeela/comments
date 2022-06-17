import styled from "styled-components";
import { MuiAccordion } from "../../../mui-components/Accordion";

export const Content = ({ rating, message }: { rating: number; message: string }) => {
    return (
        <Wrap>
            {rating <= -10 && (
                <MuiAccordion header="Открыть комментарий" headerExpanded="Свернуть комментарий" details={<ContentSpan>{message}</ContentSpan>} />
            )}
            {rating > -10 && <ContentSpan>{message}</ContentSpan>}
        </Wrap>
    );
};

const Wrap = styled.div`
    margin-bottom: 5px;
`;

const ContentSpan = styled.span`
    padding-top: 3px;
    overflow-wrap: break-word;
`;
