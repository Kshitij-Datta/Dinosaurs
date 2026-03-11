import React from "react";
import { Calendar } from "lucide-react";

export default function GeologicalCard({ dino }) {
  return (
    <section className="section-card section-card-dark">
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Calendar size={24} />
        Geological Era
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.8)",
          lineHeight: "1.6",
          marginBottom: "24px",
        }}
      >
        The {dino.name} thrived during the {dino.period} period, approximately{" "}
        {dino.firstApp} to {dino.lastApp}
        million years ago.
      </p>
    </section>
  );
}
