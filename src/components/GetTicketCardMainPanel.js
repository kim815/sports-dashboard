import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";
import IconButton from "@mui/material/IconButton";
import "../styles/GetCountryCardMainPanel.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const renderTicket = (matchTicket) => {
  return (
    <React.Fragment>
      <CardContent sx={{ display: "flex" }}>
        <div style={{ flexBasis: "30rem" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ padding: "1rem", fontWeight: "900" }}
          >
            {matchTicket?.teamA} vs {matchTicket?.teamB}
          </Typography>

          <Typography variant="body2" sx={{ padding: "1rem" }}>
            <div className="card-content">
              <CalendarTodayOutlinedIcon className="calendar-icon" />
              {matchTicket?.date}
            </div>
            <br />
            <div className="card-content">
              <StadiumOutlinedIcon className="calendar-icon" />
              {matchTicket?.stadium}
            </div>
          </Typography>
          <CardActions className="card-actions">
            <Box
              sx={{
                borderRadius: "8px",
                backgroundColor: "#7C45A0",
                paddingRight: "0.5rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.7rem",
              }}
            >
              Get a Ticket
              <IconButton size="small" sx={{ marginLeft: "0.5rem" }}>
                <ArrowForwardOutlinedIcon />
              </IconButton>
            </Box>
          </CardActions>
        </div>
        <img
          src={matchTicket?.logo}
          style={{
            height: "5%",
            width: "30%",
            flexBasis: "10rem",
            alignSelf: "flex-end",
          }}
        />
      </CardContent>
    </React.Fragment>
  );
};

export default function GetTicketCardMainPanel({ matchTicket }) {
  return (
    <Box sx={{ minWidth: 275, paddingBottom: "2rem", flexShrink: 0.5 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#62208C", borderRadius: "16px" }}
      >
        {renderTicket(matchTicket)}
      </Card>
    </Box>
  );
}
