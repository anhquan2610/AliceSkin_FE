import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./UserManage.styled";
import UserRows from "./UserRows/UserRows";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ListAllUsers } from "../../../store/userSlice";
import UserFilter from "./UserFilter";

export default function UserManage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    dispatch(ListAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleFilterChange = (filters) => {
    const { searchTerm, role } = filters;
    let filtered = users;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)
      );
    }

    if (role) {
      filtered = filtered.filter((user) => user.role === role);
    }

    setFilteredUsers(filtered);
  };

  return (
    <S.Container>
      <S.Title>User Manage</S.Title>

      <UserFilter onFilterChange={handleFilterChange} />

      <S.Description>List of users</S.Description>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name&nbsp;</TableCell>
              <TableCell align="left">Email&nbsp;</TableCell>
              <TableCell align="left">Role&nbsp;</TableCell>
              <TableCell align="left">Gender&nbsp;</TableCell>
              <TableCell align="left">Dob&nbsp;</TableCell>
              <TableCell align="left">Phone&nbsp;</TableCell>
              <TableCell align="left">Address&nbsp;</TableCell>
              <TableCell align="left">Actions&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <UserRows key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.Container>
  );
}
