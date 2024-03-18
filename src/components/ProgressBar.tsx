import React from 'react';
import Step from './Step';
import TabsComponents from './TabsComponent';
import NigmaPlanet from '../assets/NingmaPlanet.png'
import NigmaForce from '../assets/NigmaForce.png'
import NigmaConstellation from '../assets/NigmaConstellation.png'

import NigmaPlanetHover from '../assets/NigmaPlanetHover.png'
import NigmaForceHover from '../assets/NigmaForceHover.png'
import NigmaConstellationHover from '../assets/NigmaConstellationHover.png'

interface ProgressBarProps {
  steps: string[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;

}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, activeStep, setActiveStep }) => {
  return (
    <div className='justify-between flex xl:gap-2 2xl:gap-10 items-start h-full'>

      <div className="flex w-max h-full justify-between flex-col items-start">
        {steps.map((step, index) => (
          <Step
            key={index}
            label={step}
            isActive={index === activeStep}
            onClick={() => setActiveStep(index)}
            containerClass={index === 0 ? "items-start " : index === steps.length - 1 ? "" : "items-center"}
          />
        ))}
        <div
          className="h-full bg-yellow-300 border-current border-solid absolute top-0"
          style={{ height: "97%", left: "1.3%", transform: "translateX(-50%)" }}
        ></div>
      </div>
      {/* <h1>Hola mundo</h1> */}
      <div className='hidden lg:flex flex-col items-center'>
      {activeStep === 0 && (
          <TabsComponents ruta={NigmaPlanet} titulo="Nigma Planet" contenido="Contenido estratégico digital, impreso y editorial previsto de conceptos disruptivos e innovadores" rutaHover={NigmaPlanetHover} />
        )}
        {activeStep === 1 && (
          <TabsComponents ruta={NigmaForce} titulo="Nigma Force" contenido="Soluciones creativas y coordinación de presentaciones, gestión cultural, creación de talleres, formación editorial y transmedia certificadas." rutaHover={NigmaForceHover} />
        )}
        {activeStep === 2 && (
          <TabsComponents ruta={NigmaConstellation} titulo="Nigma Constellation" contenido="Consultoría hipermedia y acompañamiento crossmedia. Implementación de narrativas transmedia y estrategias de comunicación ideales. Asesoría e-learning de alto alcance tecnológico y planeación pedagógica actualizada" rutaHover={NigmaConstellationHover} />
        )}
      </div>
    </div>
  );
};

export default ProgressBar;


