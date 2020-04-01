import Styles from "./StepIndicators.css";

export const StepIndicator = props => {
  const indicators = [];
  for (let index = 0; index < props.maxStep; index++) {
    indicators.push(
      <div
        style={{
          backgroundColor: "red",
          height: "0.5",
          margin: "1",
          display: "block"
        }}
        key={index}
        className={
          index === props.currentStep ? Styles.active : Styles.inactive
        }
        onClick={() => props.onClick(index)}
      ></div>
    );
  }

  return <div className={Styles.container}>{indicators}</div>;
};
