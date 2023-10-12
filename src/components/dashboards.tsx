"use client";
import AreaChart from "./ApexCharts/AreaChart";
import ColumnChart from "./ApexCharts/ColumnChart";
import PieChart from "./ApexCharts/PieChart";
import BarChart from "./ApexCharts/barChart";
import Loans from "./Loans";
import Reports from "./Reports";
import TopCards from "./TopCards";
import Transactions from "./Transactions";

const Dashboard = () => {
	return (
		<div className="h-auto">
			<div>
				<TopCards />
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 p-4">
				<BarChart />
				<AreaChart />
				<ColumnChart />
				<PieChart />
			</div>
		</div>
	);
};
export default Dashboard;
