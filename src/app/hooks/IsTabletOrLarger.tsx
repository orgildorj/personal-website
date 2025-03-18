import { useMediaQuery } from "@mui/material";

const IsTabletOrLarger = () => {
  const res = useMediaQuery("(min-width:768px)");
  return res;
};

export default IsTabletOrLarger;
