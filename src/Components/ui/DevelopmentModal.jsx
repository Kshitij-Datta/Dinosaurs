import { useState } from "react";

export default function DevelopmentModal() {
  const [isOpen, setIsOpen] = useState(true);

  // If the user clicked confirm, don't render anything
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modalBox}>
        <h2 style={styles.title}>🚧 Work in Progress</h2>
        <p style={styles.message}>
          This web app is still under development and some functions may not
          work appropriately (like the "Sort by ID" feature) — so please excuse
          the dust!
        </p>
        <button
          style={styles.button}
          onClick={() => setIsOpen(false)}
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          I Understand
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modalBox: {
    backgroundColor: "#FAF8F5",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    fontFamily: "inherit",
    color: "#333",
  },
  title: {
    marginTop: 0,
    fontSize: "1.4rem",
    color: "#2f3e46",
  },
  message: {
    fontSize: "1rem",
    lineHeight: "1.5",
    margin: "20px 0",
    color: "#4a4a4a",
  },
  button: {
    backgroundColor: "#354f52",
    color: "#cad2c5",
    border: "none",
    padding: "10px 24px",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
};
