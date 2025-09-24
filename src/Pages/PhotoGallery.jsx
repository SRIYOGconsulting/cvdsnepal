import React from 'react'
import { appData } from '../constants'

const PhotoGallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <ol>
        <li>Home</li>
        <li>Gallery</li>
      </ol>
      <h1>Gallery</h1>
      <a>{appData.youtube}</a>
      <small>Powered by<a>{appData.poweredBy}</a></small>
    </div>
  )
}

export default PhotoGallery
