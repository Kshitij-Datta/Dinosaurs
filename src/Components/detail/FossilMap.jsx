import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locationIcon = L.divIcon({
  html: '<i class="uil uil-location-point" style="font-size:28px;color:#5A5A40;"></i>',
  className: "",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

export default function FossilMap({ dino, occurrences }) {
  return (
    <section
      className="section-card"
      style={{ padding: "16px", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <MapPin size={24} color="#5A5A40" />
          Fossil Discoveries
        </h2>

        <span
          style={{
            backgroundColor: "rgba(90,90,64,0.1)",
            color: "#5A5A40",
            padding: "4px 12px",
            borderRadius: "9999px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {occurrences.length} Sites Found
        </span>
      </div>

      <div className="map-container-wrapper">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={10}
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]}
          maxBoundsViscosity={1.0}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
            noWrap={true}
          />

          {occurrences.map((occ) => (
            <Marker
              key={occ.id}
              position={[occ.lat, occ.lng]}
              icon={locationIcon}
            >
              <Popup>
                <div style={{ padding: "8px" }}>
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                      marginBottom: "4px",
                    }}
                  >
                    {dino.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(44,36,30,0.6)",
                      marginBottom: "8px",
                    }}
                  >
                    {occ.site}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#5A5A40",
                      textTransform: "uppercase",
                    }}
                  >
                    <MapPin size={12} />
                    {occ.location}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div
        style={{
          padding: "16px",
          fontSize: "12px",
          color: "rgba(44,36,30,0.4)",
          fontStyle: "italic",
        }}
      >
        * Locations represent fossil occurrences from the Paleobiology Database.
      </div>
    </section>
  );
}
