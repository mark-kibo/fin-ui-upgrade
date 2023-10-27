import type { Metadata } from 'next';
import Dashboard from '@/components/dashboards';
import Layout from '@/components/layout/page';
import Providers from '../Providers';

export const metadata: Metadata = {
  title: 'FinFinancials',
  description: 'Data integration technologies',
};

function dashboard() {
    return (
        <Providers>
            <Layout>
                <>
                    <div className="mt-50 h-auto ">
                        <Dashboard />
                    </div>
                </>
            </Layout>
        </Providers>
    );

}
export default dashboard;
