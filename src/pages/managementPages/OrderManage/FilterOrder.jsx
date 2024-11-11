import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FilterOrder = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ searchTerm: e.target.value, status });
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onFilterChange({ searchTerm, status: e.target.value });
  };

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <TextField
        label="Search here...."
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <FormControl variant="outlined" sx={{ width: "var(--s-30)" }}>
        <InputLabel id="role-select-label">Status</InputLabel>
        <Select
          labelId="role-select-label"
          value={status}
          onChange={handleStatusChange}
          label="Status"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Waiting for Delivery">Waiting for Delivery</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterOrder;
