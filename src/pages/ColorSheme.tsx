import { useEffect, useState } from "react";
import { generateRandomColor } from "../utils/colorUtils";
import { getColorSheme } from "../services/colorServices";
import { MODES } from "../utils/constant";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { CheckIcon } from "@heroicons/react/24/outline";
import Heading from "../components/Heading";

interface Colors {
  hex: { value: string };
  contrast: { value: string };
}
interface ColorSheme {
  colors: Colors[];
}
interface Scheme {
  baseColor: string;
  colors: Colors[];
}

const ColorSheme = () => {
  const [ColorSheme, setColorSheme] = useState<Scheme[]>([]);
  const [tabs, setTabs] = useState(MODES);
  const [selectedTab, setSelectedTab] = useState(MODES[0].name);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    const fetchColorSheme = async () => {
      setIsLoading(true);
      // const newColorValue = generateRandomColor();
      try {
        // const scheme = await getColorSheme(
        //   newColorValue.slice(1),
        //   selectedTab
        // );
        // setColorSheme(scheme.colors);
        const schemes = [];
        for (let i = 0; i < 9; i++) {
          // Generating 3 different schemes
          const newColorValue = generateRandomColor();
          const scheme = (await getColorSheme(
            newColorValue.slice(1),
            selectedTab
          )) as ColorSheme;
          schemes.push({ baseColor: newColorValue, colors: scheme.colors });
        }

        setColorSheme(schemes);
        console.log(ColorSheme);
      } catch (error) {
        console.error("Error fetching color scheme:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchColorSheme();

    return () => {
      setColorSheme([]);
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
        <ul className=" overflow-x-scroll flex gap-4 max-sm:gap-2 items-center justify-start">
          {tabs &&
            tabs.map((item) => {
              return (
                <li
                  key={item.name}
                  className={`flex-1 font-semibold max-sm:font-sm text-center cursor-pointer hover:text-blue-500  p-2 rounded-md text-xs ${
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

      <div className="flex flex-wrap gap-4">
        <div className="flex justify-center flex-wrap min-h-[30vh] w-[100vw] gap-4 overflow-hidden rounded-lg ">
          {ColorSheme &&
            ColorSheme.map((scheme) => {
              return (
                <div className="flex flex-wrap h-[30vh] w-[32%] max-sm:w-[100%] rounded-md bg-red-900">
                  {scheme.colors.map((item) => {
                    return (
                      <div
                        className="flex-1 flex items-center  justify-center group"
                        style={{
                          backgroundColor: item.hex.value,
                          color: item.contrast.value,
                        }}
                      >
                        <p
                          className="hidden h-fit font-bold group-hover:block text-sm "
                          style={{
                            transition: "opacity 0.2s ease-in-out",
                          }}
                          onClick={() => handleCopy(item.hex.value)}
                        >
                          {" "}
                          {alert ? (
                            <CheckIcon className="w-6 h-6" />
                          ) : (
                            item.hex.value.slice(1)
                          )}
                        </p>
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
