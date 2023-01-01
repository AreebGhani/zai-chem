import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, PageTitle, ProductInfo } from '../../sections';

export default function ProductDetails() {

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
                            <title>Products Detail &ndash; ZAI Chem</title>
                            <link rel="stylesheet" href="/css/responsive.css" />
                        </Helmet>
                        <PageTitle page="Products Detail" />
                        <ProductInfo />
                        <Clients />
                    </>
                    :
                    <Preloader />
            }
        </>
    )
}
