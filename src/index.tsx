import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './unit1/App';
// import App2 from './unit1/App2';
// import App from './unit2/App';
// import App from './unit3/App';
import App from './unit4/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// unit3
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

// unit4
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);