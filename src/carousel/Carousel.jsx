import React from 'react'
import CarouselItem from './CarouselItem'
import CarouselButton from './CarouselButton'


export default function Carousel() {
  return (
    <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" style={{"width":"100%", "height": "75vh"}} data-bs-ride="carousel">
        
            <div className='carousel-inner' style={{"width":"100%", "height": "100%"}}>
                <CarouselItem className='carousel-item active' imageUrl='https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80' alt='Item One'/>
                <CarouselItem className='carousel-item' imageUrl='https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80' alt='Item Two'/>
                <CarouselItem className='carousel-item' imageUrl='https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Item Three'/>
            </div>

            <CarouselButton spanClassName="carousel-control-prev-icon" buttonClassName="carousel-control-prev" direction="prev" use='Previous' />
            <CarouselButton spanClassName="carousel-control-next-icon" buttonClassName="carousel-control-next" direction="next" use='Next' />
        </div>
    </>
  )
}
