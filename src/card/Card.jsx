import React from 'react'

export default function Card({imageUrl, cardText, alt}) {
    const cardStyle = {
        'width': '18rem',
    }
  return (
    <>
        <div style={cardStyle} className='shadow card p-0 m-3 rounded border-0'>
            <img className='card-img-top img-fluid' src={imageUrl} alt={alt} ></img>
            <div className='card-body'>
                <p className='card-text text-center lead fs-6'>{cardText}</p>
            </div>
        </div>
    </>
    
  )
}
