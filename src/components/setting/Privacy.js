import * as React from "react";
import {
    Typography,
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

const Privacy = () => {
    // const [privacy, setprivacy] = React.useState({
    //     see_status: "",
    //     message_me: "",
    //     see_followers: "",
    //     see_following: "",
    //     see_birthdate: "",
    //     see_profile: "",
    // });
  

    return (
        <>
            <Typography
                variant="h5"
                sx={{ fontWeight: "600", marginBottom: 3 }}
                gutterBottom
            >
                Privacy Settings
            </Typography>

            <Grid
                container
                spacing={3}
                columnSpacing={{ sm: 5, lg: 20 }}
                rowSpacing={{ xs: 4, sm: 4, lg: 4 }}
            >
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="status-label" sx={{ fontSize: "1.5rem" }}>
                            Status
                        </InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            name="status"
                            label="status"
                            sx={{ padding: "0.5rem 0rem 0rem 1rem" }}
                            // value={privacy.see_status}
                            // onChange={(e) =>
                            //     setprivacy({ ...privacy, see_status: e.target.value })
                            // }
                            variant="standard"
                        >
                            <MenuItem value="Online">Online</MenuItem>
                            <MenuItem value="Offline">Offline</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="msg-label" sx={{ fontSize: "1.5rem" }}>
                            Who can message me ?
                        </InputLabel>
                        <Select
                            sx={{ padding: "0.5rem 0rem 0rem 1rem" }}
                            labelId="msg-label"
                            id="msg"
                            name="msg"
                            label="Who can message me ?"
                            // value={privacy.message_me}
                            // onChange={(e) =>
                            //     setprivacy({ ...privacy, message_me: e.target.value })
                            // }
                            variant="standard"
                        >
                            <MenuItem value="Everyone">Everyone</MenuItem>
                            <MenuItem value="Nobody">No one</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="follower-label" sx={{ fontSize: "1.5rem" }}>
                            Who can see my followers ?
                        </InputLabel>
                        <Select
                            sx={{ padding: "0.5rem 0rem 0rem 1rem" }}
                            labelId="follower-label"
                            id="follower"
                            name="follower"
                            label="Who can message me ?"
                            // value={privacy.see_followers}
                            // onChange={(e) =>
                            //     setprivacy({ ...privacy, see_followers: e.target.value })
                            // }
                            variant="standard"
                        >
                            <MenuItem value="Everyone" sx={{ fontSize: "1.5rem" }}>
                                Everyone
                            </MenuItem>
                            <MenuItem value="Nobody">No one</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="birth-label" sx={{ fontSize: "1.5rem" }}>
                            Who can see my birthday ?
                        </InputLabel>
                        <Select
                            sx={{ padding: "0.5rem 0rem 0rem 1rem" }}
                            labelId="birth-label"
                            id="birth"
                            name="birth"
                            label="Who can message me ?"
                            // value={privacy.see_birthdate}
                            // onChange={(e) =>
                            //     setprivacy({ ...privacy, see_birthdate: e.target.value })
                            // }
                            variant="standard"
                        >
                            <MenuItem value="Everyone">Everyone</MenuItem>
                            <MenuItem value="Nobody">No one</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="profile-label" sx={{ fontSize: "1.5rem" }}>
                            Who can see my profile ?
                        </InputLabel>
                        <Select
                            sx={{ padding: "0.5rem 0rem 0rem 1rem" }}
                            labelId="profile-label"
                            id="profile"
                            name="profile"
                            label="Who can message me ?"
                            // value={privacy.see_profile}
                            // onChange={(e) =>
                            //     setprivacy({ ...privacy, see_profile: e.target.value })
                            // }
                            variant="standard"
                        >
                            <MenuItem value="Everyone">Everyone</MenuItem>
                            <MenuItem value="Nobody">No one</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel id="profile-label" sx={{ fontSize: "1.5rem" }}>
                            Who can see following ?
                        </InputLabel>
                        <Select
                            sx={{ padding: "0.5rem 0rem 0rem 1rem" }}
                            labelId="profile-label"
                            id="profile"
                            name="profile"
                            label="Who can message me ?"
                            // value={privacy.see_following}
                            // onChange={(e) =>
                            //     setprivacy({ ...privacy, see_following: e.target.value })
                            // }
                            variant="standard"
                        >
                            <MenuItem value="Everyone">Everyone</MenuItem>
                            <MenuItem value="Nobody">No one</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} textAlign="center">
                    <Button
                        variant="contained"
                      
                        sx={{
                            backgroundColor: "#000000",
                            color: "white",
                            marginTop: "20px",
                            borderRadius: "8px",
                            width: "120px",
                            textAlign: "center",
                            "&:hover": {
                                color: "#000000",
                                backgroundColor: "white",
                            },
                        }}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Privacy;
