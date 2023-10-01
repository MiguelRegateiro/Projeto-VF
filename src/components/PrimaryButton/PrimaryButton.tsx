import { Button } from "./PrimaryButton.styles";
import { PrimaryButtonProps } from "./PrimaryButton.types";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, icon, onClick }) => {
    return (
      <Button onClick={onClick}>
        {children}  
        {icon && icon}
      </Button>
    );
  };
  
  export default PrimaryButton;