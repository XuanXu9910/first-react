import React, { useState } from "react";

// 在 component 間傳遞參數的傳統方式

type Props = {
  btnVisible: boolean;
};

const D: React.FC<Props> = ({ btnVisible }) => {
  // TODO del
  console.log("btnVisible D", btnVisible);
  return <button>D按鈕</button>;
};

const C: React.FC<Props> = ({ btnVisible }) => {
  return (
    <>
      <p>C 組件</p>
      <D btnVisible={btnVisible} />
    </>
  );
};

const B: React.FC<Props> = ({ btnVisible }) => {
  return (
    <>
      <p>B 組件</p>
      <C btnVisible={btnVisible} />
    </>
  );
};

const App: React.FC = () => {
  const [btnVisible, setBtnVisible] = useState(false);
  return (
    <>
      <h1>APP</h1>
      <B btnVisible={btnVisible} />
    </>
  );
};

export default App;
