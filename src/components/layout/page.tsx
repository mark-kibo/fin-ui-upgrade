"use client";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import Navbar from "../Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	return (
		<>
			<Navbar />

			<section className="min-h-screen bg-[#ededed] lg:mx-20 sm:mx-0 ">
				<div className="mt-50">
					<div className="text-2xl capitalize rounded-md  px-4 py-2">
						<Breadcrumbs aria-label="breadcrumb" className="z-20">
							<h2 color="text.primary mt-2">
								{pathname === "/" ? (
									<Link href={`/`}>/Dashboard</Link>
								) : (
									<Link href={`${pathname}`}>{pathname}</Link>
								)}
							</h2>
						</Breadcrumbs>
					</div>
					<div className="flex  justify-between items-center mt-4 px-4 ">
						<h2 className="font-bold text-2xl">
							{pathname === "/" ? "Main Dashboard" : pathname.split("/")[-1]}
						</h2>
						<p className="capitalize text-gray- px-4">Welcome Back</p>
					</div>
				</div>{" "}
				{children}
			</section>
			<Footer />
		</>
	);
};

export default Layout;
