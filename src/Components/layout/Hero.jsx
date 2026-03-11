import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">Uncover the Prehistoric</span>
          <h1 className="hero-title">
            Journey Back <br /> <span>66 Million Years</span>
          </h1>
          <p className="hero-description">
            Explore the giants that once ruled our planet. Powered by real-time
            paleontological data from the Paleobiology Database.
          </p>
          <Link to="/explorer" className="btn-primary">
            Start Exploring
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
