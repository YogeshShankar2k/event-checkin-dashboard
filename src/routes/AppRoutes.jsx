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
import Login from "../pages/Login";
import ProtectedRoute from "../components/Common/ProtectedRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

                <Route path="/customers" element={<ProtectedRoute><CustomerList /></ProtectedRoute>} />
                <Route path="/customers/add" element={<ProtectedRoute><AddCustomer /></ProtectedRoute>} />
                <Route path="/customers/edit/:id" element={<ProtectedRoute><EditCustomer /></ProtectedRoute>} />
                <Route path="/customers/:id" element={<ProtectedRoute><CustomerDetails /></ProtectedRoute>} />

                <Route path="/booths" element={<ProtectedRoute><BoothList /></ProtectedRoute>} />

                <Route path="/checkin" element={<ProtectedRoute><CheckIn /></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />

                <Route path="*" element={<NotFound />} />
                <Route path="/booths" element={<ProtectedRoute><BoothList /></ProtectedRoute>} />

                <Route path="/booths/add" element={<ProtectedRoute><AddBooth /></ProtectedRoute>} />

                <Route path="/booths/edit/:id" element={<ProtectedRoute><EditBooth /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;