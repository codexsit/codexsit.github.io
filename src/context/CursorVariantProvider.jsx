import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const CursorVariantContext = createContext();

function CursorVariantProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState("default");

  const contextValue = useMemo(
    () => ({
      cursorVariant,
      setCursorVariantText: () => setCursorVariant("text"),
      setCursorVariantDefault: () => setCursorVariant("default"),
      setCursorVariantNone: () => setCursorVariant("none"),
    }),
    [cursorVariant],
  );

  return (
    <CursorVariantContext.Provider value={contextValue}>
      {children}
    </CursorVariantContext.Provider>
  );
}

CursorVariantProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CursorVariantProvider;
