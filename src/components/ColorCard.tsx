import {
  DocumentDuplicateIcon,
  InformationCircleIcon,
  LockOpenIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDragControls, useMotionValue } from "framer-motion";
import { useState } from "react";

interface ColorCardProps {
  value: string;
  name: string;
  contrast?: string;
  locked?: boolean;
  setAlert: (message: string) => void;
  toggleLock: () => void;
  handleDelete: (color: string) => void;
  // color: [];
}

const ColorCard = ({
  value,
  name,
  contrast = "#000000",
  locked = false,
  setAlert,
  toggleLock,
  handleDelete,
}: ColorCardProps) => {
  const [show, setShow] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setAlert("Copied to clipboard");
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  const controls = useDragControls();
  const x = useMotionValue(0);
  return (
    <div
      className={`px-4 py-8 min-h-[80vh] max-md:min-h-[60vh] max-sm:min-h-[16vh] w-full flex-1 flex flex-col items-center justify-end `}
      // value={value}
      // dragListener={false}
      // dragControls={controls}
      style={{
        backgroundColor: value,
        border: locked ? "2px Solid #1B1417" : "",
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        className="mb-12 rounded-md p-2 flex flex-col gap-4 items-end"
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          visibility: show ? "visible" : "hidden",
          opacity: show ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      >
        <XMarkIcon
          aria-hidden="true"
          className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
          onClick={() => handleDelete(value)}
        />
        <InformationCircleIcon
          aria-hidden="true"
          className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
          onPointerDown={(e) => {
            console.log(e);
            controls.start(e);
          }}
        />
        <DocumentDuplicateIcon
          aria-hidden="true"
          className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
          onClick={handleCopy}
        />

        <button
          onClick={() => {
            toggleLock();
            setShow(!show);
          }}
        >
          {locked ? (
            <LockClosedIcon
              aria-hidden="true"
              className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
            />
          ) : (
            <LockOpenIcon
              aria-hidden="true"
              className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
            />
          )}
        </button>
      </div>
      <div className={`flex flex-col items-center`} style={{ color: contrast }}>
        <h1
          className={`text-4xl mb-2 font-bold max-md:text-2xl max-sm:text-2xl`}
        >
          {value.slice(1)}
        </h1>
        <p className={`text-sm font-medium text-center w-fit max-sm:text-sm`}>
          {name}
        </p>
      </div>
    </div>
  );
};

export default ColorCard;
