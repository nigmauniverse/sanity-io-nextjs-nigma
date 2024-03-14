import React from "react";
import Image from "next/image";
import CustomImage from "./CustomImage";


interface StepProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
  containerClass: string; // Nueva prop para la clase del contenedor
  style?: React.CSSProperties; // Haciendo que style sea opcional

}

const Step: React.FC<StepProps> = ({ isActive, label, onClick, containerClass, style }) => {
  return (
    <div className={`flex ${containerClass} relative z-20`} style={style}> {/* Usando la propiedad style */}
      <div
        onClick={onClick}
        className={`rounded-full border-2 border-current cursor-pointer ${isActive ? 'border-solid border-3 border-yellow-300 w-[1.7rem] h-[1.7rem] ' : 'bg-m3-sys-light-primary w-5 h-5'}`}
      >
        {isActive && (
          (label === 'Nigma Planet' && (
            <CustomImage top="-7.8rem" />
          )) ||
          (label === 'Nigma Constellation' && (
            <CustomImage top="-7.8rem" />
          )) ||
          (
            <CustomImage top="-7.8rem" />
          )
        )}
      </div>
      <span className={`ml-2 ${label === 'Nigma Force' ? 'absolute -left-48' : null} ${isActive ? 'text-[#84F3FF]' : 'text-[#006971]'}`}>{label}</span>
    </div>
  );
};

export default Step;
