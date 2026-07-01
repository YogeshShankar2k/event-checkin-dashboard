import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar
            position="static"
            elevation={1}
            sx={{
                background: "#fff",
                color: "#222"
            }}
        >
            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700
                    }}
                >
                    Event Customer Check-In Dashboard
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >
                    <Typography>
                        Admin
                    </Typography>

                    <Avatar>
                        A
                    </Avatar>
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;