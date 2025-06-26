import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./unit1/App";
// import App2 from "./unit1/App2";
// import App from "./unit2/App";
// import App from "./unit3/App";
// import App from "./unit4/App";
import App from "./unit5/App";
// import App from './unit6/App';

const root = ReactDOM.createRoot(
  // 必須宣告 document.getElementById('root') 為 HTMLElement
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// unit3
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);
