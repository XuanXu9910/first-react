import React from "react";
import { BtnProvider, useBtnContext } from "./context/BtnContext";

// 使用 context 在 component 間傳遞參數

const D: React.FC = () => {
  const data = useBtnContext();
  console.log("btnVisible D", data.btnVisible);
  return <button>D按鈕</button>;
};

const C: React.FC = () => {
  return (
    <>
      <p>C 組件</p>
      <D />
    </>
  );
};

const B: React.FC = () => {
  return (
    <>
      <p>B 組件</p>
      <C />
    </>
  );
};

const App: React.FC = () => {
  return (
    // 使用 BtnProvider 包裹住要傳遞參數的起始 component
    // 實際上是將 children component 傳遞至 BtnContext.Provider 中
    <BtnProvider>
      <h1>APP</h1>
      <B />
    </BtnProvider>
  );
};

export default App;
