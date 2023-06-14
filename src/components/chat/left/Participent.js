import { Avatar, Box, Divider,  List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'

function Participent() {
    return (
        <Box maxHeight={{
            md: "calc(40vh - 63px)",
            xs: "calc(50vh - 54px)",
        }}
            overflow={"auto"}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '5px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'gray',

                },
            }}>
            {/* <Grid container>
              <Grid item md={12}>
                  <Stack direction={"row"} spacing={2}> 
                    
                      <Avatar
                          src="https://images.pexels.com/photos/14207392/pexels-photo-14207392.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          sx={{ width:'50px',height:'50px'}}
                      />
                      <Stack>
                          <Typography>
                              Rizwan
                          </Typography>
                          <Typography>
                             i love pti
                          </Typography>
                      </Stack>
                  </Stack>
                  
              </Grid>
          </Grid> */}
            <List sx={{
                width: '100%',
                bgcolor: 'background.paper',
            }} component="nav" aria-label="mailbox folders">
                <ListItem >
                    <Stack direction={"row"} spacing={2}>
                        <Avatar
                            src="https://images.pexels.com/photos/14207392/pexels-photo-14207392.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Stack>
                            <Typography>
                                Imran Khan
                            </Typography>
                            <Typography sx={{ height: "22px", overflow: 'hidden' }}>
                                The greatest glory in living lies not in never falling, but in rising every time we fall
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
                <Divider />
                <ListItem >
                    <Stack direction={"row"} spacing={2}>
                        <Avatar
                            src="https://images.pexels.com/photos/5378685/pexels-photo-5378685.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Stack>
                            <Typography>
                            Sobia Ahmad
                            </Typography>
                            <Typography sx={{ height: "22px", overflow: 'hidden' }}>
                                The greatest glory in living lies not in never falling, but in rising every time we fall
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
                <Divider />
                <ListItem >
                    <Stack direction={"row"} spacing={2}>
                        <Avatar
                            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Stack>
                            <Typography>
                                Saad Raza
                            </Typography>
                            <Typography sx={{ height: "22px", overflow: 'hidden' }}>
                                The greatest glory in living lies not in never falling, but in rising every time we fall
                            </Typography>
                    </Stack>
                </Stack>
            </ListItem>

            <Divider light />
            <ListItem >
                <Stack direction={"row"} spacing={2}>
                    <Avatar
                            src="https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        sx={{ width: '50px', height: '50px' }}
                    />
                    <Stack>
                        <Typography>
                            Sania Mirza
                            </Typography>
                         
                        <Typography sx={{ height: "22px", overflow: 'hidden' }}>
                            The greatest glory in living lies not in never falling, but in rising every time we fall
                        </Typography>
                    </Stack>
                </Stack>
            </ListItem>
                <Divider />
                <ListItem >
                    <Stack direction={"row"} spacing={2}>
                        <Avatar
                            src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Stack>
                            <Typography>
                                Ahsan Raza
                            </Typography>

                            <Typography sx={{ height: "22px", overflow: 'hidden' }}>
                                The greatest glory in living lies not in never falling, but in rising every time we fall
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
                <Divider />
                <ListItem >
                    <Stack direction={"row"} spacing={2}>
                        <Avatar
                            src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Stack>
                            <Typography>
                               Naveed Ahmad
                            </Typography>

                            <Typography sx={{ height: "22px", overflow: 'hidden' }}>
                                The greatest glory in living lies not in never falling, but in rising every time we fall
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
                <Divider />
        </List>
          
   </Box >
  )
}

export default Participent