"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";

import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { SideBarContext } from "@/context/SideBarContext";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import logo from "../image/logo1.png";
import Image from "next/image";

export default function Navbar() {
	const [auth, setAuth] = React.useState(true);
	const router = useRouter();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		setAnchorEl(null);
		router.push("/login");
	};

	const iconstyle = "black";
	const { state, setState } = React.useContext(SideBarContext);
	const anchor = "left";

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				color="transparent"
				sx={{ backdropFilter: "blur(20px)" }}
				className="flex justify-between"
			>
				<Toolbar className="flex justify-between">
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={() => setState({ ...state, [anchor]: true })}
						color="inherit"
					>
						<MenuIcon className={iconstyle} />
						<Image
							width={200}
							height={30}
							src={logo}
							className="pl-2"
							alt="logo"
						/>
					</IconButton>

					{auth && (
						<div className="flex">
							<Typography fontSize={14} component="div">
								<Tooltip title="Help" arrow className="text-blue">
									<IconButton
										size="large"
										edge="start"
										color="inherit"
										aria-label="menu"
										sx={{ mr: 2 }}
									>
										<HelpOutlineRoundedIcon className={iconstyle} />
									</IconButton>
								</Tooltip>
							</Typography>
							<Typography fontSize={14} component="div">
								<Tooltip title="Contact us" arrow className="text-blue">
									<IconButton
										size="large"
										edge="start"
										color="inherit"
										aria-label="menu"
										sx={{ mr: 2 }}
									>
										<AddIcCallSharpIcon />
									</IconButton>
								</Tooltip>
							</Typography>
							<Typography fontSize={14} component="div">
								<Tooltip title="About" arrow className="text-blue">
									<IconButton
										size="large"
										edge="start"
										color="inherit"
										aria-label="menu"
										sx={{ mr: 2 }}
									>
										<FeedSharpIcon className={iconstyle} />
									</IconButton>
								</Tooltip>
							</Typography>
							<Typography fontSize={14} component="div">
								<Tooltip title="Change password" arrow className="text-blue">
									<IconButton
										size="large"
										edge="start"
										color="inherit"
										aria-label="menu"
										sx={{ mr: 2 }}
									>
										<LockOpenSharpIcon className={iconstyle} />
									</IconButton>
								</Tooltip>
							</Typography>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle className={iconstyle} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem onClick={handleLogout}>Log out</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
