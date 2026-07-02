import { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { getCustomers } from "../../services/customerService";
import { getBooths } from "../../services/boothService";
import Layout from "../../components/Common/Layout";
const Analytics = () => {
  const [customers, setCustomers] = useState([]);
  const [booths, setBooths] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const customerRes = await getCustomers();
    const boothRes = await getBooths();

    setCustomers(customerRes.data);
    setBooths(boothRes.data);
  };

  const checkedIn = customers.filter(
    (c) => c.status === "Checked-In"
  ).length;

  return (
    <Layout>
      <Typography variant="h4" mb={3}>
        Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Total Customers</Typography>
            <Typography variant="h3">{customers.length}</Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Checked-In</Typography>
            <Typography variant="h3">{checkedIn}</Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Total Booths</Typography>
            <Typography variant="h3">{booths.length}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Analytics;