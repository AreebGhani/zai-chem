import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Preloader } from "../../components";
import { Hero, AboutUs, OurServices, Projects, Team, Testimonial, News, Clients, FunFact } from "../../sections";

export default function Home() {

  useEffect(() => {
    <Preloader />
    return;
  }, [])


  return (
    <>
      <Helmet>
        <title>Home &ndash; ZAI Chem</title>
        <link rel="stylesheet" href="/css/responsive.css" />
      </Helmet>
      <Hero />
      <AboutUs />
      <OurServices />
      <FunFact />
      <Projects />
      <Team />
      <Testimonial />
      <News />
      <Clients />
    </>
  )
}
