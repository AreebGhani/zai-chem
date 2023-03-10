import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, News, PageTitle } from '../../sections';

export default function Blog() {

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
                            <title>Blogs &ndash; ZAI Chem</title>
                            <link rel="stylesheet" href="/css/responsive.css" />
                        </Helmet>
                        <PageTitle page="Blog" />
                        <News theme="two" />
                        <Clients />
                    </>
                    :
                    <Preloader />
            }
        </>
    )
}
