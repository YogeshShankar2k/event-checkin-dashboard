import {
    Grid,
    Paper,
    Typography
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import StoreIcon from "@mui/icons-material/Store";

const DashboardCards = ({ customers, booths }) => {

    const total = customers.length;

    const checked = customers.filter(
        x => x.status === "Checked-In"
    ).length;

    const pending = customers.filter(
        x => x.status === "Pending"
    ).length;

    const totalBooths = booths.length;

    const cards = [

        {
            title: "Customers",
            value: total,
            icon: <GroupsIcon fontSize="large" />,
            color: "#1976d2"
        },

        {
            title: "Checked-In",
            value: checked,
            icon: <CheckCircleIcon fontSize="large" />,
            color: "#2e7d32"
        },

        {
            title: "Pending",
            value: pending,
            icon: <PendingIcon fontSize="large" />,
            color: "#ed6c02"
        },

        {
            title: "Booths",
            value: totalBooths,
            icon: <StoreIcon fontSize="large" />,
            color: "#9c27b0"
        }

    ];

    return (

        <Grid container spacing={3}>

            {

                cards.map(card => (

                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={card.title}>

                        <Paper

                            elevation={3}

                            sx={{

                                padding: 3,

                                borderRadius: 3,

                                display: "flex",

                                justifyContent: "space-between",

                                alignItems: "center"

                            }}

                        >

                            <div>

                                <Typography color="gray">

                                    {card.title}

                                </Typography>

                                <Typography

                                    variant="h4"

                                    fontWeight="bold"

                                >

                                    {card.value}

                                </Typography>

                            </div>

                            <div style={{ color: card.color }}>

                                {card.icon}

                            </div>

                        </Paper>

                    </Grid>

                ))

            }

        </Grid>

    )

}

export default DashboardCards