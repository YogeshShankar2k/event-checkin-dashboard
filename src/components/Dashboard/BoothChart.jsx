import { Paper } from "@mui/material";

import {

    Chart,

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

} from "chart.js";

import { Bar } from "react-chartjs-2";

Chart.register(

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

);

const BoothChart = ({ booths }) => {

    const data = {

        labels: booths.map(x => x.name),

        datasets: [

            {

                label: "Occupied",

                data: booths.map(x => x.occupied)

            }

        ]

    }

    return (

        <Paper

            sx={{

                p: 3,

                borderRadius: 3

            }}

        >

            <Bar data={data} />

        </Paper>

    )

}

export default BoothChart