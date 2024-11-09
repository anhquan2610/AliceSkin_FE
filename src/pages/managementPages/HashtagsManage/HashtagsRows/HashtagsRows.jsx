import { Button, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import UpdateHastagsModal from "../HashtagsModal/UpdateHastagsModal";
import { useState } from "react";

export default function HashtagsRows({ hashtag }) {
  const dispatch = useDispatch();
  const [openUpdate, setOpenUpdate] = useState(false);

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{hashtag.name}</TableCell>
        <TableCell>{hashtag.usage_count}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--green-fresh)" }}
            startIcon={<UpgradeOutlinedIcon />}
            onClick={handleClickOpenUpdate}
          >
            Update
          </Button>
        </TableCell>
      </TableRow>

      <UpdateHastagsModal
        open={openUpdate}
        handleClose={handleCloseUpdate}
        hashtag={hashtag}
      />
    </>
  );
}
