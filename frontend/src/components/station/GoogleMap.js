import React from 'react'
import './GoogleMap.scss'

const GoogleMap = ({ location = 'Keilalahti' }) => {
  console.log('location', location)

  const mapURL = `https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${location}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
  console.log('mapURL', mapURL)
  return (
    <div>
      <div className="mapOuter">
        <div className="gMap_canvas">
          <iframe
            className="gMap_iframe" frameBorder="0" title={location} marginHeight="0" marginWidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Keilalahti&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default GoogleMap