import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'
import Card from './components/card'
import Data from './components/data'

function App() {
   const cardData = Data.map(item => {
               return (<Card 
            
              item = {item}
                 />)
            })
            return (
              <div className="App">
      <Navbar />
      <Main />
       <section className="cards-list">
                {cardData}
         </section>
    </div>
  )
}


export default App

 // img={dataItem.coverImg}
                // rating={dataItem.stats.rating}
                // reviewCount={dataItem.stats.reviewCount}
                // location={dataItem.location}
                // title={dataItem.title}
                // price={dataItem.price}
                // openspots = {dataItem.openSpots}