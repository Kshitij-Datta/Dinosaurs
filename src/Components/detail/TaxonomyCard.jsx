import React from "react";
import { Info } from "lucide-react";

export default function TaxonomyCard({ dino }) {
  const rows = [
    { label: "Phylum", value: dino.phylum },
    { label: "Class", value: dino.class },
    { label: "Order", value: dino.order },
    { label: "Family", value: dino.family },
    { label: "First Appearance", value: `${dino.firstApp} Ma` },
    { label: "Last Appearance", value: `${dino.lastApp} Ma` },
  ];

  return (
    <section className="section-card">
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Info size={24} color="#5A5A40" />
        Taxonomy
      </h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {rows.map((item, i) => (
          <div key={i} className="stat-row">
            <span className="stat-label">{item.label}</span>

            <span className="stat-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
