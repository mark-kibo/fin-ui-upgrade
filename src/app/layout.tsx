
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";



import SideBarProvider from "@/context/SideBarContext";
import { Suspense } from "react";
import Loading from "../components/loading";
import TemporaryDrawer from "@/components/SideBarContainer";
import Providers from "./Providers";



const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FinFinancials',
  description: 'Data intergration technologies',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {


	return (
		<html lang="en">
			<body className={monserrat.className}>
				<section className="bg-[#ededed]">
					{/* wrapp everything with my side bar */}
					<Providers>
					<SideBarProvider>
						<TemporaryDrawer/>
						<Suspense fallback={<Loading />}>
							{children}
						</Suspense>

					</SideBarProvider>
					</Providers>

				</section>
			</body>
		</html>
	);
}
