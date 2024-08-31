import ColorCard from "./ColorCard"; // Adjust the path as needed

interface ColorGroupProps {
  colors: {
    color: string;
    name: string;
    // value: string;
    contrast?: string;
    locked?: boolean;
  }[];
  setAlert: (message: string) => void;
  toggleLock: (index: number) => void;
  handleDelete: (color: string) => void;
  className: string;
}

const ColorGroup = ({
  colors,
  setAlert,
  toggleLock,
  handleDelete,
  className,
}: ColorGroupProps) => {
  return (
    <div className={`flex items-center flex-wrap gap-4`}>
      {colors.map((item, index) => (
        <ColorCard
          key={index}
          value={item.color}
          name={item.name}
          contrast={item.contrast}
          locked={item.locked}
          setAlert={setAlert}
          handleDelete={handleDelete}
          className={className}
          toggleLock={() => toggleLock(index)} // Ensure proper index handling
        />
      ))}
    </div>
  );
};

export default ColorGroup;
