import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { OurServices, PageTitle, FunFact, CallBack, Clients, NewsLetter } from '../../sections';

export default function Services() {

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
          :
          <Preloader />
      }
    </>
  )
}
