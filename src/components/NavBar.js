import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import LoginAvatarMan from "../logos/loginAvatarMan.jpg";

const drawerWidth = 220;

export default function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "rgb(18,18,18)",
        display: "flex",
      }}
    >
      <Toolbar sx={{ backgroundColor: "rgb(18,18,18)", display: "flex" }}>
        <Typography variant="h5" noWrap component="div" sx={{ flex: 1 }}>
          Welcome, Stacia!
        </Typography>
        <IconButton sx={{ marginRight: "1rem" }}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <Avatar
          alt="Remy Sharp"
          src={LoginAvatarMan}
          sx={{ marginLeft: "1rem" }}
        />
      </Toolbar>
    </AppBar>
  );
}
