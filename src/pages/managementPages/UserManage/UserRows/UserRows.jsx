import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../../../../store/userSlice";
import DeleteUserModal from "../UserModal/DeleteUserModal";
import { useState } from "react";
import  { notifySuccess } from "../../../../utils/Nontification.utils";

export default function UserRows({ user }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteUser = () => {
    dispatch(DeleteUser(user.id))
      .unwrap()
      .then(() => notifySuccess("Delete user successfully"))
      .then(() => {
        handleClose();
      });
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" align="left">
          {user.name}
        </TableCell>
        <TableCell align="left">{user.email}</TableCell>
        <TableCell align="left">{user.role}</TableCell>
        <TableCell align="left">{user.gender}</TableCell>
        <TableCell align="left">{user.dob}</TableCell>
        <TableCell align="left">{user.phone}</TableCell>
        <TableCell align="left">{user.address || "null"}</TableCell>
        <TableCell align="left">
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
      <DeleteUserModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteUser}
      />
    </>
  );
}
