import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";

import Layout from "../../components/Common/Layout";
import CustomerTable from "../../components/Customer/CustomerTable";
import Loader from "../../components/Common/Loader";
import EmptyState from "../../components/Common/EmptyState";

import {
  getCustomers,
  deleteCustomer,
} from "../../services/customerService";

import { toast } from "react-toastify";
import ConfirmDialog from "../../components/Common/ConfirmDialog";

const CustomerList = () => {

  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCustomers();

  }, []);

  const fetchCustomers = async () => {

    try {

      const res = await getCustomers();
      setCustomers(res.data);
      setFilteredCustomers(res.data);

    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch customers");
    } finally {
      setLoading(false);
    }

  };

  const handleSearch = (value) => {

    setSearch(value);

    const result = customers.filter((customer) =>
      customer.name.toLowerCase().includes(value.toLowerCase()) ||

      customer.email.toLowerCase().includes(value.toLowerCase()) ||
      customer.company.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCustomers(result);

  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteCustomer(selectedId);
      setCustomers((prev) =>
        prev.filter((c) => c.id !== selectedId)
      );
      setFilteredCustomers((prev) =>
        prev.filter((c) => c.id !== selectedId)
      );
      toast.success("Customer deleted");
    } catch {
      toast.error("Delete failed");
    } finally {
      setDialogOpen(false);
      setSelectedId(null);
    }
  };
  if (loading) return <Loader />;

  return (

    <Layout>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          Customers
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            navigate("/customers/add")
          }
        >
          Add Customer
        </Button>

      </Box>
      <TextField
        fullWidth
        placeholder="Search by Name / Email / Company..."
        value={search}
        onChange={(e) =>
          handleSearch(e.target.value)
        }
        sx={{
          mb: 3,
        }}
      />
      {
        filteredCustomers.length === 0 ?
          <EmptyState />
          :
          <CustomerTable
            customers={filteredCustomers}
            onDelete={handleDelete}
          />
      }
      <ConfirmDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Customer"
        message="Are you sure you want to delete this customer?"
      />
    </Layout>
  );

};

export default CustomerList;