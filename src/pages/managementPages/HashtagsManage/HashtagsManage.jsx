import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./HashtagManage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllHastags } from "../../../store/hastagsSlice";
import HashtagsRows from "./HashtagsRows/HashtagsRows";
import AddHashtagsModal from "./HashtagsModal/AddHashtagsModal";
import HashtagFilter from "./HashtagFilter";

export default function HashtagsManage() {
  const dispatch = useDispatch();
  const hashtags = useSelector((state) => state.hastag.hastags);
  const [openAddHashtag, setOpenAddHashtag] = useState(false);
  const [filteredHashtags, setFilteredHashtags] = useState([]);

  useEffect(() => {
    setFilteredHashtags(Array.isArray(hashtags) ? hashtags : []);
  }, [hashtags]);

  const handleFilterChange = (filters) => {
    const { searchTerm } = filters;
    let filtered = Array.isArray(hashtags) ? [...hashtags] : [];

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((hashtag) =>
        hashtag.name.toLowerCase().includes(searchLower)
      );
    }

    setFilteredHashtags(filtered);
  };

  const handleOpenAddHashtag = () => {
    setOpenAddHashtag(true);
  };

  const handleCloseAddHashtag = () => {
    setOpenAddHashtag(false);
  };

  useEffect(() => {
    dispatch(getAllHastags());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Title>Hashtags Manage</S.Title>
      <HashtagFilter onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of hashtags</S.Description>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleOpenAddHashtag}
        >
          Add Hashtag
        </Button>
      </S.MiddleContainer>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hastag Name</TableCell>
              <TableCell>Post Count</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredHashtags.map((hashtag) => (
              <HashtagsRows key={hashtag.id} hashtag={hashtag} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddHashtagsModal
        open={openAddHashtag}
        handleClose={handleCloseAddHashtag}
      />
    </S.Container>
  );
}
