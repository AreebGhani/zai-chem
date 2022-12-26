import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Cta, Footer, Header, Preloader } from "../../components";
import { Hero, About, Services, Products, Team, Testimonial, News, Clients } from "../../sections";

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
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Team />
      <Testimonial />
      <News />
      <Clients />
      <Cta />
      <Footer />
    </>
  )
}
