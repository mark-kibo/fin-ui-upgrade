import type { Metadata } from "next";
import Dashboard from "@/components/dashboards";
import Layout from "@/components/layout/page";
import Providers from "../Providers";


export const metadata: Metadata = {
	title: 'FinFinancials',
	description: 'Data intergration technologies',
}

export default () => (
	<Providers>
	<Layout>
		<>
			<div className="mt-50">
						
					<Dashboard />
				

			</div>
		</>
		
	</Layout>
	</Providers>
);
