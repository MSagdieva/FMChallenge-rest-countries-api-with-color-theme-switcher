import Form from 'react-bootstrap/Form';
import dark_search_logo from "../../images/logos/dark_search_logo.svg";
import light_search_logo from "../../images/logos/light_search_logo.svg";
import lightStyles from '../../assets/lightThemeStylesheet.module.css';
import darkStyles from '../../assets/darkThemeStylesheet.module.css';
import { getCardRowsData } from '../../pages/MainPage'
import { ThemeContext } from "../../App";
import { useContext } from "react";

export default function SearchLine( props) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    function searchChangeHandle(e){
        let filterCountriesArray =  [];
        props.dataInf.map((countries) => {
          let strValue = e.target.value;
          for (let country of countries)
                { 
                  let inpValue=capitalizeFirstLetter(strValue);
                  if ((country?.name).startsWith(inpValue))
                  {filterCountriesArray.push(country);
                }
              }
          return filterCountriesArray;
        });
        props.setSearchData(getCardRowsData(filterCountriesArray));
  }
    const placeholderText = "Search for the country...";
    const {theme} = useContext(ThemeContext);
    return (
      <Form style={{width: "50%"}}>
        <Form.Group className={(lightStyles.search_line_container) + " mb-1"} controlId="searchForm.ControlInput1">
            <img
              alt=""
              src={theme==="dark" ? dark_search_logo : light_search_logo}
              width="30"
              height="30"
              className={(lightStyles.search_image) + " d-inline-block align-top"}
            />{' '}
          <Form.Control className={(theme==="dark" ? darkStyles.dark_search_line: lightStyles.light_search_line)+" " + (lightStyles.search_line)} type="text" placeholder={placeholderText} onChange={searchChangeHandle}/>
        </Form.Group>
      </Form>
    );
  }