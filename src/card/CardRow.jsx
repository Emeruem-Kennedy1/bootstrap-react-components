import React from 'react'
import Card from './Card'

export default function CardRow ({cardList}) {
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
            {
                cardList.map( card => (
                    <Card className='col' imageUrl={card.imageUrl} cardText={card.text} alt={card.alt} key={card.id}/>
                )
            )}
        </div>
       
    </div>
  )
}
