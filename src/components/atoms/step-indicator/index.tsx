import * as Styles from "./styles.css";

export type Props = {
  maxStep: number;
  currentStep: number;
  onClick: (e: number) => void;
};

export const StepIndicator = ({ maxStep, currentStep, onClick }: Props) => {
  const indicators = [];
  for (let index = 0; index < maxStep; index++) {
    indicators.push(
      <div
        key={index}
        className={index === currentStep ? Styles.active : Styles.inactive}
        onClick={() => onClick(index)}
      ></div>
    );
  }

  return <div className={Styles.container}>{indicators}</div>;
};
