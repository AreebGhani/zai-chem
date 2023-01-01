import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, NewsLetter, OurTeam, PageTitle, TeamMember } from '../../sections';

export default function TeamDetails() {

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
                            <title>Blog Detail &ndash; ZAI Chem</title>
                            <link rel="stylesheet" href="/css/responsive.css" />
                        </Helmet>
                        <PageTitle page="Team Single" />
                        <TeamMember />
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
