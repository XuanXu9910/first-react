import React, { useEffect, useRef } from "react";

// 取得 HTML element 有兩種方法
// 1. getElementById
// 2. useRef()
// 皆需要利用 useEffect() 在渲染完才執行的特性

// const App: React.FC = () => {
//   useEffect(() => {
//     const element = document.getElementById("h1");
//     console.log(element);
//   }, []);

//   return <h1 id="h1">Ref</h1>;
// };

const App: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log(h1Ref.current);
  }, []);

  return <h1 ref={h1Ref}>Ref</h1>;
};

export default App;
