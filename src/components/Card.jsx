import { Box } from "@mui/material";
function Card({ children, order }) {
  return (
    <>
      <Box className="card" sx={{ width: "300px" }} order={order}>
        {children}
      </Box>
    </>
  );
}

export default Card;
