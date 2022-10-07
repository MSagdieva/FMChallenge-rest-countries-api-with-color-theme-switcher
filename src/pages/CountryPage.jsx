import { useContext } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Header from '../components/elements/Header';
import { ThemeContext } from "../App";
import lightStyles from '../assets/lightThemeStylesheet.module.css';
import darkStyles from '../assets/darkThemeStylesheet.module.css';
import '../assets/generalStyles.css';
import Modal from 'react-bootstrap/Modal';

function unfoldArray(dataArray){
    return dataArray[0].name;
}

export function CountryPage(props) {
    const {theme} = useContext(ThemeContext);
    let borderCountriesInfo = [];
    
    function searchBorderCountry(code){
        for (let country of borderCountriesInfo)
                { 
                  if (country.alpha3Code===code){
                    return country;
                  }
              }
    }

    function getFullBorderCountryName(code){
        let name;
        if (code)
        {props.data.map((countryRow)=>{
            countryRow.map((country)=>{
            if (country.alpha3Code===code)
                {   name=country.name;
                    borderCountriesInfo.push(country);
                    return country.name;}
            }
            )
            return countryRow;
        })}
        return name;
    }
    return (
          <Modal show={props.openCountryModal} fullscreen={true} onHide={() => 
            {props.setModalInfo(null);
            props.setOpenCountryModal(false);}}
          className={(theme==="dark" ? darkStyles.dark_container: lightStyles.light_container)}>
            <Modal.Header closeButton className={(theme==="dark" ? "dark_header" : "light_header")}>
              <Header />
            </Modal.Header>
            <Modal.Body>
            <Container style={{marginTop: "75px"}}>
                <Row>
                    <Col lg={6} md={12}>
                        <img style={{width: "100%", borderRadius: "5px"}} src={props.countryData?.flag} alt="flag_image"/>
                    </Col>
                    <Col lg={6} md={12}>
                        <h2>{props.countryData?.name}</h2>
                        <Row>
                            <Col lg={6} md={12}>
                                <ListGroup as="ul" style={{"--bs-list-group-bg": "transparent"}}>
                                    <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                    <b>Native Name: </b>
                                        <span>{props.countryData?.nativeName}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                    <b>Population: </b>
                                        <span>{props.countryData?.population}</span> 
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                    <b>Region: </b>
                                        <span>{props.countryData?.region}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                    <b>Subregion: </b>
                                        <span>{props.countryData?.subregion}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                    <b>Capital: </b>
                                        <span>{props.countryData?.capital}</span> 
                                    </ListGroup.Item>

                                    </ListGroup>
                            </Col>
                            <Col lg={6} md={12}>
                                <ListGroup style={{"--bs-list-group-bg": "transparent"}}>
                                <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}> <b>Top Level Domain: </b>
                                    <span>{props.countryData?.topLevelDomain[0]}</span>
                                    </ListGroup.Item>
                                <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                <b>Currencies: </b>
                                    <span>{props.countryData ? unfoldArray(props.countryData?.currencies):""}</span>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
                                <b>Languages: </b>
                                    <span>{props.countryData?.languages[0].name}</span> 
                                </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <b>Border countries: </b>
                                    {props.countryData?.borders ? (<span>{props.countryData?.borders.map((code)=>
                                        {return(<button className={(theme==="dark" ? darkStyles.button_border_countries: lightStyles.button_border_countries)+" button_border_countries"} onClick={()=>{props.setModalInfo(searchBorderCountry(code))}} style={{borderColor:"transparent", marginRight: "10px", marginTop: "10px"}}>{getFullBorderCountryName(code)}</button>)}
                                    )}</span>):<></> }
                    </Col>
                </Row>
            </Container>
            </Modal.Body>
          </Modal>
      );
}