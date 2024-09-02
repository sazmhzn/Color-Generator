import { useEffect, useState } from "react";
// import ColorCard from "../components/ColorCard";
import Alert from "../components/Alert";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
// import Loading from "../components/Loading";
import { Reorder } from "framer-motion";
import ColorCard from "../components/ColorCard";
import { CACHE_INITIAL_STATE, INITIAL_COLORS } from "../utils/constant";
import { generateColorName, generateRandomColor } from "../utils/colorUtils";
import { Color } from "../utils/interfaces";
import { useMediaQuery } from "../services/colorServices";

const ColorGen = () => {
  const [color, setColor] = useState<Color[]>(INITIAL_COLORS);
  const [alert, setAlert] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const cache = CACHE_INITIAL_STATE;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const generateColors = async () => {
    const newColors = await Promise.all(
      color.map(async (color) => {
        if (color.locked) return color;
        const newColorValue = generateRandomColor();
        const { name, contrast } = await generateColorName(
          newColorValue.slice(1),
          cache
        );
        return {
          ...color,
          name,
          value: newColorValue,
          contrast,
        };
      })
    );
    setColor(newColors);
    // setIsLoading(false);
  };

  // const handlePlus = async () => {
  //   const newColorValue = generateRandomColor();
  //   const { name, contrast } = await generateColorName(
  //     newColorValue.slice(1),
  //     cache
  //   );
  //   setColor((prev) => [
  //     ...prev,
  //     {
  //       id: prev.length + 1,
  //       name,
  //       value: newColorValue,
  //       contrast,
  //       locked: false,
  //     },
  //   ]);
  // };

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
    setColor((prev) => prev.filter((item) => item.value !== colorToDelete));
  };

  // useEffect(() => {
  //   generateColors();
  // }, []);

  // Spacebar event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent the default spacebar scroll behavior
        generateColors();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [color]); // Include color in dependencies to ensure the effect updates properly

  // if (isLoading) return <Loading />;

  return (
    <section className="p-2">
      <Reorder.Group
        axis={isMobile ? "y" : "x"}
        values={color}
        onReorder={setColor}
        className="flex max-md:flex-col items-center flex-wrap mb-4 gap-0"
      >
        {color.map((item, index) => (
          <Reorder.Item
            key={item.name}
            value={item}
            className=" flex items-center max-md:h-[10vh] max-md:w-[100%]  flex-1"
          >
            <ColorCard
              key={`${item.name}${item.id}`}
              setAlert={setAlert}
              // toggleLock={() => setColor(toggleLock(color, index))}
              toggleLock={() => {
                const newColor = [...color];
                newColor[index].locked = !newColor[index].locked;
                setColor(newColor);
              }}
              setColor={setColor}
              color={item}
              handleDelete={handleDelete}
              className="px-4 py-8 max-sm:py-4 min-h-[75vh] max-md:py-4  max-md:min-h-[20vh]  max-sm:min-h-[16vh] w-full flex-1 flex flex-col items-center justify-end"
            />
            <span onClick={handlePlus} className="hidden absolute bg-gray-600">
              {" "}
              +{" "}
            </span>
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
          <span> Plus </span>
        </button>
        <button
          className=" cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={generateColors}
          tabIndex={1}
        >
          Generate
        </button>
      </div>
      {alert && <Alert alert={alert} />}
    </section>
  );
};

export default ColorGen;
