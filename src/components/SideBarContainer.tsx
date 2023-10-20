"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { SideBarContext } from "@/context/SideBarContext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import SideBar from "./SideBarContent";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SubSideBar from "./SideNavContainer/Subcontainer";
import logo from "../image/logo.png";
import Image from "next/image";


type Anchor = "left";
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "space-between",
}));

export default function TemporaryDrawer() {
	// const [state, setState] = React.useState({
	//   top: false,
	//   left: false,
	//   bottom: false,
	//   right: false,
	// });
	const { state, setState, subContainer } = React.useContext(SideBarContext);
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerClose = () => {
		setState({ ...state, ["left"]: false });
	};

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event.type === "keydown" &&
					((event as React.KeyboardEvent).key === "Tab" ||
						(event as React.KeyboardEvent).key === "Shift")
				) {
					return;
				}

				setState({ ...state, [anchor]: open });
			};



	return (
		<div>
			{(["left"] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						className="fixed"
						onOpen={toggleDrawer(anchor, true)}
						onClose={toggleDrawer(anchor, false)}
					>
						<DrawerHeader>
							<Image width={200} height={30} src={logo} alt="logo" />
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === "ltr" ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
						</DrawerHeader>
						<Divider className="mb-4" />
						{!subContainer ? <SideBar /> : <SubSideBar />}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
