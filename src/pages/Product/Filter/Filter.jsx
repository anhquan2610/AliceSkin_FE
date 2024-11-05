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
        <FormControlLabel value="0-50" control={<Radio />} label="0$ - 50$" />
        <FormControlLabel
          value="50-100"
          control={<Radio />}
          label="50$ - 100$"
        />
        <FormControlLabel
          value="100+"
          control={<Radio />}
          label="100$ - Infinity"
        />
      </RadioGroup>
    </FormControl>
  );
}
