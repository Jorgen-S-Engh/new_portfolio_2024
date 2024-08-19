import { Button } from "@mui/material";

function MainButton({ children, onClick }) {
  return (
    <>
      <button className="main-button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default MainButton;
