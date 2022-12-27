import React from 'react';
import { Helmet } from 'react-helmet';
import { Cta, Footer, Header } from '../../components';
import { AboutUs, Feature, FunFact, PageTitle, Process, Testimonial, VideoPlay, WhyUs } from '../../sections';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About &ndash; ZAI Chem</title>
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>
      <Header theme="dark" />
      <PageTitle page="About Us" />
      <AboutUs />
      <FunFact theme="dark" />
      <WhyUs />
      <Process />
      <VideoPlay />
      <Testimonial theme="two" />
      <br />
      <br />
      <br />
      <Feature />
      <Cta />
      <Footer theme="dark" />
    </>
  )
}
