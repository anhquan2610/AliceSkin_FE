import React, { useState } from "react";
import {
  TextField,
 
} from "@mui/material";

const FilterShipping = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ searchTerm: e.target.value, status });
  };

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <TextField
        label="Search here...."
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default FilterShipping;
