import { Box, Typography } from "@mui/material";

const EmptyState = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
                mt: 8,
            }}
        >
            <Typography
                variant="h5"
                color="gray"
            >
                No Customers Found
            </Typography>
        </Box>
    );
};

export default EmptyState;