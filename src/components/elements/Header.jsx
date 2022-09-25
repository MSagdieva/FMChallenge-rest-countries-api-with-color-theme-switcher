import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Container } from "react-bootstrap";
import lightStyles from '../../assets/lightThemeStylesheet.module.css';
import darkStyles from '../../assets/darkThemeStylesheet.module.css';
import dark_moon from "../../images/logos/dark_moon.svg";
import light_moon from "../../images/logos/light_moon.svg";

export default function Header(props) {
    function changeTheme(){
        theme==="light"? setTheme("dark") : setTheme("light")
    }
    const {theme, setTheme} = useContext(ThemeContext);
      return (
          <Container className={lightStyles.header_container}>
              <h3 className="header_heding"> Where in the World?</h3>
              <div>
              <span className={(theme==="dark"? darkStyles.light_moon_icon: lightStyles.light_moon_icon)}>
                <img src={(theme==="dark"? dark_moon: light_moon)} alt="moon pics"/>
                </span>
              <span className={lightStyles.theme_change_button} onClick={changeTheme}>{"Dark mode"}</span>
              </div>
         </Container>
      )
  }