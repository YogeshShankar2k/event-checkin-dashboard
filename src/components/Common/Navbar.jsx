import { AppBar, Toolbar, Typography, Avatar, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AppBar
            position="static"
            elevation={1}
            sx={{
                background: "#fff",
                color: "#222",
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        fontWeight: 700,
                    }}
                >
                    Event Customer Check-In Dashboard
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >
                    <Typography fontWeight={600}>
                        {user?.name || "Admin"}
                    </Typography>

                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                        {(user?.name || "A").charAt(0).toUpperCase()}
                    </Avatar>

                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;