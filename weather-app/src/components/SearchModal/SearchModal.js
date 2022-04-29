import React from "react"
import Button from "../Button/Button"
import Text from "../Text/Text"

function SearchModal({disabled}) {
  return (
    <div className={`search-modal bg-secondary ${disabled ? "disabled" : ""}`}>
      <div className="modal__header">
        <span class="material-icons secondary md-48">close</span>
      </div>

      <div className="modal__input">
        <input class="input" placeholder="search location"></input>
        <Button color="secondary" height="48px" width="30%">
          Search
        </Button>
      </div>

      <div className="modal__selection">
        <Text size="1.5rem" mgTop="1.5" hover cursor>
          London
        </Text>
        <Text size="1.5rem" mgTop="2" hover cursor>
          Barcelona
        </Text>
        <Text size="1.5rem" mgTop="2" hover cursor>
          Long Beach
        </Text>
      </div>
    </div>
  );
}

export default SearchModal;
