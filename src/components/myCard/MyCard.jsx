import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CigarShortInfo from "../cigarShortInfo/CigarShortInfo";
import Cigar60 from "../../assets/images/rockyPatel60.jpeg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MyCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: "" }} aria-label="recipe">
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Rocky Patel Sixty"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={Cigar60}
        alt="Paella dish"
      />
      <CardContent>
        <Typography>Cigar Details:</Typography>
        <CigarShortInfo />
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Voted #1 Cigar of the Free World by Cigar Aficionado.
          </Typography>
          <Typography paragraph>
            Join us in celebrating Rocky Patel’s 60th birthday with a cigar,
            unlike anything we’ve ever rolled. Quality comes with age, and after
            60 beautiful years of life, Rocky Patel’s passion for premium cigars
            has never been more refined. To celebrate his unbridled love for
            signature cigars, and in honor of this momentous occasion, we’re
            proud to present… The Rocky Patel Sixty. Aged Minimum 2 years after
            rolling at our factories in Esteli, Nicaragua.
          </Typography>
          <Typography paragraph>
            Hands down the best coffee-infused cigar available on the market
            today. The finest tobaccos from Nicaragua deliver in a truly
            unforgettable way. And to top it all off, the Java Maduro is draped
            in a thick Brazilian wrapper, making it the perfect companion to a
            rich cup of joe.
          </Typography>
          <Typography>Akil is the best :)</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
