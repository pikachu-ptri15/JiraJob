import React, { FC, ReactNode } from "react";

interface ColumnProps {
  children?: ReactNode; // Mark `children` as optional
}

const Column: FC<ColumnProps> = ({ children }) => {
  return <div style={styles.column}>{children}</div>;
};

const styles: { [key: string]: React.CSSProperties } = {
  column: {
    flex: "1 1 calc((100% - 20px) / 3)",
    backgroundColor: "#d3d3d3",
    padding: "10px",
    borderRadius: "4px",
  },
};

export default Column;