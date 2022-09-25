import Form from 'react-bootstrap/Form';
import lightStyles from '../../assets/lightThemeStylesheet.module.css';
import darkStyles from '../../assets/darkThemeStylesheet.module.css';
import { ThemeContext } from "../../App";
import { useContext } from "react";

export default function Filter( props) {
    function filterChangeHandle(e){
        props.setRegion(e.target.value);
    }
    const {theme} = useContext(ThemeContext);
    return (
      <Form className={lightStyles.form}>
        <Form.Select className={(theme==="dark" ? darkStyles.filter : lightStyles.filter) +" "+ (theme==="dark" ? darkStyles.form_select : lightStyles.form_select)} aria-label="region_select" onChange={filterChangeHandle}>
        <option className={(theme==="dark" ? darkStyles.filter : lightStyles.filter)}>Filter By Region</option>
        <option className={(theme==="dark" ? darkStyles.filter : lightStyles.filter)} value="Africa">Africa</option>
        <option className={(theme==="dark" ? darkStyles.filter : lightStyles.filter)} value="America">America</option>
        <option className={(theme==="dark" ? darkStyles.filter : lightStyles.filter)} value="Asia">Asia</option>
        <option className={(theme==="dark" ? darkStyles.filter : lightStyles.filter)} value="Europe">Europe</option>
        <option className={(theme==="dark" ? darkStyles.filter : lightStyles.filter)} value="Oceania">Oceania</option>
        </Form.Select>
      </Form>
    );
  }