import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import Meal from '../components/Meal'
import MealsContainers from '../components/MealsContainer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Macros Tracker</title>
      </Head>
      <Header />
      <MealsContainers />
    </>
  )
}

export default Home
