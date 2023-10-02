import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SportsVolleyballOutlinedIcon from "@mui/icons-material/SportsVolleyballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsRugbyTwoToneIcon from "@mui/icons-material/SportsRugbyTwoTone";
import Avatar from "@mui/material/Avatar";

import "../styles/SideBar.scss";
import {sports} from '../data/data.js'

const drawerWidth = 220;

export default function SideBar({ handleAccordianClick }) {
  const handleAccordianChange = (e, expanded, id) => {
    sports.map((item) => {
      if (item.id == id && expanded && (item.id !== "3" || item.id !== "4")) {
        item.expanded = true;
      } else if (item.id == id && !expanded) {
        item.expanded = false;
      } else {
        item.expanded = false;
      }
    });
    if (expanded) {
      handleAccordianClick(id);
    }
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <SportsRugbyTwoToneIcon
          style={{ color: "#62208C", borderColor: "white", fill: "white" }}
        />
        Sportia
      </Toolbar>
      <Typography
        sx={{
          mb: 1.5,
          fontSize: "0.8rem",
          paddingTop: "0.2rem",
          marginLeft: "1.5rem",
        }}
        color="text.secondary"
      >
        Sports
      </Typography>
      <List>
        {sports.map((item) => (
          <Accordion
            key={item.id}
            id={item.id}
            expanded={item.expanded}
            disableGutters
            disabled={item.id == "3" || item.id == "4"}
            onChange={(e, expanded) =>
              handleAccordianChange(e, expanded, item.id)
            }
          >
            <AccordionSummary
              sx={
                item.expanded
                  ? {
                      backgroundColor: "#62208C",
                      marginRight: "1rem",
                      marginLeft: "1rem",
                      borderRadius: "8px",
                    }
                  : {
                      marginRight: "1rem",
                      marginLeft: "1rem",
                      borderRadius: "8px",
                    }
              }
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={item.id}
            >
              <div>
                {item.text == "Football" ? (
                  <SportsSoccerOutlinedIcon />
                ) : item?.text == "Baseball" ? (
                  <SportsBaseballOutlinedIcon />
                ) : item.text == "Volleyball" ? (
                  <SportsVolleyballOutlinedIcon />
                ) : item.text == "Basketball" ? (
                  <SportsBasketballOutlinedIcon />
                ) : (
                  ""
                )}
              </div>
              <Typography sx={{ paddingLeft: "0.5rem" }}>
                {item.text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {item?.leagueNames?.map((league, index) => (
                  <ListItem key={league.name}>
                    <ListItemButton>
                      <Avatar
                        alt="Remy Sharp"
                        src={league.logo}
                        sx={{ height: "1.5rem", width: "1.5rem" }}
                      />
                      <Typography
                        sx={{ fontSize: "0.8rem", marginLeft: "0.5rem" }}
                      >
                        {league.name}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Drawer>
  );
}
