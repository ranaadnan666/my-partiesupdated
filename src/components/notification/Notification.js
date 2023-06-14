import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{display:"flex",justifyContent:"space-between"}}
    >
      {value === index && (
        <Box sx={{ p: 2,border:"1px solid gray",width:"100%" ,marginTop:"10px"}}>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Main=()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width:{xs:'95%',md:"60%"},mx:"auto" }} p={1}>
        <h3>Notifications</h3>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="All" {...a11yProps(0)} />
          {/* <Tab sx={{marginLeft:{xs:"170px",md:"200px"}}} label="verified" {...a11yProps(1)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <h4>Nothing to see here — yet</h4>
      <p>From likes to Retweets and a whole lot more, this is where all the action happens</p>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
      <h4>Nothing to see here — yet</h4>
      <p>Likes, mentions, Retweets, and a whole lot more — when it comes from a verified account, you’ll find it here</p>

      </TabPanel> */}
     
    </Box>
  );
}

export default Main