import React from 'react';
import { Helmet } from 'react-helmet';
import { Clients, ContactForm, ContactInfo, MapLocation, PageTitle } from '../../sections';

export default function Contact() {

  return (
    <>
      <Helmet>
        <title>Services &ndash; ZAI Chem</title>
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>
      <PageTitle page="Contact" />
      <ContactForm />
      <MapLocation />
      <ContactInfo />
      <Clients />
    </>
  )
}
