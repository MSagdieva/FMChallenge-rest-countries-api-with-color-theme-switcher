import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Container } from "react-bootstrap";

export default function Header(props) {
    function changeTheme(){
        theme==="light"? setTheme("dark") : setTheme("light")
    }
    const {theme, setTheme} = useContext(ThemeContext);
      return (
          <Container>
              <h3> Where in the World?</h3>
              <span>{(theme==="light" ? '\u263e': '\u2600')}</span>
              <span onClick={changeTheme}>{(theme==="light" ? "Dark" :"Light") + " mode"}</span>
         </Container>
      )
  }