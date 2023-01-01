import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { Clients, ContactForm, ContactInfo, MapLocation, PageTitle } from '../../sections';

export default function Contact() {

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
              <title>Contact &ndash; ZAI Chem</title>
              <link rel="stylesheet" href="/css/responsive.css" />
            </Helmet>
            <PageTitle page="Contact" />
            <ContactForm />
            <MapLocation />
            <ContactInfo />
            <Clients />
          </>
          :
          <Preloader />
      }
    </>
  )
}
