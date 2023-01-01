import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, NewsLetter, OurTeam, PageTitle } from '../../sections';

export default function Team() {

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
                            <title>Team &ndash; ZAI Chem</title>
                            <link rel="stylesheet" href="/css/responsive.css" />
                        </Helmet>
                        <PageTitle page="Expert Team" />
                        <OurTeam />
                        <NewsLetter />
                        <Clients />
                    </>
                    :
                    <Preloader />
            }
        </>
    )
}
