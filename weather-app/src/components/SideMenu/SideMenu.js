import React, {useState} from "react"

import Button from "../Button/Button";
import Text from "../Text/Text";

import cloudBackground from "../../images/Cloud-background.png"
import shower from "../../images/Shower.png"
import SearchModal from "../SearchModal/SearchModal";

function SideMenu({modalDisabled, toggleModal}) {

  return (
    <div className="side-menu bg-secondary">
      <SearchModal disabled={modalDisabled} toggleModal={toggleModal}/>
      <div className="side-menu__title">
        <Button size="lg" align="left" onClick={toggleModal}>
          Search for places
        </Button>

        <Button size="sm" align="right" round>
          <span class="material-icons md-18">my_location</span>
        </Button>
      </div>

      <div className="side-menu__img">
        <img className="img__background" src={cloudBackground} />
        <img className="img" src={shower} />
      </div>

      <div className="side-menu__content">
        <Text size="7rem" align="center">
          15
          <Text size="4rem" mgLeft={1} inline color="secondary">
            <span>&#8451;</span>
          </Text>
        </Text>
        <Text
          size="2.3rem"
          bd="600"
          mgTop={3.5}
          align="center"
          color="secondary"
        >
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
          <Text align="center" bd="600" color="secondary">
            Helsinki
          </Text>
        </div>
      </div>
    </div>
  );
  
}

export default SideMenu;
