import React from 'react';

// COMPONENTS
import PageBanner from '../../components/general/PageBanner';
import ActivitiesTable from './ActivitiesTable';

function ActivitesPage() {
    return (
        <>
            <PageBanner
                heading='Activities'
                text='Stay updated with a summary of your latest activities, including uploads, comments, and interactions with subscribers.'
            ></PageBanner>

            <section className='py-5'>
                <div className='container py-5'>
                    <div className='mb-5'>
                        <ActivitiesTable />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ActivitesPage;
