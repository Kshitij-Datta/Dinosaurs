import { ArrowUp } from "lucide-react";

export default function ScrollTopButton({ onClick }) {
  return (
    <button onClick={onClick} className="scroll-top-btn">
      <ArrowUp size={24} />
    </button>
  );
}
