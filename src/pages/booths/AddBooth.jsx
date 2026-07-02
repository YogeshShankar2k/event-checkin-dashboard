import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../components/Common/Layout";
import BoothForm from "../../components/Booth/BoothForm";

import { createBooth } from "../../services/boothService";

const AddBooth = () => {
    const navigate = useNavigate();

    const defaultValues = {
        name: "",
        capacity: "",
        occupied: 0,
        status: "Available",
    };

    const onSubmit = async (data) => {
        try {
            const payload = {
                ...data,
                id: uuid(),
                capacity: Number(data.capacity),
                occupied: Number(data.occupied),
            };

            await createBooth(payload);

            toast.success("Booth Added Successfully");

            navigate("/booths");
        } catch (error) {
            console.error(error);
            toast.error("Failed to Add Booth");
        }
    };

    return (
        <Layout>
            <BoothForm
                defaultValues={defaultValues}
                onSubmit={onSubmit}
                submitText="Add Booth"
            />
        </Layout>
    );
};

export default AddBooth;