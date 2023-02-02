import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MultiActionAreaCard = ({name, branch, domain, mobile, email}) => {
  return (
    <Card className="Main_card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="green iguana"
          className="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {branch}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {domain}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mobile}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}  
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
};

export default MultiActionAreaCard
