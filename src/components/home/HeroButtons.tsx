import Button from "../ui/Button";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        View Projects
      </Button>

      <Button variant="secondary">
        Download CV
      </Button>
    </div>
  );
};

export default HeroButtons;