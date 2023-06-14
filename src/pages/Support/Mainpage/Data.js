import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ContactsIcon from "@mui/icons-material/Contacts";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PeopleIcon from "@mui/icons-material/People";
import UpdateIcon from "@mui/icons-material/Update";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const data = [
  {
    id: 1,
    heading: "Getting started",
    well: "Welcome to Get started",
    link: "/new/answer",
    icon: <StarOutlineIcon fontSize="large" />,
  },
  {
    id: 2,
    heading: "Contact Us",
    well: "Welcome to Get started",
    link: "/new/contact",
    icon: <ContactsIcon fontSize="large" />,
  },
  {
    id: 3,
    heading: "Learn",
    well: "Welcome to Get started",
    link: "/new/learn",

    icon: <LocalLibraryIcon fontSize="large" />,
  },
  {
    id: 5,
    heading: "Update",
    well: "Welcome to Get started",
    link: "/new/update",
    icon: <UpdateIcon fontSize="large" />,
  },

  {
    id: 6,
    heading: "About Us",
    well: "Welcome to Get started",
    link: "/new/about",

    icon: <LiveHelpIcon fontSize="large" />,
  },
  {
    id: 4,
    heading: "Community",
    well: "Welcome to Get started",
    link: "/new/community",

    icon: <PeopleIcon fontSize="large" />,
  },


];

export default data;
