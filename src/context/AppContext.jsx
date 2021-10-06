import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = React.createContext({});

function ContextProvider(props) {
  const [currentState, setCurrentState] = useState({});
  const [alertState, setAlertState] = useState({ success: false, message: "", hidden: true });
  const [submitting, setSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isTabLand = useMediaQuery({ query: "(max-width: 75em)" });
  const isTabPort = useMediaQuery({ query: "(max-width: 56.25em)" });
  const isPhoneLand = useMediaQuery({ query: "(max-height: 400px)" });
  const isPhonePort = useMediaQuery({ query: "(max-width: 28.125em)" });

  return (
    <AppContext.Provider
      value={{
        currentState,
        setCurrentState,
        alertState,
        setAlertState,
        isTabLand,
        isTabPort,
        isPhoneLand,
        isPhonePort,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        submitting,
        setSubmitting,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
export { ContextProvider };
