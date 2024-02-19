import React from 'react';
import './styles/slider.scss';
export interface SliderRef {
  setValue: (value: number) => void;
}
export interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onChangeAfter?: (value: number) => void;
  style?: React.CSSProperties &
    Partial<Record<'--slider-bar-fill-color' | '--slider-background-color' | '--slider-button-color', string>>;
}
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<SliderRef>>;
export default Slider;
