import ColorCard from "./ColorCard"; // Adjust the path as needed

interface ColorGroupProps {
  colors: {
    color: string;
    name: string;
    contrast?: string;
    locked?: boolean;
  }[];
  setAlert: (message: string) => void;
  toggleLock: (index: number) => void;
}

const ColorGroup = ({ colors, setAlert, toggleLock }: ColorGroupProps) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {colors.map((item, index) => (
        <ColorCard
          key={index}
          value={item.color} // Use 'value' instead of 'color'
          name={item.name}
          contrast={item.contrast}
          locked={item.locked}
          setAlert={setAlert}
          toggleLock={() => toggleLock(index)} // Ensure proper index handling
        />
      ))}
    </div>
  );
};

export default ColorGroup;
