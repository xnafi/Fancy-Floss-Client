import React from 'react'
import useTitle from '../Hooks/useTitle'
import AboutMe from './AboutMe'
import Appoinment from './Appoinment'

import Banner from './Banner'
import ServicesHome from './ServicesHome'

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner />
      <ServicesHome />
      <Appoinment />
      <AboutMe />
    </>
  )
}

export default Home