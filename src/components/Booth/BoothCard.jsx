import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    LinearProgress,
    IconButton,
    Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";

const BoothCard = ({
    booth,
    onEdit,
    onDelete,
}) => {

    const percentage = Math.round(
        (booth.occupied / booth.capacity) * 100
    );

    const getColor = () => {

        switch (booth.status) {

            case "Available":
                return "success";

            case "Occupied":
                return "error";

            case "Maintenance":
                return "warning";

            default:
                return "default";

        }

    };

    return (

        <Card
            elevation={3}
            sx={{
                borderRadius: 3,
                height: "100%",
            }}
        >
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >
                        {booth.name}
                    </Typography>
                    <Chip
                        label={booth.status}
                        color={getColor()}
                    />
                </Stack>

                <Stack
                    direction="row"
                    spacing={1}
                    mt={3}
                    alignItems="center"
                >
                    <StoreIcon />
                    <Typography>
                        Capacity :
                        <b> {booth.capacity}</b>
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={1}
                    mt={2}
                    alignItems="center"
                >
                    <PeopleIcon />
                    <Typography>
                        Occupied :
                        <b> {booth.occupied}</b>
                    </Typography>
                </Stack>

                <LinearProgress
                    variant="determinate"
                    value={percentage}
                    sx={{
                        mt: 3,
                        height: 10,
                        borderRadius: 5,
                    }}
                />

                <Typography
                    mt={1}
                    color="text.secondary"
                >
                    {percentage}% Occupied
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="flex-end"
                    mt={3}
                >
                    <Tooltip title="Edit">
                        <IconButton
                            color="warning"
                            onClick={() => onEdit(booth.id)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <IconButton
                            color="error"
                            onClick={() => onDelete(booth.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </CardContent>
        </Card>

    );

};

export default BoothCard;