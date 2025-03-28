import { useState } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import { useMapEvent } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import 'leaflet/dist/leaflet.css'

import { PlacesResponse } from "./types/foursquareApiResponses"

import api from './utils/api'

type RMarker = {
  lat: number,
  lng: number
  description: string,
}

function MapContents() {
  const [clickMarker, setClickMarker] = useState<RMarker>({
    lat: 50.8240020,
    lng: -0.4258650,
    description: 'Southern House',
  })

  const map = useMapEvent('click', (a) => {
    api.get<PlacesResponse>('/places', {
      params: {
        lat: a.latlng.lat,
        lng: a.latlng.lng,
        query: 'pub'
      },
    })
      .then(function (response) {
        const result = response.data.results[0]

        if (!result) {
          alert('No pubs within two kilometres of your chosen location')
          return
        }

        console.info('💧 Pub Found', result)

        map.setView([result.geocodes.main.latitude, result.geocodes.main.longitude], map.getZoom())
        setClickMarker({
          lat: result.geocodes.main.latitude,
          lng: result.geocodes.main.longitude,
          description: result.name + ' — ' + result.location.formatted_address,
        })
      })
      .catch(function (error) {
        alert('Something went wrong, please try again later')
        console.log('💧 API Error: ', error)
      })
  })

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; Application by Shea Lavington 2025'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[clickMarker.lat, clickMarker.lng]}
      >
        <Popup>
          {clickMarker.description}
        </Popup>
      </Marker>
    </>
  )
}

function RMap() {
  const baseLocation: RMarker = {
    lat: 50.8240020,
    lng: -0.4258650,
    description: 'Southern House',
  }

  return (
    <MapContainer
      style={{ height: '100vh', width: '100vw' }}
      center={[baseLocation.lat, baseLocation.lng]} zoom={15} scrollWheelZoom={false}
    >
      <MapContents />
    </MapContainer>
  )
}

export default RMap
