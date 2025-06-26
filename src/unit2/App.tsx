import React from "react";
import "./App.css";
import Header from "./components/Header";

// Component 基礎

// 只需要在這份程式碼中出現的 components 寫這裡
const Body: React.FC = () => {
  // return React.createElement('h1', {}, 'Hello')    // 冗長 JS
  return (
    <>
      {/* 實際上 return 裡面寫的語法是 JSX: 用類似於HTML的寫法取代上面註解的冗長 JS */}
      {/* h1 中的 className 為 props -> 屬性：相當於 html 中的屬性，只是改用駝峰式命名 */}
      <h1 className="color-blue">Hello</h1>
      <p>Alan...</p>
      <img src="/logo512.png" alt="" srcSet="" />
    </>
  );
};

const App: React.FC = () => {
  return (
    // 可以使用一個空的 tag 包起來
    <>
      <Header />
      <Body />
    </>
  );
};

export default App;
