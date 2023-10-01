import React, { ReactNode } from 'react';

export interface CardProps {
    title: string;
    categories: string[];
    date: string;
    imageSrc: string;
    children?: ReactNode;
    categoriesColor?: string; 
  }
  