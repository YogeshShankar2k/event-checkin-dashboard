import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Chip,
    IconButton,
    Tooltip,
    Stack,
    Typography,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";

const CustomerTable = ({ customers, onDelete }) => {
    const navigate = useNavigate();

    const getStatusColor = (status) => {
        switch (status) {
            case "Checked-In":
                return "success";

            case "Pending":
                return "warning";

            case "Checked-Out":
                return "error";

            default:
                return "default";
        }
    };

    return (
        <TableContainer
            component={Paper}
            elevation={3}
            sx={{
                borderRadius: 3,
            }}
        >
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            background: "#1976d2",
                        }}
                    >
                        <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                            Name
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                            Email
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                            Phone
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                            Company
                        </TableCell>

                        <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                            Ticket
                        </TableCell>

                        <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                            Status
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ color: "#fff", fontWeight: 700 }}
                        >
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {customers.map((customer) => (

                        <TableRow
                            hover
                            key={customer.id}
                        >
                            <TableCell>
                                <Typography fontWeight="600">
                                    {customer.name}
                                </Typography>
                            </TableCell>

                            <TableCell>
                                {customer.email}
                            </TableCell>

                            <TableCell>
                                {customer.phone}
                            </TableCell>
                            <TableCell>
                                {customer.company}
                            </TableCell>
                            <TableCell>
                                {customer.ticketType}
                            </TableCell>
                            <TableCell>
                                <Chip
                                    label={customer.status}
                                    color={getStatusColor(customer.status)}
                                    size="small"
                                />
                            </TableCell>

                            <TableCell align="center">

                                <Stack
                                    direction="row"
                                    spacing={1}
                                    justifyContent="center"
                                >
                                    <Tooltip title="View">
                                        <IconButton
                                            color="primary"
                                            onClick={() =>
                                                navigate(`/customers/${customer.id}`)
                                            }
                                        >
                                            <VisibilityIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">

                                        <IconButton
                                            color="warning"
                                            onClick={() =>
                                                navigate(`/customers/edit/${customer.id}`)
                                            }
                                        >
                                            <EditIcon />
                                        </IconButton>

                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            color="error"
                                            onClick={() => onDelete(customer.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </TableCell>
                        </TableRow>

                    ))}

                </TableBody>

            </Table>
        </TableContainer>
    );
};

export default CustomerTable;