import { List, ListItem, Stack } from "@mui/material";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import CodeBlock from "../components/CodeBlock/CodeBlock";

function PageHome() {
  return (
    <>
      <span className="page-name">Overview</span>
      <p>Welcome to the common components testbed! This is a place to learn more about the Wavelength common components, and to develop them prior to including them in production applications.</p>
      <br />
      <h1 style={{ textAlign: "center", marginTop: 50, marginBottom: 20, color: "#8FD8FF" }}>Current Version :</h1>
      <Stack alignItems={"center"}>
        <ComponentContainer width={"50%"}>
          <div>
            <h2 className="version-number">2.7.1</h2>
          </div>
        </ComponentContainer>
      </Stack>
      <h2 style={{ marginTop: "50px" }}>Installation</h2>
      <p>You can install this package the same way that you install everything else </p>
      <CodeBlock code="npm install @wavelengthusaf/components" />
      <h2>Links</h2>
      <List>
        <ListItem>
          <a className="home-links" target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/@wavelengthusaf/components">
            NPM Homepage - Common Components
          </a>
        </ListItem>
        <ListItem>
          <a className="home-links" target="_blank" rel="noopener noreferrer" href="https://gitlab.com/wavelength2/common-components/">
            GitLab Project Page
          </a>
        </ListItem>
        <ListItem>
          <a className="home-links" target="_blank" rel="noopener noreferrer" href="https://linear.app/850swgdet1/team/COM/all">
            Got a suggestion for a new component? Click here to submit a Linear ticket!
          </a>
        </ListItem>
      </List>
    </>
  );
}

export default PageHome;
