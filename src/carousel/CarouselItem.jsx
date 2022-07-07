import React from 'react'

export default function CarouselItem({imageUrl, alt, className}) {
  return (
    <>
        <div class={className}>
            <img src={imageUrl} class="d-block w-100" style={{ "width":"100vw","height":"100%","object-fit": "fill" }} alt={alt} />
        </div>
    </>
  )
}
