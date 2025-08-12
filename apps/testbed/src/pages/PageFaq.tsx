import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PageFaq() {
  return (
    <>
      <span className="page-name">Frequently Asked Questions</span>
      <div className="content-block">
        <h3 style={{ marginTop: "24px", fontSize: "28px", color: "rgb(143, 216, 255)" }}>General Usage</h3>
        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span">What is the purpose of the documentation?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>The documentation provides comprehensive guidance on using Wavelength's in house compoennt library.</AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", paddingBottom: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header">
            <Typography component="span">How can I find specific information in the documentation?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>
            {" "}
            You can use the search bar or browse through the table of contents to locate any components you might need.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", paddingBottom: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Is the documentation regularly updated?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>
            Yes, we regularly update the documentation to reflect the latest features and improvements. Be sure to check the version number.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", paddingBottom: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">What if there is a component I would like to see added?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>
            You can request a component by clicking the Request a Component button on the top right of the page. It will take you to our linear website where you can place a ticket.
          </AccordionDetails>
        </Accordion>
        <h3 style={{ marginTop: "24px", fontSize: "28px", color: "rgb(143, 216, 255)" }}>Access and Navigation</h3>
        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", boxShadow: "none", border: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Do I need an account to access the documentation?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>No, the documentation is publicly accessible and does not require an account.</AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", paddingBottom: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">How can I navigate through the documentation?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>Use the sidebar or the navigation menu at the top to explore different sections and topics.</AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", paddingBottom: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Are there downloadable versions of the documentation available?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>
            Although we do have the code for the documentation on gitlab, there are no pdf downloads available as of version 2.0.0
          </AccordionDetails>
        </Accordion>
        <h3 style={{ marginTop: "24px", fontSize: "28px", color: "rgb(143, 216, 255)" }}>Troubleshooting & Support</h3>

        <Accordion sx={{ backgroundColor: "#092E42", color: "white", paddingTop: "12px", paddingBottom: "12px", boxShadow: "none" }}>
          <AccordionSummary sx={{ paddingBottom: "12px", paddingLeft: "0px" }} expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">What should I do if I can't find the information I need?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingBottom: "12px", paddingLeft: "0px" }}>
            If you can't find what you're looking for, consider using the search feature or contacting us via email.
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default PageFaq;
