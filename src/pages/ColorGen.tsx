import { useEffect, useState } from "react";
// import ColorCard from "../components/ColorCard";
import Alert from "../components/Alert";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Loading from "../components/Loading";
import { Reorder } from "framer-motion";
import ColorCard from "../components/ColorCard";
import { CACHE_INITIAL_STATE, INITIAL_COLORS } from "../utils/constant";
import {
  generateColorName,
  generateRandomColor,
  toggleLock,
} from "../utils/colorUtils";
import { Color } from "../utils/interfaces";

const ColorGen = () => {
  const [color, setColor] = useState<Color[]>(INITIAL_COLORS);
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const cache = CACHE_INITIAL_STATE;

  const generateColors = async () => {
    // setIsLoading(true);
    const newColors = await Promise.all(
      color.map(async (color) => {
        if (color.locked) return color;
        const newColorValue = generateRandomColor();
        const { name, contrast } = await generateColorName(
          newColorValue.slice(1),
          cache
        );
        return {
          id: color.id,
          name,
          value: newColorValue,
          contrast,
          locked: false,
        };
      })
    );
    setColor(newColors);
    // setIsLoading(false);
  };

  const handlePlus = async () => {
    const newColorValue = generateRandomColor();
    const { name, contrast } = await generateColorName(
      newColorValue.slice(1),
      cache
    );
    setColor((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name,
        value: newColorValue,
        contrast,
        locked: false,
      },
    ]);
  };

  const handleDelete = (colorToDelete: string) => {
    console.log("delete", colorToDelete);
    setColor((prev) => prev.filter((item) => item.value !== colorToDelete));
  };

  useEffect(() => {
    generateColors();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="p-2">
      <Reorder.Group
        axis="x"
        values={color}
        onReorder={setColor}
        className="flex max-md:flex-col items-center flex-wrap mb-4 gap-0"
      >
        {color.map((item, index) => (
          <Reorder.Item
            key={item.name}
            value={item}
            className="max-md:h-[10vh] max-md:w-[100%]  flex-1"
          >
            <ColorCard
              key={`${item.name}${item.id}`}
              value={item.value}
              name={item.name}
              contrast={item.contrast}
              locked={item.locked}
              setAlert={setAlert}
              toggleLock={() => setColor(toggleLock(color, index))}
              // handlePointerDown={handlePointerDown}
              handleDelete={handleDelete}
              className="px-4 py-8 min-h-[75vh]  max-md:min-h-[30vh]  max-sm:min-h-[16vh] w-full flex-1 flex flex-col items-center justify-end"
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="flex gap-4 justify-center">
        <button
          className="flex items-center justify-start gap-1 cursor-pointer transition-all bg-blue-200 text-blue-600 px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:brightness-90"
          onClick={handlePlus}
          tabIndex={-1}
        >
          <PlusCircleIcon className=" w-6 h-6 hover:rotate-90 duration-300" />
          <span className=""> Plus </span>
        </button>
        <button
          className="
          cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={generateColors}
          tabIndex={1}
        >
          Generate
        </button>
      </div>
      {alert && <Alert alert={alert} />}
    </div>
  );
};

export default ColorGen;
