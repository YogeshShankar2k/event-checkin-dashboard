import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getBooths, deleteBooth } from "../../services/boothService";
import { toast } from "react-toastify";
import Layout from "../../components/Common/Layout";

const BoothList = () => {
  const [booths, setBooths] = useState([]);
  const navigate = useNavigate();

  const loadBooths = async () => {
    const res = await getBooths();
    setBooths(res.data);
  };

  useEffect(() => {
    loadBooths();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Booth?")) return;
    await deleteBooth(id);
    toast.success("Deleted");
    loadBooths();
  };

  return (
    <Layout>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Booths</Typography>
        <Button variant="contained" onClick={() => navigate("/booths/add")}>
          Add Booth
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Occupied</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {booths.map((b) => (
              <TableRow key={b.id}>
                <TableCell>{b.name}</TableCell>
                <TableCell>{b.capacity}</TableCell>
                <TableCell>{b.occupied}</TableCell>
                <TableCell>{b.status}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => navigate(`/booths/edit/${b.id}`)}>
                    Edit
                  </Button>

                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(b.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default BoothList;