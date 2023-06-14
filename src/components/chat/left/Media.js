import {Card, CardMedia, Grid } from '@mui/material'
import React from 'react'

function Media() {
  return (
      <>
          <Grid container spacing={1}
             maxHeight={{
                 md: "calc(40vh - 54px)",
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
        }}
>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
              
                          component="img"
                           height="100"
                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI3oRFlSK31Phs83Y7QQd9WpaWkuBhihsdw&usqp=CAU"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                          image="https://images.pexels.com/photos/11850278/pexels-photo-11850278.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI3oRFlSK31Phs83Y7QQd9WpaWkuBhihsdw&usqp=CAU"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                          image="https://images.pexels.com/photos/11850278/pexels-photo-11850278.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI3oRFlSK31Phs83Y7QQd9WpaWkuBhihsdw&usqp=CAU"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                          image="https://images.pexels.com/photos/11850278/pexels-photo-11850278.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI3oRFlSK31Phs83Y7QQd9WpaWkuBhihsdw&usqp=CAU"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                          image="https://images.pexels.com/photos/11850278/pexels-photo-11850278.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI3oRFlSK31Phs83Y7QQd9WpaWkuBhihsdw&usqp=CAU"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                          image="https://images.pexels.com/photos/11850278/pexels-photo-11850278.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                           height="100"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI3oRFlSK31Phs83Y7QQd9WpaWkuBhihsdw&usqp=CAU"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
              <Grid item md='3'>
                  <Card>
                      <CardMedia
                          component="img"
                          height="100"
                          image="https://images.pexels.com/photos/11850278/pexels-photo-11850278.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt="Paella dish"
                      />
                  </Card>
              </Grid>
            
            
             
            
              </Grid>
        
      </>
  )
}

export default Media