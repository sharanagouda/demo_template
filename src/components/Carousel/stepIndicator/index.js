import Styles from "./StepIndicators.css";

export const StepIndicator = props => {
  const indicators = [];
  for (let index = 0; index < this.props.maxStep; index++) {
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
          index === this.props.currentStep ? Styles.active : Styles.inactive
        }
        onClick={() => this.props.onClick(index)}
      ></div>
    );
  }

  return <div className={Styles.container}>{indicators}</div>;
};
