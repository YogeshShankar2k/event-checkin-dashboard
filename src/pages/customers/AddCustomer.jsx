import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Common/Layout";
import CustomerForm from "../../components/Customer/CustomerForm";
import { createCustomer } from "../../services/customerService";

const AddCustomer = () => {

  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    ticketType: "",
    status: "Pending",
  };

  const onSubmit = async (data) => {

    const payload = {
      ...data,
      id: uuid(),
      boothId: "",
      checkedInAt: "",
      qrCode: "CUS-" + Date.now(),
    };

    try {
      await createCustomer(payload);
      toast.success("Customer Added Successfully");
      navigate("/customers");
    } catch {
      toast.error("Unable to add customer");

    }

  };

  return (

    <Layout>

      <CustomerForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        submitText="Add Customer"
      />

    </Layout>
  );

};

export default AddCustomer;