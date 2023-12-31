"use client"
import * as React from "react";
import Divider from "@mui/material/Divider";
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
						<Divider className="mb-2" style={{
							borderTop:"2px solid #1F5780", /* You can change the color (#00f) to your preferred color */
							margin: "8px 0", /* Adjust margin as needed */
							borderRadius: "5px"
						}}/>

						{!subContainer ? <SideBar /> : <SubSideBar />}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
