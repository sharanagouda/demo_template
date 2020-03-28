export const ping = ({ onSuccess, onError }) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/health-check");
  xhr.onload = onSuccess;
  xhr.onerror = onError;
  xhr.send();
};
