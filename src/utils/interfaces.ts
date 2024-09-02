export interface Color {
  id?: number;
  name: string;
  hex?: string;
  value: string;
  contrast: string;
  locked?: boolean;
}

export interface ColorCardProps {
  color: Color;
  setColor: (colors: Color[]) => void;
  setAlert: (message: string) => void;
  toggleLock: () => void;
  handleDelete: (color: string) => void;
  // dragControls: () => void;
  className?: string;
  onPointerDown?: (e: PointerEvent) => void;
}

export interface AlertProps {
  alert: string;
}

export interface ColorSheme {
  colors: Color[];
}

export interface GradientValue {
  position: string;
  rotation: string;
  type: "linear" | "radial";
}
