import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Preloader } from '../../components';
import { AboutUs, Feature, FunFact, PageTitle, Process, Testimonial, VideoPlay, WhyUs } from '../../sections';

export default function About() {

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
              <title>About &ndash; ZAI Chem</title>
              <link rel="stylesheet" href="/css/responsive.css" />
            </Helmet>
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
          </>
          :
          <Preloader />
      }
    </>
  )
}
