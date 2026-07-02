import { Pie } from "react-chartjs-2";

import {
    Chart,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Paper } from "@mui/material";

Chart.register(
    ArcElement,
    Tooltip,
    Legend
);

const StatusChart = ({ customers }) => {

    const checked = customers.filter(
        x => x.status === "Checked-In"
    ).length;

    const pending = customers.filter(
        x => x.status === "Pending"
    ).length;

    const checkout = customers.filter(
        x => x.status === "Checked-Out"
    ).length;

    const data = {
        labels: ["Checked-In", "Pending", "Checked-Out"],
        datasets: [

            {

                data: [checked, pending, checkout]

            }
        ]
    };

    return (

        <Paper
            sx={{
                p: 3,
                borderRadius: 3
            }}
        >
            <Pie data={data} />
        </Paper>
    )
}

export default StatusChart