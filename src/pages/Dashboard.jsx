import { useEffect, useState } from "react";

import {

  Grid,

  Typography

} from "@mui/material";

import Layout from "../components/Common/Layout";

import DashboardCards from "../components/Dashboard/DashboardCards";

import RecentActivity from "../components/Dashboard/RecentActivity";

import StatusChart from "../components/Dashboard/StatusChart";

import BoothChart from "../components/Dashboard/BoothChart";

import Loader from "../components/Common/Loader";

import api from "../api/axios";

const Dashboard = () => {

  const [customers, setCustomers] = useState([]);

  const [booths, setBooths] = useState([]);

  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const customerRes = await api.get("/customers");

      const boothRes = await api.get("/booths");

      const activityRes = await api.get("/activities");

      setCustomers(customerRes.data);

      setBooths(boothRes.data);

      setActivities(activityRes.data);

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  }

  if (loading) {

    return <Loader />

  }

  return (

    <Layout>

      <Typography

        variant="h4"

        mb={3}

        fontWeight="bold"

      >

        Dashboard

      </Typography>

      <DashboardCards

        customers={customers}

        booths={booths}

      />

      <Grid

        container

        spacing={3}

        mt={1}

      >

        <Grid size={{ xs: 12, md: 6 }}>

          <StatusChart

            customers={customers}

          />

        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>

          <BoothChart

            booths={booths}

          />

        </Grid>

        <Grid size={12}>

          <RecentActivity

            activities={activities}

          />

        </Grid>

      </Grid>

    </Layout>

  )

}

export default Dashboard