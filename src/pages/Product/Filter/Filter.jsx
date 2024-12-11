import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Select,
  MenuItem,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function PriceFilter({ priceFilter, onPriceFilterChange }) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const labelStyle = {
    fontSize: isMobileView ? "0.775rem" : "1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    // textOverflow: "ellipsis",
  };

  const maxLabelWidth = "100px";

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <Box sx={{ maxWidth: maxLabelWidth }}>
          <Typography variant="subtitle1" style={labelStyle}>
            Filter by Price:
          </Typography>
        </Box>
      </FormLabel>
      {isMobileView ? (
        <Select
          value={priceFilter}
          onChange={onPriceFilterChange}
          displayEmpty
          inputProps={{ "aria-label": "Filter by Price" }}
          sx={{
            fontSize: "0.775rem",
            maxWidth: maxLabelWidth,
          }}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="0-50000">0 - 50,000 VND</MenuItem>
          <MenuItem value="50000-100000">50,000 - 100,000 VND</MenuItem>
          <MenuItem value="100000+">100,000 VND or more</MenuItem>
        </Select>
      ) : (
        <RadioGroup value={priceFilter} onChange={onPriceFilterChange}>
          <FormControlLabel
            value="none"
            control={<Radio />}
            label={
              <Box sx={{ maxWidth: maxLabelWidth }}>
                <Typography style={labelStyle}>None</Typography>
              </Box>
            }
          />
          <FormControlLabel
            value="0-50000"
            control={<Radio />}
            label={
              <Box>
                <Typography style={labelStyle}>0 - 50,000 VND</Typography>
              </Box>
            }
          />
          <FormControlLabel
            value="50000-100000"
            control={<Radio />}
            label={
              <Box>
                <Typography style={labelStyle}>50,000 - 100,000 VND</Typography>
              </Box>
            }
          />
          <FormControlLabel
            value="100000+"
            control={<Radio />}
            label={
              <Box>
                <Typography style={labelStyle}>100,000 VND or more</Typography>
              </Box>
            }
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
