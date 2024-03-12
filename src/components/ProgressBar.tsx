import React from 'react';
import Step from './Step';

interface ProgressBarProps {
  steps: string[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;

}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, activeStep, setActiveStep }) => {
  return (
    <div className="flex w-max h-full justify-between flex-col items-start">
      {steps.map((step, index) => (
        <Step
          key={index}
          label={step}
          isActive={index === activeStep}
          onClick={() => setActiveStep(index)}
          containerClass={index === 0 ? "items-start" : index === steps.length - 1 ? "items-end" : "items-center"}
        />
      ))}
      <div
        className="h-full bg-yellow-300 border-current border-solid absolute top-0"
        style={{ left: "4%", transform: "translateX(-50%)" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
