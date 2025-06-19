import React from 'react';
import './App.css';
import Header from './components/Header';

// 只需要在這份程式碼中出現的components寫這裡
const Body: React.FC = () => {
    // return React.createElement('h1', {}, 'Hello')    // 冗長的JS
    return <>
        {/* 實際上裡面寫的程式是JSX: 用類似於HTML的寫法取代上面註解冗長的JS */}
        <h1 className='color-blue'>Hello</h1>   {/* props -> 屬性 */}
        <p>Alan...</p>
        <img src='/logo512.png' alt='' srcSet='' />
    </>
}

const App: React.FC = () => {
    return <>
        <Header />  {/* 需要不斷重複使用的components額外寫 */}
        <Body />
    </>
};

export default App;