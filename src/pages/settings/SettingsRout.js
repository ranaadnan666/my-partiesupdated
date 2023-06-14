import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Settings from "./Settings";

const SettingsRout = () => {
  return (
    <Grid container>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: { xs: "10%", md: "25%" }}}>
          <Settings />
        </Box>
        <Box width={{xs:"90%",md:"75%"}} padding={"10px"}>
          <Outlet />
        </Box>
      </Box>
    </Grid>
  );
};

export default SettingsRout;
