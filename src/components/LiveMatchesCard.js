import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/LiveMatchesCard.scss";

const renderCard = (liveMatch) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ padding: "1rem", fontWeight: "900" }}
        >
          Live Matches
        </Typography>
        <Typography
          variant="h7"
          component="div"
          sx={{ paddingLeft: "1rem", fontWeight: "10" }}
        >
          Description about match
        </Typography>

        <Typography variant="body2" sx={{ padding: "1rem" }}>
          <div className="card-container">
            <div className="team-container">
              {/* {liveMatch?.teamA?.name == 'Barcelona' ? <img src={Barcelona} style={{ height: "4rem", width: "3rem" }} /> : liveMatch?.teamA?.name == 'Dodgers' ? <img src={Dodgers} style={{ height: "4rem", width: "3rem" }} /> : ''} */}
              <img
                src={liveMatch?.teamA?.logo}
                style={{ height: "4rem", width: "3rem" }}
              />
              {liveMatch?.teamA?.name}
            </div>
            <Box className="score-container">
              {liveMatch?.teamA?.score} : {liveMatch?.teamB?.score}
            </Box>
            <div className="team2-container">
              {/* {liveMatch?.teamB?.name == 'M. United' ? <img src={ManUnited} style={{ height: "4rem", width: "4rem" }} /> : liveMatch?.teamB?.name == 'Tampa Bay' ? <img src={Tampa} style={{ height: "4rem", width: "4rem" }} /> : ''} */}
              <img
                src={liveMatch?.teamB?.logo}
                style={{ height: "4rem", width: "4rem" }}
              />
              {liveMatch?.teamB?.name}
            </div>
          </div>
        </Typography>
        <CardActions className="card-actions">
          <Box
            sx={{
              borderRadius: "8px",
              backgroundColor: "#62208C",
              width: "100%",
            }}
          >
            <Button
              size="large"
              sx={{ color: "white", width: "100%", textTransform: "inherit" }}
            >
              Match Detail
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </div>
  );
};

export default function LiveMatchesCard({ liveMatch }) {
  return (
    <Box sx={{ minWidth: 275, paddingBottom: "1.5rem" }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#1E1E1E", borderRadius: "16px" }}
      >
        {renderCard(liveMatch)}
      </Card>
    </Box>
  );
}
