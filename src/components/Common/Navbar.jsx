import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Box,
    Button,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
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
            elevation={2}
            sx={{
                bgcolor: "#fff",
                color: "#333",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                    }}
                >
                    <EventAvailableIcon
                        sx={{
                            color: "#1976d2",
                            fontSize: 30,
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "#1976d2",
                        }}
                    >
                        Event Customer Check-In Dashboard
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                        {(user?.name || "A")[0].toUpperCase()}
                    </Avatar>
                    <Box>
                        <Typography
                            fontWeight={600}
                            fontSize={15}
                        >
                            {user?.name || "Admin"}
                        </Typography>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            Administrator
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={handleLogout}
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            px: 2,
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;