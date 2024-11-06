import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

export default function UserFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ searchTerm: e.target.value, role });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    onFilterChange({ searchTerm, role: e.target.value });
  };

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <TextField
        label="Search by Name or Email"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FormControl variant="outlined" sx={{ width: "var(--s-30)" }}>
        <InputLabel id="role-select-label">Role</InputLabel>
        <Select
          labelId="role-select-label"
          value={role}
          onChange={handleRoleChange}
          label="Role"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="staff">Staff</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
