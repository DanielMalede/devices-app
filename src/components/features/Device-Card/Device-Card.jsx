import "./Device-Card.css";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { shadows } from "@mui/system";


function DeviceCard({ deviceItem }) {
  const { color, brand, id, price, ram, createdAt } = deviceItem;
  return (
    <Card sx={{ minWidth: 275 ,color:'primary.main',display: "inline-block",m:4,backgroundColor:"#20BEE5"}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Id:{id}
        </Typography>
        <Typography variant="h5" component="div">
          Brand:{brand}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          create:{createdAt}
        </Typography>
        <Typography variant="body2">
          Price:{price}
          <br />
          Color:{color}
          <br />
          Ram:{ram}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default DeviceCard;
