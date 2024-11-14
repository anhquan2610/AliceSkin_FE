import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BrandFilter({ selectedBrands, onBrandChange, brands }) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md")); 

  const handleBrandChange = (event) => {
    const brand = event.target.name;
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newSelectedBrands);
  };

  const labelStyle = {
    fontSize: isMobileView ? "0.775rem" : "1rem", 
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={labelStyle}>
        Filter by Brand:
      </FormLabel>
      {brands.map((brand) => (
        <FormControlLabel
          key={brand.brand_id}
          control={
            <Checkbox
              checked={selectedBrands.includes(brand.name)}
              onChange={handleBrandChange}
              name={brand.name}
            />
          }
          label={<span style={labelStyle}>{brand.name}</span>} // Áp dụng kiểu cho nhãn
        />
      ))}
    </FormControl>
  );
}
