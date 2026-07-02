import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import CustomerList from "../pages/customers/CustomerList";
import AddCustomer from "../pages/customers/AddCustomer";
import EditCustomer from "../pages/customers/EditCustomer";
import CustomerDetails from "../pages/customers/CustomerDetails";

import BoothList from "../pages/booths/BoothList";

import CheckIn from "../pages/checkin/CheckIn";

import Analytics from "../pages/analytics/Analytics";

import NotFound from "../pages/NotFound";
import AddBooth from "../pages/booths/AddBooth";
import EditBooth from "../pages/booths/EditBooth";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/add" element={<AddCustomer />} />
                <Route path="/customers/edit/:id" element={<EditCustomer />} />
                <Route path="/customers/:id" element={<CustomerDetails />} />

                <Route path="/booths" element={<BoothList />} />

                <Route path="/checkin" element={<CheckIn />} />

                <Route path="/analytics" element={<Analytics />} />

                <Route path="*" element={<NotFound />} />
                <Route path="/booths" element={<BoothList />} />

                <Route path="/booths/add" element={<AddBooth />} />

                <Route path="/booths/edit/:id" element={<EditBooth />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;