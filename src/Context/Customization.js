import { createContext } from "react";
import { useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [carColor, setCarColor] = useState("White");

  return (
    <CustomizationContext.Provider
      value={{
        carColor,
        setCarColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
