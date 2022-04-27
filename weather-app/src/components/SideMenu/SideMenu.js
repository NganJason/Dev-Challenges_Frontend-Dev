import Button from "../Button/Button";
import Text from "../Text/Text";

import cloudBackground from "../../images/Cloud-background.png"
import shower from "../../images/Shower.png"

function SideMenu() {
  return (
    <div className="side-menu bg-secondary">
      <div className="side-menu__title">
        <Button size="lg" align="left">
          Search for places
        </Button>

        <Button size="sm" align="right" round>
          <span class="material-icons">my_location</span>
        </Button>
      </div>

      <div className="side-menu__logo">
        <img className="logo__background" src={cloudBackground} />
        <img className="logo" src={shower} />
      </div>

      <div className="side-menu__content">
        <Text size={7} align="center">
          15
          <Text size={4} mgLeft={1} inline color="secondary">
            <span>&#8451;</span>
          </Text>
        </Text>
        <Text size={2.3} mgTop={3.5} align="center" color="secondary">
          Shower
        </Text>
      </div>

      <div className="side-menu__footer">
        <div className="footer__date">
          <Text color="secondary">Today</Text>
          <Text color="secondary" mgLeft={1} mgRight={1}>
            <span>&#183;</span>
          </Text>
          <Text color="secondary">Friday, 5 Jun</Text>
        </div>

        <div className="footer__location">
          <Text align="center" color="secondary">
            Helsinki
          </Text>
        </div>
      </div>
    </div>
  );
  
}

export default SideMenu;
