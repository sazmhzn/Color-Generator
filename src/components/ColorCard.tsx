import {
  DocumentDuplicateIcon,
  LockOpenIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface ColorCardProps {
  value: string;
  name: string;
  contrast?: string;
  locked?: boolean;
  setAlert: (message: string) => void;
  toggleLock: () => void;
  handleDelete: (color: string) => void;
  className: string;
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
  className,
}: ColorCardProps) => {
  const [show, setShow] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setAlert("Copied to clipboard");
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  return (
    <div
      className={className}
      // value={value}
      // dragListener={false}
      // dragControls={controls}
      style={{
        backgroundColor: value,
        border: locked ? "2px Solid #1B1417" : "",
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      aria-label={`Color card ${name}`}
      role="region"
    >
      <div
        className="mb-12 max-md:mb-2  max-sm:mb-2 rounded-md p-2 flex max-sm:flex-row max-md:flex-row  flex-col gap-4 max-sm:gap-2 items-end"
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          visibility: show ? "visible" : "hidden",
          opacity: show ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
        aria-hidden={!show}
      >
        <button
          aria-label="Delete color"
          onClick={() => handleDelete(value)}
          className="focus:outline-none"
        >
          <XMarkIcon
            aria-hidden="true"
            className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
          />
        </button>
        <button
          aria-label="Copy color code"
          onClick={handleCopy}
          className="focus:outline-none"
        >
          <DocumentDuplicateIcon
            aria-hidden="true"
            className="h-6 w-6 text-[rgba(0,0,0,0.9)] hover:text-[rgba(0,0,0,1)]"
          />
        </button>

        <button
          onClick={() => {
            toggleLock();
            setShow(!show);
          }}
          aria-label={locked ? "Unlock color" : "Lock color"}
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
      <div
        className={`flex flex-col items-center`}
        style={{ color: contrast }}
        role="contentinfo"
      >
        <h1
          className={`text-4xl mb-2 max-sm:mb-0 font-bold max-md:text-2xl max-sm:text-2xl`}
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
