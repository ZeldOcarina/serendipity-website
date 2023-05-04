import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = React.createContext({});

function ContextProvider(props) {
  const [currentState, setCurrentState] = useState({});
  const [alertState, setAlertState] = useState({ success: false, message: "", hidden: true });
  const [submitting, setSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const BASE_PIXELS = 16;
  const isTabLand = useMediaQuery({ query: `(max-width: ${1200 / BASE_PIXELS}em)` });
  const isTabPort = useMediaQuery({ query: `(max-width: ${900 / BASE_PIXELS}em)` });
  const isPhoneLand = useMediaQuery({ query: `(max-width: ${900 / BASE_PIXELS}em)` });
  const isPhonePort = useMediaQuery({ query: `(max-width: ${450 / BASE_PIXELS}em)` });
  const isiPhone5 = useMediaQuery({ query: `(max-width: ${365 / BASE_PIXELS}em` });

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
        isiPhone5,
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
