import { Link } from "react-router-dom";
import { Skull, ArrowUpDown } from "lucide-react";

export default function DinoCard({ dino, displayIndex }) {
  return (
    <div className="card" style={{ padding: "24px" }}>
      <Link
        to={`/dinosaur/${dino.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(90, 90, 64, 0.1)",
              padding: "12px",
              borderRadius: "12px",
            }}
          >
            <Skull size={24} color="#5A5A40" />
          </div>

          <span
            style={{ fontSize: "12px", fontWeight: "bold", color: "#5A5A40" }}
          >
            #{displayIndex}
          </span>
        </div>

        <h3>{dino.name}</h3>

        <p>{dino.period}</p>

        <div
          style={{
            marginTop: "24px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#5A5A40",
          }}
        >
          View Details
          <ArrowUpDown size={12} style={{ transform: "rotate(90deg)" }} />
        </div>
      </Link>
    </div>
  );
}
