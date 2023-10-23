"use client"

import React from 'react'
import { steps } from '@/data';
import Stepper from 'react-stepper-horizontal';
import AboutSectionStep from '@/components/steps/AboutSectionStep';
import AchievementsStep from '@/components/steps/AchievementsStep';
import ExperienceStep from '@/components/steps/ExperienceStep';
import EducationStep from '@/components/steps/EducationStep';
import SkillsStep from '@/components/steps/SkillsStep';
import ProjectStep from '@/components/steps/ProjectStep';
import GenerateStep from '@/components/steps/GenerateStep';
import CertificationStep from '@/components/steps/CertificationStep';
import { ActiveStepContext } from './providers/ActiveStepContext';


export default function EnterDetails() {

    const [step, setStep] = React.useState<number>(0);

    function setActiveStep(index: number) {
        setStep(index)
    }

    function getSectionComponent() {
        switch (step) {
            case 0: return <AboutSectionStep />;
            case 1: return <EducationStep />;
            case 2: return <SkillsStep />;
            case 3: return <AchievementsStep />;
            case 4: return <ProjectStep />;
            case 5: return <CertificationStep />;
            case 6: return <ExperienceStep />;
            case 7: return <GenerateStep />;
            default: return null;
        }
    }

    return (
        <ActiveStepContext.Provider value={{
            step: step,
            setActiveStep: setActiveStep
        }}>
            <div className="h-full w-full overflow-y-scroll">
                <Stepper
                    steps={steps}
                    activeStep={step}
                    // lineMarginOffset={8}
                    titleFontSize={14}
                />
                <div>
                    {getSectionComponent()}
                </div>
            </div>
        </ActiveStepContext.Provider>
    )
}
