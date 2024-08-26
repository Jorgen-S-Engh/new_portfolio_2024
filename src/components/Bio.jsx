import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

function getBirthday() {
  const birthday = new Date("July 13, 1988");
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();

  if (today.getMonth() < birthday.getMonth()) {
    age -= 1;
  }
  return age;
}
const age = getBirthday();

function Bio() {
  return (
    <>
      <Box>
        <h3 className="main-headline">Info</h3>
        <TableContainer>
          <Table sx={{ fontFamily: "Poppins" }}>
            <TableBody>
              <TableRow sx={{ backgroundColor: "#1D1D1D" }}>
                <TableCell sx={{ border: "none", color: "white" }}>
                  Age:
                </TableCell>
                <TableCell sx={{ border: "none", color: "white" }}>
                  {age}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#000000" }}>
                <TableCell sx={{ border: "none", color: "white" }}>
                  Location:
                </TableCell>
                <TableCell sx={{ border: "none", color: "white" }}>
                  Kristiansand, Norway
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#1D1D1D" }}>
                <TableCell sx={{ border: "none", color: "white" }}>
                  Email:
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  <a href="mailto:jorgen.we@outlook.com">
                    jorgen.we@outlook.com
                  </a>
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#000000" }}>
                <TableCell sx={{ border: "none", color: "white" }}>
                  Phone:
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  <a href="tel:+4747079986" style={{ color: "white" }}>
                    +47 47079986
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Bio;
