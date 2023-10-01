import React from 'react';
import { TypeImageProps } from './TypeImage.types';


const TypeImage: React.FC<TypeImageProps> = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default TypeImage;
