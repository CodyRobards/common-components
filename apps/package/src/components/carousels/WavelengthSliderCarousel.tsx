import React, { useState, useEffect, CSSProperties } from "react";
import { cards } from "./images";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

const delay = 2500;

interface carouselItem {
  title?: string;
  description?: string;
  image: string;
  path: string;
}

interface carouselConfigArray {
  items: carouselItem[];
}

interface adjustDimenforCarousel {
  contHeight?: number;
  contWidth?: number;
  cardWidth?: number;
  cardHeight?: number;
}

export const SliderCardCarousel: React.FC<carouselConfigArray & adjustDimenforCarousel> = ({ items, cardHeight, cardWidth, contHeight, contWidth }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {};
  }, [index]);

  //dynamic inline styling for auto carousel
  const carouselCardWidth = items.length > 0 ? `calc(35% * ${items.length})` : "200%";

  const adjustContHeight = contHeight !== undefined ? contHeight : "100%";
  const adjustContWidth = contWidth !== undefined ? contWidth : "200%";
  const adjustCardHeight = cardHeight !== undefined ? cardHeight : 120;
  const adjustCardWith = cardWidth !== undefined ? cardWidth : 310;

  interface StylesDictionary {
    [Key: string]: CSSProperties;
  }

  const styles: StylesDictionary = {
    carouselcontainer: {
      overflow: "hidden",
      position: "relative",
      borderColor: "#4b5563",
      height: adjustContHeight,
      width: adjustContWidth,
      minHeight: "280px",
      minWidth: "640px",
      borderRadius: "10px",
    },
    carouselTrackStyle: {
      display: "flex",
      position: "relative",
      justifyContent: "center",
      left: "0",
      alignItems: "center",
      gap: "5px",
      width: carouselCardWidth,

      height: "100%",
      transition: "background-color 0.5s ease-in-out",
    },

    carouselCard: {
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: isHovered ? "scale(0.9)" : "scale(1)",
      boxShadow: isHovered ? "5px 5px 8px rgba(222, 222, 222, 0.362), 10px 10px 8px rgba(152, 133, 133, 0.392), 15px 15px 8px rgba(139, 154, 139, 0.303)" : "none",
    },
  };

  return (
    <div style={styles.carouselcontainer}>
      <div className="my-animation" style={styles.carouselTrackStyle}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          container
          spacing={0.5}
        >
          {items.map((card) => (
            <div key={card.title}>
              <Card
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: isHovered ? "scale(0.9)" : "scale(1)",
                  boxShadow: isHovered ? "5px 5px 8px rgba(222, 222, 222, 0.362), 10px 10px 8px rgba(152, 133, 133, 0.392), 15px 15px 8px rgba(139, 154, 139, 0.303)" : "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CardActionArea href={card.path}>
                  <CardMedia sx={{ height: adjustCardHeight, width: adjustCardWith }} image={card.image} />
                  <CardContent>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SliderCardCarousel;
