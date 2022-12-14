import ExternalStep from "./types/steps/ExternalSteps";
import IStep from "./types/steps/IStep";
import SetState from "./types/steps/SetState";

export const selectablesSteps: IStep[] = [
    new ExternalStep(""),
    new SetState()
];

/**
 * The step ID associated to the function that parse the step.
 */
export const stepsLoader: { [key: string]: (json: any) => IStep } = {
    [ExternalStep.ID]: ExternalStep.load,
}

export const defaultStep = selectablesSteps[0];