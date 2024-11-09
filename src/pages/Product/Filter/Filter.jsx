import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";

export default function PriceFilter({ priceFilter, onPriceFilterChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter by Price: </FormLabel>
      <RadioGroup value={priceFilter} onChange={onPriceFilterChange}>
        <FormControlLabel value="none" control={<Radio />} label="None" />
        <FormControlLabel value="0-50000" control={<Radio />} label="0 - 50.000 VNĐ" />
        <FormControlLabel
          value="50000-100000"
          control={<Radio />}
          label="50.000-100.000 VNĐ"
        />
        <FormControlLabel
          value="100000+"
          control={<Radio />}
          label="100.000 VNĐ trở lên"
        />
      </RadioGroup>
    </FormControl>
  );
}
