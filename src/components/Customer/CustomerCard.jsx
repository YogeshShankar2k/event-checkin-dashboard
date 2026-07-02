import {
    Paper,
    Grid,
    Typography,
    Chip,
    Divider,
    Stack,
    Button,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import QrCode from "react-qr-code";

const CustomerCard = ({
    customer,
    processing,
    onCheckIn,
    onCheckOut,
}) => {

    const getColor = () => {
        switch (customer.status) {
            case "Checked-In":
                return "success";
            case "Checked-Out":
                return "error";
            default:
                return "warning";
        }
    };

    return (

        <Paper
            elevation={4}
            sx={{
                p: 4,
                borderRadius: 4,
            }}
        >
            <Grid
                container
                spacing={4}
            >
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                    >
                        {customer.name}
                    </Typography>
                    <Chip
                        label={customer.status}
                        color={getColor()}
                        sx={{
                            mt: 2,
                            mb: 3,
                        }}
                        variant="filled"

                        size="medium"
                    />
                    <Divider sx={{ mb: 3 }} />
                    <Stack spacing={2}>
                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                        >
                            <EmailIcon />
                            <Typography>

                                {customer.email}

                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                        >
                            <PhoneIcon />
                            <Typography>
                                {customer.phone}
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                        >
                            <BusinessIcon />
                            <Typography>
                                {customer.company}
                            </Typography>
                        </Stack>

                        <Typography>
                            Ticket :
                            <b> {customer.ticketType}</b>
                        </Typography>

                        <Typography>
                            Booth :
                            <b>
                                {customer.boothName || " Not Assigned"}
                            </b>
                        </Typography>

                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        mt={5}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            onClick={onCheckIn}
                            disabled={
                                processing ||
                                customer.status === "Checked-In"
                            }
                        >
                            Check In
                        </Button>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={onCheckOut}
                            disabled={
                                processing ||
                                customer.status === "Checked-Out"
                            }
                        >
                            Check Out
                        </Button>

                    </Stack>

                </Grid>

                <Grid
                    size={{ xs: 12, md: 4 }}
                    textAlign="center"
                >
                    <Typography
                        variant="h6"
                        mb={3}
                    >
                        Customer QR
                    </Typography>
                    <QrCode
                        value={customer.qrCode}
                        size={180}
                    />
                    <Typography
                        mt={3}
                        fontWeight="bold"
                    >
                        {customer.qrCode}
                    </Typography>
                    <Typography
                        mt={2}
                        color="text.secondary"
                    >
                        Scan this QR for Event Check-In
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );

};

export default CustomerCard;