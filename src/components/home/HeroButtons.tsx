import Button from "../ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";


const HeroButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => navigate("/projects")}>
        <span className="flex items-center gap-2">
          View Projects
          <ArrowRight size={18} />
        </span>
      </Button>

      <a href="/tshepo-mosia-cv.pdf" download>
        <Button variant="secondary">
          <span className="flex items-center gap-2">
            Download CV
            <Download size={18} />
          </span>
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;