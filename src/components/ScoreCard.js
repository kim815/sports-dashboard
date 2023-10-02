import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Star from './Star';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import AddchartIcon from "@mui/icons-material/Addchart";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import "../styles/ScoreCard.scss";

export default function ScoreCard({ matches, handleGraphModalOpen, gameId }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem(gameId) &&
      localStorage.getItem(gameId).length !== 0
    ) {
      setRows(JSON.parse(localStorage.getItem(gameId)));
    } else {
      setRows(matches);
    }
  }, [matches]);

  const onStarClick = (key) => {
    let updatedRows = [...rows];
    let idx = updatedRows.findIndex((x) => x.id == key);
    updatedRows[idx].starClicked = !updatedRows[idx].starClicked;
    localStorage.setItem(`${gameId}`, JSON.stringify(updatedRows));
    setRows(updatedRows);
  };

  const onGraphClick = (id) => {
    handleGraphModalOpen();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                <IconButton id={row.id} onClick={() => onStarClick(row.id)}>
                  {row.starClicked ? (
                    <StarIcon style={{ fill: "yellow" }} />
                  ) : (
                    <StarBorderIcon />
                  )}
                </IconButton>
              </TableCell>

              <TableCell
                component="th"
                scope="row"
                sx={idx % 2 == 0 ? { color: "#B22237" } : { color: "#58BD29" }}
              >
                {row.minutesLeft}
              </TableCell>

              <TableCell component="th" scope="row">
                <div style={{ display: "flex" }}>
                  <Box className="team-logo">
                    <Avatar
                      alt="Remy Sharp"
                      src={row.teamA.logo}
                      sx={{
                        height: "1rem",
                        width: "1rem",
                        alignSelf: "center",
                        marginTop: "0.2rem",
                      }}
                    />
                  </Box>
                  <div style={{ marginLeft: "0.4rem", marginTop: "0.4rem" }}>
                    {row.teamA.name}
                  </div>
                </div>
              </TableCell>

              <TableCell component="th" scope="row">
                <Box className="score-cell-container">
                  {row.teamA.score} : {row.teamB.score}
                </Box>
              </TableCell>

              <TableCell component="th" scope="row" align="right">
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ marginRight: "0.4rem", marginTop: "0.4rem" }}>
                    {row.teamB.name}
                  </div>
                  <Box className="team-logo">
                    <Avatar
                      alt="Remy Sharp"
                      src={row.teamB.logo}
                      sx={{
                        height: "1rem",
                        width: "1rem",
                        alignSelf: "center",
                        marginTop: "0.2rem",
                      }}
                    />
                  </Box>
                </div>
              </TableCell>

              <TableCell align="right">
                <IconButton id={row.id} onClick={() => onGraphClick(row.id)}>
                  {<AddchartIcon />}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
