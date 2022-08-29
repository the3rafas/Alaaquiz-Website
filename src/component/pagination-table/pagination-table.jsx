import * as React from "react";
import "./pagination-table.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import { fontSize } from "@mui/system";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000090",
    color: theme.palette.common.white,
    fontSize: 19,
    textAlign: "center",
    fontFamily: "Cairo",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      padding: 0,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Cairo",
    fontSize: 17,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function PaginationTable({
  rows,
  handleDelete,
  setEditData,
  setOpenEdit,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handelEditButton = (data) => {
    setOpenEdit(true);
    setEditData(data);
  };

  const rowStyle = {};

  return (
    <TableContainer
      component={Paper}
      sx={{ height: "550px", direction: "rtl" }}
    >
      <Table
        size="small"
        sx={{ fontFamily: "Cairo" }}
        aria-label="custom pagination dense table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">الأسم</StyledTableCell>
            <StyledTableCell align="right">المادة</StyledTableCell>
            <StyledTableCell align="right">الصف</StyledTableCell>
            <StyledTableCell align="right">
              <SettingsIcon />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            ? (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id} sx={{ height: 30 }}>
                  <StyledTableCell align="right" sx={rowStyle}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={rowStyle}>
                    {row.subject}
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={rowStyle}>
                    {row.class}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <EditIcon
                      sx={{ cursor: "pointer", fontSize: 20 }}
                      onClick={() => handelEditButton(row)}
                    />
                    <DeleteIcon
                      onClick={() => handleDelete(row.id)}
                      sx={{ cursor: "pointer", marginRight: 1, fontSize: 20 }}
                    />
                  </StyledTableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{ direction: "ltr", fontFamily: "Cairo" }}
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={rows && rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              labelRowsPerPage={"عدد الصفوف في الصفحة"}
              onPageChange={handleChangePage}
              //onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
