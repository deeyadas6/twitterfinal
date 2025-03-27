import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";

export const NavigationMenu = [
  { title: "Home", path: "/home", icon: <HomeIcon /> },
  { title: "Explore", path: "/home/explore", icon: <ExploreIcon /> },
  { title: "Notifications", path: "/home/notification", icon: <NotificationsIcon /> },
  { title: "Messages", path: "/home/message", icon: <MessageIcon /> },
  { title: "Profile", path: "/home/profile", icon: <AccountCircleIcon /> },
  { title: "Community", path: "/home/community", icon: <PeopleIcon /> },
];
