import CV from "../../asset/Kshitij_Datta.pdf";

export default function Footer() {
  return (
    <section
      style={{
        backgroundColor: "#5A5A40",
        color: "white",
        padding: "80px 1rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {/* Column 1: The Data Stat */}
        <div>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            3,750+
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "12px",
            }}
          >
            Dinosaur Data
          </div>
        </div>

        {/* Column 2: Credits */}
        <div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Credits
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontSize: "13px",
            }}
          >
            <a
              href="https://paleobiodb.org/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              PBDB API Data
            </a>
            <a
              href="https://iconscout.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Iconscout Assets
            </a>
          </div>
        </div>

        {/* Column 3: About the Developer + Credits */}
        <div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Built by Kshitij Datta
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontSize: "13px",
            }}
          >
            <a
              href="https://github.com/Kshitij-Datta"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              GitHub
            </a>
            <a
              href="https://kshitijdatta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Portfolio
            </a>
            <a
              href="https://linkedin.com/in/kshitij-datta-sde"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Resume{" "}
              <i
                className="uil uil-external-link-alt"
                style={{ color: "white" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
