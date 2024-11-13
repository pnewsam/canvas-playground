import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const getCanvas = () => {
  const el = document.querySelector("canvas");
  return el;
};

document.querySelector("#app").innerHTML = `
  <div>
  </div>
`;
