import { GetCookie } from "@/Cookies/GetCookie";
import Dashboard from "@/components/dashboards";
import Layout from "@/components/layout/page";
import Providers from "../Providers";


export default () => (
	<Providers>
	<Layout>
		<div className="mt-50">
					
				<Dashboard />
			

		</div>
		
	</Layout>
	</Providers>
);
