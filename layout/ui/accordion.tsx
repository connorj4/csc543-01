"use client";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import React from 'react';
/* * AccordionUI component renders a simple accordion interface using Material-UI components.
 * It includes two accordion items, each with a summary and details section.
 * The expand icons are provided by react-icons, showing an up or down arrow depending on the state of the accordion.
 * The content of the details section is placeholder text (Lorem ipsum) for demonstration purposes.
 * This component can be used in various parts of the application where an accordion UI is needed to display collapsible content.
 */ 
const AccordionUI: React.FC = () => {
  return (
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdOutlineArrowCircleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdOutlineArrowCircleUp />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordionUI;