export const loadDep = (tag, url) =>
  new Promise((resolve, reject) => {
    const element = document.createElement(tag);
    let parent = "body";
    let attr = "src";

    element.onload = () => {
      resolve(url);
    };
    element.onerror = () => {
      reject(url);
    };

    if (tag === "script") {
      element.async = true;
    }

    if (tag === "link") {
      element.type = "text/css";
      element.rel = "stylesheet";
      attr = "href";
      parent = "head";
    }

    element[attr] = url;
    document[parent].appendChild(element);
  });
