import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Skull, Star, Info } from "lucide-react";

const FAMOUS_DINOS = [
  { id: 38613, name: "Tyrannosaurus", period: "Late Cretaceous" },
  { id: 38862, name: "Triceratops", period: "Late Cretaceous" },
  { id: 38814, name: "Stegosaurus", period: "Late Jurassic" },
];

export default function Recommendations() {
  return (
    <section className="container" style={{ padding: "96px 1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "48px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
              fontFamily: "Unbounded",
            }}
          >
            Famous Giants
          </h2>
          <p style={{ color: "rgba(44, 36, 30, 0.6)", maxWidth: "448px" }}>
            Meet the most iconic dinosaurs that have captured our imagination
            for generations.
          </p>
        </div>
        <Link
          to="/explorer"
          style={{
            color: "#5A5A40",
            fontWeight: "500",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          View all species <ArrowRight size={16} />
        </Link>
      </div>

      <div className="card-grid">
        {FAMOUS_DINOS.map((dino, index) => (
          <motion.div
            key={dino.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <Link
              to={`/dinosaur/${dino.name}`}
              className="card-content"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(90, 90, 64, 0.1)",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                >
                  <Skull size={24} color="#5A5A40" />
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(90, 90, 64, 0.9)",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  <Star size={8} fill="white" />
                  Featured
                </div>
              </div>
              <span
                style={{
                  color: "#5A5A40",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                {dino.period}
              </span>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {dino.name}
              </h3>
              <p
                style={{
                  color: "rgba(44, 36, 30, 0.6)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                {dino.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Learn More
                <Info size={16} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
