import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, PageTitle, ProductInfo } from '../../sections';

export default function LiteratureReview() {

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
                            <title>Literature Review &ndash; ZAI Chem</title>
                            <link rel="stylesheet" href="/css/responsive.css" />
                        </Helmet>
                        <PageTitle page="Literature Review" />
                        <ProductInfo theme="two" />
                        <Clients />
                    </>
                    :
                    <Preloader />
            }
        </>
    )
}
