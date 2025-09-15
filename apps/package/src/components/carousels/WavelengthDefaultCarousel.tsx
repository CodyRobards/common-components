import React, { useState, useEffect, CSSProperties } from "react";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

interface carouselItem {
  title?: string;
  description?: string;
  image: string;
  path: string;
}

interface carouselConfigArray {
  items: carouselItem[];
}

interface adjustableDimensions {
  buttonSize?: number;
  imageHeight?: number;
  imageWidth?: number;
  cardWidth?: number;
  cardHeight?: number;
}

export const DefaultCarousel: React.FC<carouselConfigArray & adjustableDimensions> = ({ items, buttonSize, imageHeight, imageWidth, cardHeight, cardWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const adjustButtonSize = buttonSize !== undefined ? buttonSize : 70;
  const adjustImageHeight = imageHeight !== undefined ? imageHeight : 250;
  const adjustImageWidth = imageWidth !== undefined ? imageWidth : 300;
  const adjustCardHeight = cardHeight !== undefined ? cardHeight : 345;
  const adjustCardWidth = cardWidth !== undefined ? cardWidth : 300;

  //button navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  //navigate to external url
  const handleClick = () => {
    window.open(items[currentIndex].path, "_blank");
  };

  return (
    <div>
      <div>
        <Grid
          container
          spacing={1}
          sx={{
            alignItems: "center",
          }}
        >
          <div>
            <IconButton onClick={handlePrev} sx={{ margin: 1, color: "white" }}>
              <NavigateBeforeIcon style={{ fontSize: adjustButtonSize }} />
            </IconButton>
          </div>
          <Card
            sx={{
              maxWidth: adjustCardWidth,
              maxHeight: adjustCardHeight,
            }}
          >
            <CardActionArea onClick={handleClick}>
              <CardMedia sx={{ height: adjustImageHeight, width: adjustImageWidth }} image={items[currentIndex].image} />
              <CardContent>
                <Typography variant="h4">{items[currentIndex].title}</Typography>
                <Typography variant="body1">{items[currentIndex].description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <div>
            <IconButton onClick={handleNext} sx={{ margin: 1, color: "white" }}>
              <NavigateNextIcon style={{ fontSize: adjustButtonSize }} />
            </IconButton>
          </div>
        </Grid>
      </div>
    </div>
  );
};

DefaultCarousel.displayName = "DefaultCarousel";

export default DefaultCarousel;
