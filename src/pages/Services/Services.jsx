import React from 'react'
import { Helmet } from 'react-helmet';
import { OurServices, PageTitle, FunFact, CallBack, Clients, NewsLetter } from '../../sections';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services &ndash; ZAI Chem</title>
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>
      <PageTitle page="Services" />
      <OurServices theme="two" />
      <OurServices />
      <FunFact />
      <CallBack />
      <Clients />
      <NewsLetter />
    </>
  )
}
