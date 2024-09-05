const GradientGroup = ({
  setAlert,
}: {
  setAlert: (message: string) => void;
}) => {
  const gradientCards = [
    { from: "#00ff33", to: "#00450e" },
    { from: "#ff5733", to: "#c70039" },
    { from: "#33d9ff", to: "#083d77" },
    { from: "#f5a623", to: "#f8e71c" },
    { from: "#9b59b6", to: "#34495e" },
    { from: "#ff69b4", to: "#8a2be2" },
    { from: "#ff4500", to: "#ffa500" },
    { from: "#40e0d0", to: "#008080" },
    { from: "#add8e6", to: "#00008b" },
    { from: "#f08080", to: "#ff6347" },
    { from: "#00fa9a", to: "#006400" },
    { from: "#1e90ff", to: "#00bfff" },
    { from: "#ff1493", to: "#ff69b4" },
    { from: "#ffa07a", to: "#20b2aa" },
    { from: "#7b68ee", to: "#6a5acd" },
  ];

  const handleCopy = (from: string, to: string) => {
    navigator.clipboard.writeText(`bg-gradient-to-r from-[${from}] to-[${to}]`);
    setAlert("Copied to clipboard");
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  return (
    <div className="flex items-start justify-center flex-wrap gap-4 mx-auto w-full px-8 ">
      {gradientCards.map((gradient, index) => (
        <div
          key={index}
          className="w-72 h-52 rounded-lg shadow-lg group"
          style={{
            background: `linear-gradient(45deg, ${gradient.from}, ${gradient.to})`,
          }}
        >
          <div className="hidden justify-center items-center h-full group-hover:flex">
            <span
              className="text-white font-medium cursor-pointer"
              onClick={() => handleCopy(gradient.from, gradient.to)}
            >
              {gradient.from.toUpperCase()}, {gradient.to.toUpperCase()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradientGroup;
