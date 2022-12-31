import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Chip } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";

function createData(name, email) {
  return { name, email };
}
const Dashboard = () => {
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users")
      .then((res) => res.json())
      .then((data) => setRows(data.data));
  }, []);
  if (rows.length === 0) {
    return <Spinner></Spinner>;
  }
  console.log(rows.length);
  const handleRemove = (id) =>{
    console.log(id);
    fetch(`http://localhost:5000/api/v1/bus/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <TableContainer sx={{ width: "80%", position: "absolute", top: 120 }}>
        <Table sx={{ width: "70%", margin: "auto" }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#212529" }}>
              <TableCell sx={{ color: "white" }}>User Name</TableCell>
              <TableCell sx={{ color: "white" }}>User Email</TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleRemove(row._id)} sx={{ color: "red" }}>
                    <DeleteIcon></DeleteIcon>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
