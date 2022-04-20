import React, {useEffect} from "react";
import { Text } from "../../globalStyles/typography";

import { StyledTitle } from "./style";

function Title() {    
  return (
    <StyledTitle>
      <Text size="2.5" bd="700" center Raleway primary>
        #todo
      </Text>
    </StyledTitle>
  );
}

export default Title;
