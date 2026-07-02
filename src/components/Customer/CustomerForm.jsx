import {
    Grid,
    TextField,
    MenuItem,
    Button,
    Paper,
    Stack,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerSchema } from "../../utils/validation";

const CustomerForm = ({
    defaultValues,
    onSubmit,
    submitText,
}) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(customerSchema),
    });

    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                borderRadius: 3,
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Customer Name"
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Email"
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Phone"
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="company"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Company"
                                    error={!!errors.company}
                                    helperText={errors.company?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="ticketType"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    fullWidth
                                    label="Ticket Type"
                                    error={!!errors.ticketType}
                                    helperText={errors.ticketType?.message}
                                >
                                    <MenuItem value="VIP">VIP</MenuItem>
                                    <MenuItem value="Regular">Regular</MenuItem>
                                </TextField>
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="status"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    fullWidth
                                    label="Status"
                                    error={!!errors.status}
                                    helperText={errors.status?.message}
                                >
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Checked-In">Checked-In</MenuItem>
                                    <MenuItem value="Checked-Out">Checked-Out</MenuItem>
                                </TextField>
                            )}
                        />
                    </Grid>
                </Grid>

                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    mt={4}
                >
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        {submitText}
                    </Button>
                </Stack>

            </form>
        </Paper>
    );
};

export default CustomerForm;