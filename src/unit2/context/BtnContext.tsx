import React, { createContext, useContext, useState } from "react";

const defaultValue = {
  btnVisible: false,
};

const BtnContext = createContext(defaultValue);

// 設定值的時候調用
export const BtnProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [btnVisible, setBtnVisible] = useState(false);

  return (
    <>
      {/* BtnContext.Provider 也是一個 component */}
      {/* 將實際要傳的參數以物件的方式放至於 value 中 */}
      <BtnContext.Provider value={{ btnVisible }}>
        {children}
      </BtnContext.Provider>
    </>
  );
};

// 取值的時候調用
export const useBtnContext = () => {
  return useContext(BtnContext);
};
