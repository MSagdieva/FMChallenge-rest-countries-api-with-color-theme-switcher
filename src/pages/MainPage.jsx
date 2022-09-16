import { useState, useEffect, useContext } from "react";
import {CountryCard} from '../components/CountryCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/elements/Header';
import SearchLine from '../components/elements/SearchLine';
import { ThemeContext } from "../App";
import lightStyles from '../assets/lightThemeStylesheet.module.css';
import darkStyles from '../assets/darkThemeStylesheet.module.css';


export function MainPage() {
    const [data, setData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {theme, setTheme} = useContext(ThemeContext);
    const getCardRowsData = (data) => {
        let interAr=[];
        let datAr=[];
        data.map((elem, index)=>{
            interAr.push(elem);
            if (interAr.length===4 || index===data.length-1) {
                datAr.push(interAr);
                interAr=[];
            }
        });
        return datAr;
    }

    const getSearchData = ()=>{
        setSearchData(data);
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all?fields=name,capital,currencies,flag,region,population
        `)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
              return response.json();
        })
        .then((actData) => {
            setData(getCardRowsData(actData));
            setError(null);}
        )
        .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          });
       }, []);
       useEffect(()=>{
           console.log(searchData);
       }, [theme, searchData])

    return(
        <Container lg="12">
            <Header />
            <SearchLine dataInf={data} setSearchData={setSearchData} />
            {loading && <div className={(theme==="dark"? darkStyles.info_container: lightStyles.info_container)} style={
                    {width: "100%",
                    height: "90vh",
                    backgroundColor: "#FAFAFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}
                }><h3 style={
                    {color: "red",
                    fontSize: "28px"}}>A moment please...</h3></div>}
            {error && (
                <div className={(theme==="dark"? darkStyles.info_container: lightStyles.info_container)} style={
                    {width: "100%",
                    height: "90vh",
                    backgroundColor: "#FAFAFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}
                }>
                    <h3 style={
                    {color: "red",
                    fontSize: "28px"}
                }>{`There is a problem fetching the post data - ${error}`}
                    </h3>
                    </div>
                )}

            {searchData ?
            (searchData && searchData.map((cardRow, index)=>{
                console.log(1)
                return (<Row className="mt-10">
                    {
                    cardRow.map((elem)=>{
                        return(<Col lg="3" md='6' xs='12'>
                            <CountryCard countryName={elem.name} flag={elem.flag} region={elem.region} population={elem.population} capital={elem.capital}/>
                        </Col>)
                    })}
                </Row>)
            })):
            (data&!searchData && data.map((cardRow, index)=>{
                console.log(2)
                return (<Row className="mt-10">
                    {
                    cardRow.map((elem)=>{
                        return(<Col lg="3" md='6' xs='12'>
                            <CountryCard countryName={elem.name} flag={elem.flag} region={elem.region} population={elem.population} capital={elem.capital}/>
                        </Col>)
                    })}
                </Row>)
                }))}

        </Container>)
}