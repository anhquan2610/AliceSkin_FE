import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteBrandModal from "../BrandsModal/DeleteBrandModal";
import { deleteBrandById } from "../../../../store/brandSlice";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import UpdateBrandModal from "../BrandsModal/UpdateBrandModal";
import ViewIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export default function BrandsRows({ brand }) {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteBrand = () => {
    dispatch(deleteBrandById(brand.brand_id))
      .unwrap()
      .then(() => {
        handleClose();
      });
  };

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>
          <img
            src={brand.image}
            alt={brand.name}
            style={{
              aspectRatio: "16/9",
              width: "150px",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </TableCell>
        <TableCell
          component="th"
          align="left"
          style={{
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {brand.name}
        </TableCell>
        <TableCell
          style={{
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {brand.description}
        </TableCell>
        <TableCell>
          <Link
            to={{
              pathname: `/manage/brands/${brand.brand_id}`,
              state: { brand_id: brand.brand_id },
            }}
          >
            <Button
              variant="outlined"
              sx={{ marginRight: 2 }}
              size="small"
              color="success"
              startIcon={<ViewIcon />}
            >
              View
            </Button>
          </Link>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--green-fresh)" , marginRight: 2 }}
            startIcon={<UpgradeOutlinedIcon />}
            onClick={handleClickOpenUpdate}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"

            startIcon={<DeleteIcon />}
            onClick={handleClickOpen}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <UpdateBrandModal
        open={openUpdate}
        handleClose={handleCloseUpdate}
        brand={brand}
      />

      <DeleteBrandModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteBrand}
      />
    </>
  );
}
