import "./mapa.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Configura el contenedor del mapa
const containerStyle = {
  width: "87%",
  height: "300px",
};

// Coordenadas de la ubicación inicial
const center = {
  lat: 4.5418183,
  lng: -75.677696,
};

// Clave API de Google Maps
const API_KEY = "";

export const Mapa = () => {
  return (
    <>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};
