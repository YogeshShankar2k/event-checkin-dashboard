import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Layout from "../../components/Common/Layout";

import CustomerForm from "../../components/Customer/CustomerForm";

import Loader from "../../components/Common/Loader";

import {
  getCustomer,
  updateCustomer,
} from "../../services/customerService";

import { toast } from "react-toastify";

const EditCustomer = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    try {
      const res = await getCustomer(id);
      setCustomer(res.data);
    } catch {
      toast.error("Unable to load customer");
    }
  };

  const onSubmit = async (data) => {
    try {

      await updateCustomer(id, {
        ...customer,
        ...data,
      });

      toast.success("Customer Updated Successfully");

      navigate("/customers");

    } catch {

      toast.error("Update Failed");

    }
  };

  if (!customer) return <Loader />;

  return (

    <Layout>

      <CustomerForm
        defaultValues={customer}
        onSubmit={onSubmit}
        submitText="Update Customer"
      />

    </Layout>

  );

};

export default EditCustomer;