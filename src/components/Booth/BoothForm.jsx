import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { boothSchema } from "../../utils/validation";

import {
    Paper,
    Grid,
    TextField,
    Button,
    Stack,
    MenuItem,
} from "@mui/material";

const BoothForm = ({
    defaultValues,
    onSubmit,
    submitText,
}) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues,
        resolver: yupResolver(boothSchema),
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
                                    label="Booth Name"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="capacity"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="number"
                                    label="Capacity"
                                    fullWidth
                                    error={!!errors.capacity}
                                    helperText={errors.capacity?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="occupied"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type="number"
                                    label="Occupied"
                                    fullWidth
                                />
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
                                    label="Status"
                                    fullWidth
                                >
                                    <MenuItem value="Available">
                                        Available
                                    </MenuItem>

                                    <MenuItem value="Occupied">
                                        Occupied
                                    </MenuItem>

                                    <MenuItem value="Maintenance">
                                        Maintenance
                                    </MenuItem>
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
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {submitText}
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default BoothForm;