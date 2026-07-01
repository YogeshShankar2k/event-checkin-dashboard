import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1 }}>

                <Navbar />

                <Box
                    sx={{
                        p: 3,
                        background: "#f4f6f9",
                        minHeight: "100vh"
                    }}
                >
                    {children}
                </Box>

            </Box>
        </Box>
    );
};

export default Layout;