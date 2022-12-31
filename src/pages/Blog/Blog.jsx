import React from 'react'
import { Helmet } from 'react-helmet'
import { PageTitle } from '../../sections';

export default function Blog() {
    return (
        <>
            <Helmet>
                <title>Services &ndash; ZAI Chem</title>
                <link rel="stylesheet" href="/css/responsive.css" />
            </Helmet>
            <PageTitle page="Blog" />
        </>
    )
}
