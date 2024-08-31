import { Field, Label } from "@headlessui/react";
import Heading from "../components/Heading";
import { ColorPicker, Select } from "antd";
import { useMemo, useState } from "react";
import { Color } from "antd/es/color-picker";

const positionItems = [
  { label: "20%", value: "20%", key: "0" },
  { label: "40%", value: "40%", key: "1" },
  { label: "90%", value: "90%", key: "2" },
];

const rotationItems = [
  { label: "20deg", value: "20deg" },
  { label: "45deg", value: "45deg" },
  { label: "90deg", value: "90deg" },
  { label: "135deg", value: "135deg" },
];

const typeItems = [
  { label: "linear", value: "linear" },
  { label: "radial", value: "radial" },
];

interface GradientValue {
  position: string;
  rotation: string;
  type: "linear" | "radial";
}

const GenerateGradient = () => {
  // const [inputValue, setInputValue] = useState<number[]>([0, 100]);
  const [gradientValue, setGradientValue] = useState<GradientValue>({
    position: "20%",
    rotation: "45deg",
    type: "linear",
  });

  const handleColorChange = (color: string, isFrom: boolean) => {
    setGradientValue((prev) => ({
      ...prev,
      [isFrom ? "from" : "to"]: color,
    }));
  };

  const handleSelectChange = (key: keyof GradientValue, value: string) => {
    setGradientValue((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(gradientValue);
  };

  const [colorFrom, setColorFrom] = useState<Color>("#00ff33");
  const [colorTo, setColorTo] = useState<Color>("#00ff33");

  const hexFrom = useMemo<string>(
    () =>
      typeof colorFrom === "string" ? colorFrom : colorFrom?.toHexString(),
    [colorFrom]
  );

  const hexTo = useMemo<string>(
    () => (typeof colorTo === "string" ? colorTo : colorTo?.toHexString()),
    [colorTo]
  );

  return (
    <section className="">
      <Heading title="Gradient Create" description="Create gradients" />

      <div className="flex  items-center justify-center gap-4">
        <div className="flex flex-col w-[40%] items-center justify-center gap-4">
          <div className=" w-full">
            {/* <div className="bg-red-200 rounded w-full h-6"></div> */}
            <div className="flex justify-between">
              {/* <span className="text-sm">From</span> */}
              <div className="flex flex-col items-center">
                From
                <ColorPicker
                  value={colorFrom}
                  onChange={(color) => {
                    setColorFrom(color);
                    handleColorChange(color.toHexString(), true);
                  }}
                  className="border-none flex flex-row-reverse justify-between font-medium"
                />
              </div>
              <div className="flex flex-col items-center">
                To
                <ColorPicker
                  value={colorTo}
                  onChange={(color) => {
                    setColorTo(color);
                    handleColorChange(color.toHexString(), true);
                  }}
                  className="border-none flex flex-row-reverse justify-between font-medium"
                />
              </div>

              {/* <span className="text-sm ">To</span> */}
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <Field className=" flex-1">
              <Label className="text-sm data-[disabled]:opacity-50">
                Position
              </Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Select
                  defaultValue={gradientValue.position}
                  style={{ borderColor: "transparent" }}
                  // onChange={setPosition((e) => e)}
                  options={positionItems}
                  bordered={false}
                  onChange={(value) => handleSelectChange("position", value)}
                  className="w-full border-0 outline-gray-900"
                />
              </div>
            </Field>
          </div>
          <div className="flex w-full gap-4">
            <Field className="flex-1">
              <Label className="text-sm data-[disabled]:opacity-50">
                Rotation
              </Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Select
                  defaultValue="45deg"
                  style={{ borderColor: "transparent" }}
                  onChange={(value) => handleSelectChange("rotation", value)}
                  options={rotationItems}
                  bordered={false}
                  className="w-full border-0 outline-gray-900"
                />
              </div>
            </Field>
            <Field className="flex-1">
              <Label className="text-sm data-[disabled]:opacity-50">Type</Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Select
                  defaultValue="linear"
                  style={{ borderColor: "transparent" }}
                  // onChange={handleChange}
                  options={typeItems}
                  bordered={false}
                  className="w-full border-0 outline-gray-900"
                />
              </div>
            </Field>
          </div>
          <button className=" cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Generate
          </button>
        </div>
        <div
          style={{
            background: `linear-gradient(${
              gradientValue.rotation || "45deg"
            }, ${hexFrom} ${gradientValue.position}, ${hexTo} 100%)`,
          }}
          className={` h-72 w-72 rounded-md`}
        ></div>
      </div>
    </section>
  );
};

export default GenerateGradient;
