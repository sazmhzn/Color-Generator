import { useEffect, useState } from "react";
import { generateRandomColor } from "../utils/colorUtils";
import { getColorScheme } from "../services/colorServices";
import { MODES } from "../utils/constant";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { CheckIcon } from "@heroicons/react/24/outline";
import Heading from "../components/Heading";

interface Colors {
  hex: { value: string };
  contrast: { value: string };
}
interface ColorScheme {
  colors: Colors[];
}
interface Scheme {
  baseColor: string;
  colors: Colors[];
}

const ColorSheme = () => {
  const [colorScheme, setColorScheme] = useState<Scheme[]>([]);
  const [tabs, setTabs] = useState(MODES);
  const [selectedTab, setSelectedTab] = useState(MODES[0].name);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    const fetchColorScheme = async () => {
      setIsLoading(true);
      // const newColorValue = generateRandomColor();
      try {
        // const scheme = await getColorScheme(
        //   newColorValue.slice(1),
        //   selectedTab
        // );
        // setColorScheme(scheme.colors);
        const schemes = [];
        for (let i = 0; i < 9; i++) {
          // Generating 3 different schemes
          const newColorValue = generateRandomColor();
          const scheme = (await getColorScheme(
            newColorValue.slice(1),
            selectedTab
          )) as ColorScheme;
          schemes.push({ baseColor: newColorValue, colors: scheme.colors });
        }

        setColorScheme(schemes);
        setIsLoading(false);
        console.log(colorScheme);
      } catch (error) {
        console.error("Error fetching color scheme:", error);
      }
    };
    fetchColorScheme();

    return () => {
      setColorScheme([]);
    };
  }, [selectedTab]);

  const handleActive = (mode: string) => {
    setSelectedTab(mode);
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === mode ? { ...tab, active: true } : { ...tab, active: false }
      )
    );
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setAlert("Copied to clipboard: " + value);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-2 px-6">
      <Heading />

      <div className=" mb-4">
        <ul className="flex gap-4 items-center justify-center">
          {tabs &&
            tabs.map((item) => {
              return (
                <li
                  key={item.name}
                  className={`flex-1 font-semibold cursor-pointer hover:text-blue-500  p-2 rounded-md text-xs ${
                    item.active
                      ? "text-blue-600 font-bold bg-neutral-300"
                      : "text-neutral-700 "
                  }`}
                  onClick={() => handleActive(item.name)}
                >
                  {item.name}
                </li>
              );
            })}
        </ul>
      </div>

      <div className="flex min-h-[100vh] flex-wrap gap-4">
        <div className="flex flex-wrap min-h-40 w-[100vw] gap-4 overflow-hidden rounded-lg ">
          {colorScheme &&
            colorScheme.map((scheme) => {
              return (
                <div className="flex flex-wrap w-[29%] rounded-md bg-neutral-900">
                  {scheme.colors.map((item) => {
                    return (
                      <div
                        className="flex-1 flex item-center justify-center group"
                        style={{
                          backgroundColor: item.hex.value,
                          color: item.contrast.value,
                        }}
                      >
                        <span
                          className="hidden group-hover:block p-4 text-xs "
                          style={{
                            transition: "opacity 0.2s ease-in-out",
                          }}
                          onClick={() => handleCopy(item.hex.value)}
                        >
                          {" "}
                          {alert ? (
                            <CheckIcon className="w-4 h-4" />
                          ) : (
                            item.hex.value.slice(1)
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
      {alert && <Alert alert={alert} />}
    </div>
  );
};

export default ColorSheme;
