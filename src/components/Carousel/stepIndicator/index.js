// import Styles from "./StepIndicators.css";

// export const StepIndicator = props => {
//   console.log("currentStep ", props.currentStep);
//   const indicators = [];
//   for (let index = 0; index < props.maxStep; index++) {
//     indicators.push(
//       <div
//         style={{
//           backgroundColor: "red",
//           height: "0.1vw",
//           margin: "1",
//           width: "3vw",
//           display: "inline-block"
//         }}
//         key={index}
//         className={
//           index === props.currentStep ? Styles.active : Styles.inactive
//         }
//         onClick={() => props.onClick(index)}
//       ></div>
//     );
//   }

//   return <div className={Styles.container}>{indicators}</div>;
// };
