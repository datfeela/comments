import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
// import styled from "styled-components";

export const MuiAccordion = ({ header, headerExpanded, details }: accordionType) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSetIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Accordion onClick={handleSetIsExpanded}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{isExpanded ? headerExpanded : header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{details}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export type accordionType = {
    header: string;
    headerExpanded: string;
    details: string | JSX.Element;
};
