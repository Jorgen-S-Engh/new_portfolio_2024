import { Button } from "@mui/material";

function MainButton({ children }) {
  return (
    <>
      <button className="main-button">{children}</button>
    </>
  );
}

export default MainButton;
