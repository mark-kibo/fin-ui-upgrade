"use client";

import AreaChart from "./ApexCharts/AreaChart";
import BarChart from "./ApexCharts/barChart";
import TopCards from "./TopCards";

const Dashboard = () => {
	
	return (
		<div className="h-auto pb-10">
			<div>
				
				<TopCards />
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 p-4 ">
				<BarChart />
				<AreaChart />
			</div>
		</div>
	);
};
export default Dashboard;
