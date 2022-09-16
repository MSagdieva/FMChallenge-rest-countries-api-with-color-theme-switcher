import { useContext } from "react";
import  Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { ThemeContext } from "../App";
import lightStyles from '../assets/lightThemeStylesheet.module.css';
import darkStyles from '../assets/darkThemeStylesheet.module.css';

export function CountryCard(props) {
  const {theme} = useContext(ThemeContext);
    return (
    <Card style={{
      width: "264px",
      border: "none",
      boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)"}} 
      className={(theme==="dark"? darkStyles.dark_card: lightStyles.light_card)}>
        <div style={{
          height:"10rem",
          width: "100%"
        }}>
        <Card.Img style={{ 
          height: "100%",
          width: "100%",
          objectFit: "cover"}} 
          variant="top" src={props.flag} />
        </div>
      <Card.Body>
        <Card.Title style={{textAlign: "left", paddingLeft: "0", fontWeight: "900"}}>{props.countryName}</Card.Title>
              <ListGroup as="ul" style={{"--bs-list-group-bg": "transparent"}}>
              <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
              <b>Population: </b>
                <span>{props.population}</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
              <b>Region: </b>
                <span>{props.region}</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{textAlign: "left", border: "none", padding:0, color: (theme==="dark"? "#fff": "")}}>
              <b>Capital: </b>
                <span>{props.capital}</span> 
              </ListGroup.Item>
            </ListGroup>
      </Card.Body>
    </Card>)
}