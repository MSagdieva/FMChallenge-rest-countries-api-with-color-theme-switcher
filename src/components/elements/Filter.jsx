import Form from 'react-bootstrap/Form';
// import dark_search_logo from "../../images/logos/dark_search_logo.svg";
// import light_search_logo from "../../images/logos/light_search_logo.svg";
// import lightStyles from '../../assets/lightThemeStylesheet.module.css';
// import darkStyles from '../../assets/darkThemeStylesheet.module.css';
import { ThemeContext } from "../../App";
import { useContext } from "react";

export default function Filter( props) {
    function filterChangeHandle(e){
        props.setRegion(e.target.value);
    }
    const {theme} = useContext(ThemeContext);
    return (
      <Form>
        <Form.Select aria-label="region_select" onChange={filterChangeHandle}>
        <option>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </Form.Select>
      </Form>
    );
  }