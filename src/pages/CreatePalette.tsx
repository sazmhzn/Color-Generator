import { useState } from "react";
import { Color } from "../utils/interfaces";
import { getColorByHex } from "../services/colorServices";

const CreatePalette = () => {
  const [inputValue, setinputValue] = useState("");
  const [colorData, setColorData] = useState<Color>();
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const handleSearch = () => {
    if (!inputValue) {
      setError("Please enter a color code");
      return;
    }
    // Call the API to get color data
    getColorByHex(inputValue)
      .then((data) => {
        setColorData(data); // Store the fetched color data
        setError(""); // Clear any previous error messages
      })
      .catch((error) => {
        setError("Failed to retrieve color data"); // Set error if the API call fails
        console.error(error);
      });
  };

  return (
    <section className="p-6 h-screen">
      {/* <Heading title="Search Your Colors" description="Search" /> */}
      <form className="mb-4">
        <div className="mx-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border-b-2 w-full p-4 focus:outline-none"
            placeholder="Search Color"
          />
        </div>
        <button
          type="button"
          onClick={handleSearch}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </form>

      {colorData && (
        <div className="flex gap-4 bg-neutral-200 min-h-[50vh] rounded-xl p-4">
          <div
            className="w-[10em] h-[10em] flex items-center justify-center rounded-lg font-semibold"
            style={{
              backgroundColor: `#${colorData.hex.clean}`,
              color: colorData?.contrast.value,
            }}
          >
            {colorData?.hex.clean}
          </div>
          <div>
            <header className="mb-4">
              <h1 className="text-4xl font-bold text-neutral-900">
                {" "}
                {colorData?.name.value}{" "}
              </h1>
            </header>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreatePalette;
