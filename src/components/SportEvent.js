import * as React from "react";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import ScoreCard from "./ScoreCard";
import GetTicketCardMainPanel from "./GetTicketCardMainPanel";
import LiveMatchesCard from "./LiveMatchesCard";
import LatestArticleCard from "./LatestArticleCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import "../styles/SportEvent.scss";
import GraphComponent from "./GraphComponent";
import Avatar from "@mui/material/Avatar";

import {
  sportMatchData,
  tickets,
  liveMatches,
  latestArticles,
} from "../data/data";

export default function SportEvent({ id }) {
  const [sportEvents, setSportEvents] = React.useState([]);
  const [liveMatch, setLiveMatch] = React.useState({});
  const [latestArticle, setLatestArticle] = React.useState([]);
  const [matchTicket, setMatchTicket] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    let sports = [];
    sportMatchData.map((item) => {
      if (item.id == id) {
        sports = item.sportEvent;
      }
    });
    setSportEvents(sports);
    let liveMatch = {};
    liveMatches.map((item) => {
      if (item.id == id) {
        liveMatch = item;
      }
    });
    setLiveMatch(liveMatch);
    let articles = [];
    latestArticles.map((item) => {
      if (item.id == id) {
        articles = item.articles;
      }
    });
    setLatestArticle(articles);
    let ticket = {};
    tickets.map((item) => {
      if (item.id == id) {
        ticket = item.ticket;
      }
    });
    setMatchTicket(ticket);
  }, [id]);

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
        paddingLeft: "0.2rem",
        paddingRight: "0.2rem",
      }}
    >
      •
    </Box>
  );

  const handleGraphModalOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box
      sx={{
        display: "flex",
        p: "1rem",
        flexGrow: 1,
        maxWidth: "2500px",
        minWidth: "200px",
        marginTop: "4.5rem",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.default",
          paddingBottom: 3,
          paddingLeft: 1,
          paddingRight: 1,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: "300px",
        }}
      >
        <GetTicketCardMainPanel matchTicket={matchTicket} />
        <Card sx={{ borderRadius: "16px" }}>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{ padding: "1rem", fontWeight: "900" }}
            >
              Today Match
            </Typography>
            {sportEvents.map((item) => (
              <Accordion key={item.id} id={item.id} disableGutters>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={item.id}
                >
                  <div className="sport-container">
                    <div style={{ display: "flex" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.logo}
                        sx={{
                          height: "2.8rem",
                          width: "2.8rem",
                          alignSelf: "center",
                          marginBottom: "0.5rem",
                        }}
                      />
                      <div style={{ marginLeft: "0.6rem" }}>
                        <Typography variant="h10">{item.name}</Typography>
                        <Typography
                          sx={{
                            mb: 1.5,
                            fontSize: "0.8rem",
                            paddingTop: "0.2rem",
                          }}
                          color="text.secondary"
                        >
                          {item.eventSpecifics}
                          {bull}
                          {item.matches.length} matches
                        </Typography>
                      </div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ScoreCard
                    matches={item.matches}
                    handleGraphModalOpen={handleGraphModalOpen}
                    gameId={item.id}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 0.5, bgcolor: "background.default" }}
      >
        <LiveMatchesCard liveMatch={liveMatch} />
        <LatestArticleCard latestArticles={latestArticle} />
      </Box>
      <Modal
        size="large"
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "2500px",
          minWidth: "200px",
        }}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <GraphComponent />
        </Box>
      </Modal>
    </Box>
  );
}
