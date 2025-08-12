import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface DrawerItemProps {
  text: string;
  route: string;
}

function DrawerItem({ text, route }: DrawerItemProps) {
  return (
    <ListItem component={Link} to={route} disablePadding sx={{ borderBottom: "1px solid rgba(0, 0, 0, .125)" }}>
      <ListItemButton>
        {/* <ListItemIcon>
          <HomeIcon />
        </ListItemIcon> */}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default DrawerItem;
