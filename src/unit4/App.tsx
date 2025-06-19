import React, {useState} from 'react';

type BtnProps = {
    currentNum: number;
    onClickHandler: () => void;
};

// currentNum 是 Props: 用來將父組件之參數傳遞給子組件
const Btn: React.FC<BtnProps> = ({currentNum, onClickHandler}) => {
    // let num2 = 999;

    // function counter() {
    //     num2 = num2 + 1;
    //     console.log(num2)
    // };

    return <button onClick={onClickHandler}>
        加1，
        <span>
            目前的總數: {currentNum}
        </span>
    </button>;
};

const App: React.FC = () => {
    // const num = 0;

    // state: 用來使變數改變值時，重新渲染畫面
    const [num, setNum] = useState(1);

    function counter() {
        setNum(num + 1);
    };

    return <>
        <h1>計數器:{num}</h1>
        <Btn currentNum={num} onClickHandler={counter} />
    </>;
};

export default App;