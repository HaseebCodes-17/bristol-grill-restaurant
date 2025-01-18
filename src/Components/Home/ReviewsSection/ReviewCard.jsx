import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const ReviewCard = ({ review }) => {
  const { title, description } = review;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://imgs.search.brave.com/ya3OUlqjp11OBvonsI8ghjj9bd4KHIF5Hj6bt_6UiNY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAzLzA4LzYz/LzM2MF9GXzEwMzA4/NjM3MV9DWkZmOVMy/VDk1a2dHc2xHOTc0/MUFYZmxWU0l1akFr/bC5qcGc"
          alt={title}
        />
        <CardContent className="h-[140px] overflow-auto">
          <Typography gutterBottom variant="h5" component="h4">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ReviewCard;
