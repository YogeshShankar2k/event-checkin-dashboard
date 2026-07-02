import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";

import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import BarChartIcon from "@mui/icons-material/BarChart";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 230;

const menu = [

    {
        name: "Dashboard",
        path: "/",
        icon: <DashboardIcon />
    },
    {
        name: "Customers",
        path: "/customers",
        icon: <GroupsIcon />
    },
    {
        name: "Booths",
        path: "/booths",
        icon: <StoreIcon />
    },
    {
        name: "Check-In",
        path: "/checkin",
        icon: <QrCodeScannerIcon />
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: <BarChartIcon />
    }

];

const Sidebar = () => {

    const location = useLocation()

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
        >

            <Toolbar>
                <h2>EVENT</h2>
            </Toolbar>

            <List>
                {
                    menu.map((item) => (
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            selected={location.pathname === item.path}
                            key={item.name}
                        >

                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText
                                primary={item.name}
                            />

                        </ListItemButton>
                    ))
                }

            </List>
        </Drawer>
    )
}

export default Sidebar