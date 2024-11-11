import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function FilterMyBlog({ status, onStatusChange }) {
  return (
    <FormControl fullWidth variant="outlined" size="small">
      <InputLabel>My BLog Status</InputLabel>
      <Select
        label="Order Status"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="published">Published</MenuItem>
        <MenuItem value="draft">Draft</MenuItem>
      </Select>
    </FormControl>
  );
}
