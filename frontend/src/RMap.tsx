import { MapContainer, TileLayer } from 'react-leaflet'
import { useMapEvent } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

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
    map.setView([a.latlng.lat, a.latlng.lng], map.getZoom())
    setClickMarker({
      lat: a.latlng.lat,
      lng: a.latlng.lng,
      description: 'Southern House',
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
      center={[baseLocation.lat, baseLocation.lng]} zoom={17} scrollWheelZoom={false}
    >
      <MapContents />
    </MapContainer>
  )
}

export default RMap
