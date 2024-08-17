import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-2">
      <Header />
      {/* <Reorder.Group
        axis="x"
        values={color}
        onReorder={setColor}
        className="flex items-center flex-wrap mb-4 gap-0"
      >
        {color.map((item, index) => (
          <Reorder.Item key={item} value={item} className="flex-1">
            <ColorCard
              key={`${item.name}${item.id}`}
              value={item.value}
              name={item.name}
              contrast={item.contrast}
              locked={item.locked}
              setAlert={setAlert}
              toggleLock={() => toggleLock(index)}
              // handlePointerDown={handlePointerDown}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="flex gap-4 justify-center">
        <button
          className="text-sm font-semibold px-4 py-2 bg-blue-200 rounded-md flex items-center justify-center gap-2"
          onClick={handlePlus}
          tabIndex={-1}
        >
          <PlusCircleIcon className="w-6 h-6" />
          <span> Plus </span>
        </button>
        <button
          className="text-sm font-semibold px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={generateColors}
          tabIndex={1}
        >
          Generate
        </button>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Layout;
