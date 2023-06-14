import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Anouncement from "../anouncement/Anouncement";
import Chat from "../chat/Chat";
import CreatePost from "../../pages/post/Create";
import MainInbox from "../../pages/inbox/MainInbox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: { xs: "100%" }, margin: "auto" }} overflow={"auto"}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          allowScrollButtonsMobile
          scrollButtons="auto"
        >
          <Tab label="Latest" {...a11yProps(0)} />
          <Tab label="My parties" {...a11yProps(1)} />
          <Tab label="Trending" {...a11yProps(2)} />
          <Tab label="Message" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CreatePost />
        <Anouncement />
        <Anouncement />
        <Anouncement />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chat />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreatePost />

        <Anouncement />
        <Anouncement />
        <Anouncement />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <MainInbox/>
      </TabPanel>
    </Box>
  );
};

export default BasicTabs;
