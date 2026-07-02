import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { toast } from "react-toastify";

import Layout from "../../components/Common/Layout";

import Loader from "../../components/Common/Loader";

import CustomerCard from "../../components/Customer/CustomerCard";

import { getCustomer } from "../../services/customerService";

import { getBooths } from "../../services/boothService";

import {
  updateCustomerStatus,
  assignCustomerBooth,
  addActivity,
} from "../../services/qrService";

const CustomerDetails = () => {

  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  const [booths, setBooths] = useState([]);

  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const selectedBooth =
    booths.find((b) => b.id === customer?.boothId)?.name || "Not Assigned";
  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const customerRes = await getCustomer(id);

      const boothRes = await getBooths();

      setCustomer(customerRes.data);

      setBooths(boothRes.data);

    } catch {

      toast.error("Unable to load customer");

    } finally {

      setLoading(false);

    }

  };

  const saveActivity = async (type) => {

    await addActivity({

      customer: customer.name,

      type,

      time: new Date().toLocaleTimeString(),

    });

  };

  const handleCheckIn = async () => {

    if (customer.status === "Checked-In") {
      toast.info("Customer is already Checked-In");
      return;
    }

    try {

      setProcessing(true);

      await updateCustomerStatus(id, {
        status: "Checked-In",
        checkedInAt: new Date().toLocaleString(),
      });

      await saveActivity("Check-In");

      toast.success("Customer Checked-In Successfully");

      await loadData();

    } catch (error) {

      console.error(error);

      toast.error("Unable to Check-In");

    } finally {

      setProcessing(false);

    }

  };

  const handleCheckOut = async () => {

    if (customer.status === "Checked-Out") {
      toast.info("Customer is already Checked-Out");
      return;
    }

    try {

      setProcessing(true);

      await updateCustomerStatus(id, {
        status: "Checked-Out",
      });

      await saveActivity("Check-Out");

      toast.success("Customer Checked-Out Successfully");

      await loadData();

    } catch (error) {

      console.error(error);

      toast.error("Unable to Check-Out");

    } finally {

      setProcessing(false);

    }

  };

  const handleBoothChange = async (event) => {

    try {

      await assignCustomerBooth(id, event.target.value);

      toast.success("Booth Assigned");

      loadData();

    } catch {

      toast.error("Assignment Failed");

    }

  };

  if (loading) return <Loader />;

  return (

    <Layout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Customer Details
      </Typography>

      <Box mb={3}>

        <FormControl
          fullWidth
        >

          <InputLabel>

            Assign Booth

          </InputLabel>

          <Select
            value={customer.boothId || ""}
            label="Assign Booth"
            onChange={handleBoothChange}
          >

            {booths.map((booth) => (

              <MenuItem
                key={booth.id}
                value={booth.id}
              >
                {booth.name}
              </MenuItem>

            ))}

          </Select>

        </FormControl>

      </Box>

      <Typography
        sx={{
          mb: 3,
          color: "gray"
        }}
      >

        Checked In Time :

        <b>

          {

            customer.checkedInAt
              ?

              customer.checkedInAt

              :

              " Not Checked In"

          }

        </b>

      </Typography>

      <CustomerCard

        customer={{
          ...customer,
          boothName: selectedBooth,
        }}

        processing={processing}

        onCheckIn={handleCheckIn}

        onCheckOut={handleCheckOut}

      />

    </Layout>

  );

};

export default CustomerDetails;