import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@mui/material";

export default function BrandFilter({ selectedBrands, onBrandChange, brands }) {
  const handleBrandChange = (event) => {
    const brand = event.target.name;
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newSelectedBrands);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter by Brand:</FormLabel>
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
          label={brand.name}
        />
      ))}
    </FormControl>
  );
}
