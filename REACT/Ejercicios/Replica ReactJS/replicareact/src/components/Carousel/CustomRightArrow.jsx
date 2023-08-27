import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const CustomRightArrow = ({ onClick }) => {
  return (
    <Button zIndex="1" bg="white" m="1" onClick={() => onClick()}>
      <ArrowBackIcon />
    </Button>
  );
};
export default CustomRightArrow;
