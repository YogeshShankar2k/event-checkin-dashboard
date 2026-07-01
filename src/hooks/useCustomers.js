import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

const useCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCustomers = async () => {
        try {
            const res = await getCustomers();
            setCustomers(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return {
        customers,
        loading,
        fetchCustomers,
    };
};

export default useCustomers;