import React from 'react'

export default function CarouselButton({spanClassName, buttonClassName, direction, use}) {
  return (
    <>
        <button class={buttonClassName} type="button" data-bs-target="#carouselExampleFade" data-bs-slide={direction}>
            <span class={spanClassName} aria-hidden="true"></span>
            <span class="visually-hidden">{use}</span>
        </button>
    </>
    
  )
}
