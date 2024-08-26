export interface Color {
  id: number;
  name: string;
  hex?: string;
  value: string;
  contrast: string;
  locked?: boolean;
}

export interface AlertProps {
  alert: string;
}

export interface ColorSheme {
  colors: Color[];
}
