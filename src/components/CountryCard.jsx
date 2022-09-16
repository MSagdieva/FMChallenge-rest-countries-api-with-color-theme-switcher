import { useContext } from "react";
import  Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { ThemeContext } from "../App";
import lightStyles from '../assets/lightThemeStylesheet.module.css';
import darkStyles from '../assets/darkThemeStylesheet.module.css';

export function CountryCard(props) {
  const {theme} = useContext(ThemeContext);
    return (
    <Card style={{width: "18rem"}} className={(theme==="dark"? darkStyles.dark_card: lightStyles.light_card)}>
        <Card.Img style={{height:"10rem"}} variant="top" src={props.flag} />
      <Card.Body>
        <Card.Title>{props.countryName}</Card.Title>
        <Card.Text>
              <ListGroup as="ul">
              <ListGroup.Item as="li" border="light">
              <b>Population: </b>
                <span>{props.population}</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" border="light">
              <b>Region: </b>
                <span>{props.region}</span>
              </ListGroup.Item>
              <ListGroup.Item as="li" border="light">
              <b>Capital: </b>
                <span>{props.capital}</span> 
              </ListGroup.Item>
            </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>)
}