import "./Movie-Card.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MovieCard({movieItem}) {
  const {title,year,cast,genres} = movieItem
  return (
    <Card sx={{ minWidth: 275 ,color:'primary.main',display: "inline-block",m:4,backgroundColor:"#20BEE5"}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        title:{title}
        </Typography>
        <Typography variant="h5" component="div">
        year:{year}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        cast:{cast}
        </Typography>
        <Typography variant="body2">
        genres:{genres}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
