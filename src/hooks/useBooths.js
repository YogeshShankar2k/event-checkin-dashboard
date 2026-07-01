import { useEffect, useState } from "react";
import { getBooths } from "../services/boothService";

const useBooths = () => {
    const [booths, setBooths] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooths = async () => {
        try {
            const res = await getBooths();
            setBooths(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooths();
    }, []);

    return {
        booths,
        loading,
        fetchBooths,
    };
};

export default useBooths;