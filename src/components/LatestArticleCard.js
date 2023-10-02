import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/GetCountryCardMainPanel.scss";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const renderArticleCard = (latestArticles) => {
  return (
    <div style={{ display: "flex" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ padding: "1rem", fontWeight: "900" }}
        >
          Latest Article
        </Typography>

        {latestArticles?.map((item) => (
          <div key={item.id} style={{ display: "flex" }}>
            <div style={{ paddingTop: "1.2rem" }}>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={item.logo}
                sx={{ borderRadius: "4px" }}
              />
            </div>

            <div>
              <Link href="" color="inherit" sx={{ textDecoration: "none" }}>
                <Typography variant="body2" className="article-title">
                  {item.title}
                </Typography>
              </Link>
              <Typography
                sx={{ mb: 1, fontSize: "0.5rem", paddingLeft: "1rem" }}
                color="text.secondary"
              >
                {item.date}
              </Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
};

export default function LatestArticleCard({ latestArticles }) {
  return (
    <Box sx={{ minWidth: 275, paddingBottom: "2rem" }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#1E1E1E", borderRadius: "16px" }}
      >
        {renderArticleCard(latestArticles)}
      </Card>
    </Box>
  );
}
