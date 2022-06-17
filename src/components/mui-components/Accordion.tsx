import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { styled } from "@mui/system";
import { Theme } from "../../lib/styled/variables";

export const MuiAccordion = ({ header, headerExpanded, details }: accordionType) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSetIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledAccordion onClick={handleSetIsExpanded}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography>{isExpanded ? headerExpanded : header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{details}</Typography>
            </AccordionDetails>
        </StyledAccordion>
    );
};

export type accordionType = {
    header: string;
    headerExpanded: string;
    details: string | JSX.Element;
};

const StyledAccordion = styled(
    Accordion,
    {}
)({
    marginBottom: "12px !important",
    ".MuiAccordionSummary-root": {
        minHeight: "36px !important",
        ".MuiTypography-body1": {
            color: `${Theme.lightBlueColor}`,
        },
        ".MuiAccordionSummary-content": {
            margin: "0px",
        },
    },
    ".MuiCollapse-root .MuiAccordionDetails-root": {
        padding: "2px 16px 14px 16px",
    },
});
