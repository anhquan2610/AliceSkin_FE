import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function FilterOrder({ status, onStatusChange }) {
  return (
    <FormControl fullWidth variant="outlined" size="small">
      <InputLabel>Order Status</InputLabel>
      <Select
        label="Order Status"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Waiting for Delivery">Waiting for Delivery</MenuItem>
      </Select>
    </FormControl>
  );
}
