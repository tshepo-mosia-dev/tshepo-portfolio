const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Large blur */}
      <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      {/* Small blur */}
      <div className="absolute right-24 top-40 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

      {/* Bottom blur */}
      <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
};

export default HeroBackground;