import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from "@mui/material";

const ConfirmDialog = ({
    open,
    title = "Confirm",
    message = "Are you sure?",
    onClose,
    onConfirm,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                <Typography>
                    {message}
                </Typography>
            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={onConfirm}
                >
                    Delete
                </Button>

            </DialogActions>

        </Dialog>
    );
};

export default ConfirmDialog;