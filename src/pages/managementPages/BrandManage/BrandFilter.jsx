import React, { useState } from "react";
import { TextField } from "@mui/material";

const BrandFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ searchTerm: e.target.value });
  };

  return (
    <div style={{ display: "flex", marginBottom: "16px" }}>
      <TextField
        label="Search by Name..."
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default BrandFilter;
