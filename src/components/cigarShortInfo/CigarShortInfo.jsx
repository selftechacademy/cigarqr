import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ExploreIcon from "@mui/icons-material/Explore";
import SpaIcon from "@mui/icons-material/Spa";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ElevatorIcon from "@mui/icons-material/Elevator";

export default function CigarShortInfo() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ExploreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nicaragua" secondary="Country of Origin" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SpaIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="San Andrés" secondary="Wrapper" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FormatColorFillIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nicaraguan" secondary="Binder and Filler" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkHistoryIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2 years" secondary="Aged" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ElevatorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medium" secondary="Strength" />
      </ListItem>
    </List>
  );
}
