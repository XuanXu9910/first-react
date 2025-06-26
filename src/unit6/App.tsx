import React from "react";

const AppStyle1 = {
  color: "blue",
};

const AppStyle2 = {
  color: "red",
};

const App: React.FC = () => {
  const status = true;

  return <h1 style={status ? AppStyle1 : AppStyle2}>Unit06</h1>;
};

export default App;
