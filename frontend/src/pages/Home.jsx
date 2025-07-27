import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Banner />
      <Card />
      <Features />
      <Newsletter />
    </div>
  )
}

export default Home
