import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';




export default function Dashboard({ auth }) {


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Main page</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Dashboard
                </h5>
            </div>
        </AuthenticatedLayout>
    );
}
