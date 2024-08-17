import { useEffect, useState } from "react";
import { generateRandomColor } from "../utils/colorUtils";
import { getColorScheme } from "../services/colorServices";
import { color } from "framer-motion";

const ColorSheme = () => {
  const modes = ["monocromatic", "analogic"];

  const [colorScheme, setColorScheme] = useState([]);
  const [tabs, setTabs] = useState(modes);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    const fetchColorScheme = async () => {
      const newColorValue = generateRandomColor();
      try {
        const scheme = await getColorScheme(
          newColorValue.slice(1),
          selectedTab
        );
        console.log(scheme, "Sceheme");
        setColorScheme(scheme.colors);
      } catch (error) {
        console.error("Error fetching color scheme:", error);
      }
    };
    fetchColorScheme();

    // Cleanup function, if needed
    return () => {
      setColorScheme([]);
    };
  }, [tabs]);

  return (
    <div className="p-2 px-6">
      <header>
        <h1 className="text-4xl mb-2 font-bold max-md:text-2xl max-sm:text-2xl">
          Color Scheme
        </h1>
      </header>

      <div className="flex min-h-[40vh]">
        {colorScheme &&
          colorScheme.map((item, index) => {
            return (
              <div
                key={index}
                className=" p-2 flex-1 flex items-end justify-center mb-4"
                style={{ backgroundColor: item.hex.value }}
              >
                {item.name.value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ColorSheme;
