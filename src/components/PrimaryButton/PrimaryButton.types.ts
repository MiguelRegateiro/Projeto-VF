import { ReactNode } from "react";

export interface PrimaryButtonProps {
    children: ReactNode;
    icon?: ReactNode; 
    onClick?: () => void;
  }