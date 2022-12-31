import React from 'react';
import { Helmet } from 'react-helmet';
import { Clients, NewsLetter, PageTitle, Projects } from '../../sections';

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Services &ndash; ZAI Chem</title>
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>
      <PageTitle page="Peoducts" />
      <Projects theme="two" />
      <NewsLetter />
      <Clients />
    </>
  )
}
