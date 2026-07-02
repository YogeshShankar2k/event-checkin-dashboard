import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Chip,
} from "@mui/material";
import { getCustomers } from "../../services/customerService";
import Layout from "../../components/Common/Layout";

const CheckIn = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  return (
    <Layout>
      <Typography variant="h4" mb={2}>
        Customer Check-In Status
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {customers.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>
                  <Chip
                    label={c.status}
                    color={
                      c.status === "Checked-In"
                        ? "success"
                        : c.status === "Checked-Out"
                          ? "error"
                          : "warning"
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default CheckIn;