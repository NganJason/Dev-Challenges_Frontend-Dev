import Button from "../Button/Button";
import Text from "../Text/Text";

function SideMenu() {
  return (
    <div className="side-menu bg-secondary">
      <Text size={4} align="center" color="primary" mgTop={10}>15</Text>
      <Button 
        size="lg" 
        align="center" 
        mgTop={4} 
        round
      >
        Search for places
      </Button>
    </div>
  );
  
}

export default SideMenu;
