import React, {useState} from "react"
import { lightTheme, darkTheme } from "./globalStyles/theme";

import { ThemeProvider } from "styled-components";
import { BaseStyles } from "./globalStyles/base";
import { Body, Header } from "./globalStyles/layout"
import { Text } from "./globalStyles/typography"


function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Body>
        <BaseStyles />
        <Header>
          <Text size="2.5" bd="700" center Raleway primary>
            #todo
          </Text>
        </Header>
      </Body>
    </ThemeProvider>
  );
}

export default App;
