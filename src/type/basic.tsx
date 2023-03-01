import { SxProps } from "@mui/material";

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
};

export interface EventProps {
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export type obj = {
  [key: string]: any;
}


export type StyleProps = {
  style: SxProps<any>;
}