import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../components/Common/Layout";
import Loader from "../../components/Common/Loader";
import BoothForm from "../../components/Booth/BoothForm";

import {
    getBooth,
    updateBooth,
} from "../../services/boothService";

const EditBooth = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [booth, setBooth] = useState(null);

    useEffect(() => {
        loadBooth();
    }, []);

    const loadBooth = async () => {
        try {
            const res = await getBooth(id);
            setBooth(res.data);
        } catch {
            toast.error("Unable to load booth");
        }
    };

    const onSubmit = async (data) => {
        try {
            await updateBooth(id, {
                ...booth,
                ...data,
                capacity: Number(data.capacity),
                occupied: Number(data.occupied),
            });

            toast.success("Booth Updated Successfully");

            navigate("/booths");
        } catch {
            toast.error("Update Failed");
        }
    };

    if (!booth) return <Loader />;

    return (
        <Layout>
            <BoothForm
                defaultValues={booth}
                onSubmit={onSubmit}
                submitText="Update Booth"
            />
        </Layout>
    );
};

export default EditBooth;