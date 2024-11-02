import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

export default function ProductFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ searchTerm: e.target.value, status });
  };

  const handleRoleChange = (e) => {
    setStatus(e.target.value);
    onFilterChange({ searchTerm, status: e.target.value });
  };

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FormControl variant="outlined" sx={{ width: "var(--s-30)" }}>
        <InputLabel id="role-select-label">Status</InputLabel>
        <Select
          labelId="role-select-label"
          value={status}
          onChange={handleRoleChange}
          label="Status"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="sold out">Sold Out</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
