import React from 'react';
export interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: string;
  style?: React.CSSProperties;
  lazy?: boolean;
  fit?: 'contain' | 'cover' | 'fill' | 'scale-down';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
declare const Image: React.FC<ImageProps>;
export default Image;
