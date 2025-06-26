import React from "react";

// Render 機制

const App: React.FC = () => {
  const time = new Date().getSeconds();

  return <h1>{time}</h1>;
};

export default App;
