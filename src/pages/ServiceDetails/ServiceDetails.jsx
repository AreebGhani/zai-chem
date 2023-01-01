import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, NewsLetter, PageTitle, ServicesInfo } from '../../sections';

export default function ServiceDetails() {

    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoad(false), 800)
        return;
    }, [])

    return (
        <>
            {
                !load ?
                    <>
                        <Helmet>
                            <title>Service Detail &ndash; ZAI Chem</title>
                            <link rel="stylesheet" href="/css/responsive.css" />
                        </Helmet>
                        <PageTitle page="Service Detail" />
                        <ServicesInfo />
                        <NewsLetter />
                        <Clients />
                    </>
                    :
                    <Preloader />
            }
        </>
    )
}
