import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, NewsLetter, PageTitle, Projects } from '../../sections';

export default function Products() {

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
              <title>Products &ndash; ZAI Chem</title>
              <link rel="stylesheet" href="/css/responsive.css" />
            </Helmet>
            <PageTitle page="Peoducts" />
            <Projects theme="two" />
            <NewsLetter />
            <Clients />
          </>
          :
          <Preloader />
      }
    </>
  )
}
