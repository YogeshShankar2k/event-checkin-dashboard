import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { toast } from "react-toastify";
import api from "../api/axios";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const res = await api.get(
                `/users?email=${email}&password=${password}`
            );

            if (res.data.length === 0) {
                toast.error("Invalid Credentials");
                return;
            }

            localStorage.setItem("user", JSON.stringify(res.data[0]));

            toast.success(`Welcome ${res.data[0].name}`);

            navigate("/");
        } catch {
            toast.error("Login Failed");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 10 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="h4" mb={3}>
                    Event Check-In Dashboard
                </Typography>

                <Stack spacing={3}>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        onClick={login}
                    >
                        Login
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
};

export default Login;