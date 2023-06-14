import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {  Button, Stack } from '@mui/material';
const Follower = () => {
  return (
    <div style={{padding:"5px"}}>    
<h3 >Who to follow</h3>

<List sx={{ width: '100%', maxWidth:450, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
<Stack direction={{md:"column",lg:"row"}} width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
<Stack direction={"row"}>
    <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Imram Riaz Khan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @imranriazkhan…
              </Typography>
            
            </React.Fragment>
          }
        />
    </Stack>
    <Stack>
      <Button variant="contained">Follow</Button>
    </Stack>
</Stack>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <Stack direction={{md:"column",lg:"row"}} width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
<Stack direction={"row"}>
    <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rizwan Khan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @rizwankhan123
              </Typography>
            
            </React.Fragment>
          }
        />
    </Stack>
    <Stack>
      <Button variant="contained">Follow</Button>
    </Stack>
    </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <Stack direction={{md:"column",lg:"row"}} width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
<Stack direction={"row"}>
    <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Malik Aftab"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                @malikaftab786
              </Typography>
            
            </React.Fragment>
          }
        />
    </Stack>
    <Stack>
      <Button variant="contained">Follow</Button>
    </Stack>
    </Stack>
      </ListItem>
    </List>
    </div>
  )
}

export default Follower