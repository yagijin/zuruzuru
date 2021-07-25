import * as React from "react";
//import Leaflet from "leaflet";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import data from "../../../static/mornings.json";

const MorningMap = () => {
  {
    /*
  const ramenIcon = Leaflet.icon({
    iconUrl: "./img/ramen.png",
    shadowUrl: "../../static/mapicon/ramen-shadow.svg",
    iconSize: [32, 32],
    shadowSize: [32, 32],
    iconAnchor: [16, 16],
    shadowAnchor: [24, 24],
    popupAnchor: [24, 24],
  });
*/
  }

  return (
    <main>
      <title>Morning Map</title>
      {/*
      <MapContainer
        center={[35.0854944, 138.374425]}
        zoom={9}
        scrollWheelZoom={false}
        className="map-morningmap-main"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors　'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.0854944, 138.374425]} icon={ramenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      */}
    </main>
  );
};

export default MorningMap;
