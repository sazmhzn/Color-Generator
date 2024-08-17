export interface Color {
  id: number;
  name: string;
  value: string;
  contrast: string;
  locked: boolean;
}

export interface AlertProps {
  alert: string;
}

export interface ColorScheme {
  colors: Color[];
}
