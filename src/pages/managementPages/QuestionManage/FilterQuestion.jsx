import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const FilterQuestion = ({ onFilterChange }) => {
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
        <InputLabel>Category</InputLabel>
        <Select value={status} onChange={handleStatusChange} label="Category">
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="interest">Interest</MenuItem>
          <MenuItem value="Goal">Goal</MenuItem>
          <MenuItem value="Factor">Factor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterQuestion;
