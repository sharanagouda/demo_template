import { CosmosView } from "@discovery/components-luna/typings/cosmos";
import { StepIndicator, Props } from "../";

const StepIndicator1: CosmosView<Props> = {
  component: StepIndicator,
  name: `Step Indicator`,
  props: {
    maxStep: 5,
    currentStep: 2,
    onClick: number => console.info(number)
  }
};

export default [StepIndicator1];
