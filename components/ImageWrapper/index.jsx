import Image from 'next/image'
import React from 'react'

const ImageWrapper = ({className, src, alt, layout='fill', absolute = false, ...rest }) => {
  const style={
    position: absolute?'absolute':layout==='fill'?'relative':'initial'
  }

  return (
      <div className={className} style={style}>
        <Image src={src} alt={alt} layout={layout} {...rest}/>
      </div>
  )
}

export default ImageWrapper