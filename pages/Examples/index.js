import React from 'react'
import Banner from '../../Components/BigMovies/Banner'
import Footer from '../../Components/BigMovies/Footer'
import MoviesCards from '../../Components/BigMovies/MoviesCards'
import MoviescardWrapper from '../../Components/BigMovies/MoviescardWrapper'
import Nav from './Nav'

const Index = () => {
  return (
    <div className="bg-gradient-to-r from-[#000000]/100 via-black/70 to-[#C4C4C4]/10">
      <Nav />
      <Banner />
      <MoviescardWrapper />
      <Footer />
    </div>
  )
}

export default Index
