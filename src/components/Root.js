import * as React from "react";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { useState } from "react";
import SportEvent from "./SportEvent";
import "../styles/Root.scss";
import NavBar from "./NavBar";

export default function Root() {
  const [sportTypeId, setSportTypeId] = useState("1");
  const handleAccordianClick = (id) => {
    setSportTypeId(id);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <SideBar handleAccordianClick={handleAccordianClick} />
      <SportEvent id={sportTypeId} />
    </Box>
  );
}
