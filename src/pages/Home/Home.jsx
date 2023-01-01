import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Preloader } from "../../components";
import { Hero, AboutUs, OurServices, Projects, OurTeam, Testimonial, News, Clients, FunFact } from "../../sections";

export default function Home() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoad(false), 800)
    return;
  }, [])


  return (
    <>
      {!load ?
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
          <OurTeam />
          <Testimonial />
          <News />
          <Clients />
        </>
        :
        <Preloader />
      }
    </>
  )
}
