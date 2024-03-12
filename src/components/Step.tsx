import React from "react";
import "react-step-progress/dist/index.css";

interface StepProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
  containerClass: string; // Nueva prop para la clase del contenedor
  style?: React.CSSProperties; // Haciendo que style sea opcional

}

const Step: React.FC<StepProps> = ({ isActive, label, onClick, containerClass, style }) => {
  return (
    <div className={`flex ${containerClass} z-20`} style={style}> {/* Usando la propiedad style */}
      <div
        onClick={onClick}
        className={`rounded-full border-2 border-current cursor-pointer ${isActive ? 'border-solid border-3 border-yellow-300 w-6 h-6 ' : 'bg-m3-sys-light-primary w-5 h-5'}`}
      ></div>
      <span className={`ml-2 ${isActive ? 'text-[#84F3FF]' : 'text-[#006971]'}`}>{label}</span>
    </div>
  );
};

export default Step;
