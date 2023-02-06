# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users of an application is able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![FMChallenge-rest-countries-api](https://github.com/MSagdieva/FMChallenge-rest-countries-api-with-color-theme-switcher/blob/a309aa6a55ac2e61cedfffb471b8a5414293a437/Countries%20Rest%20Api.png)
![FMChallenge-rest-countries-api](https://github.com/MSagdieva/FMChallenge-rest-countries-api-with-color-theme-switcher/blob/a309aa6a55ac2e61cedfffb471b8a5414293a437/Countries%20Rest%20Api%20Dark.png)

### Links

- Solution URL: [GitHub Page](https://github.com/MSagdieva/FMChallenge-rest-countries-api-with-color-theme-switcher)
- Live Site URL: [Live site URL](https://fm-challenge-rest-countries-api-with-color-theme-switcher.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [React-Bootstrap](https://react-bootstrap.github.io/) - For styles

### What I learned
Basics skills:
- JS RestAPI fetching with error handling
- React Bootstrap layout
- React componenst layout and states
- Theme change states

Besides the challenge demans Application has an additional features: waiting page for process of data receiving process, error page for cases of WebExceptions as a result of data fetcing.

```js
// change Component layout in case of loading or error state
            {loading && <div className={(theme==="dark"? darkStyles.info_container: lightStyles.info_container)} style={
                    { width: "100%",
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
```


```js
// function for search contries based on filter array
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
```

### Useful resources

- [ReactDocs](https://reactjs.org/docs/) - ReactDocs documentations is simple, full and very useful for development.
- [Async functions in UseEffect](https://devtrium.com/posts/async-functions-useeffect) - This is an useful article which helped me finally understand data fetching. I'd recommend it to anyone still learning this concept.


## Author

- GitHub - [@MSagdieva](https://github.com/MSagdieva/)
- Frontend Mentor - [@MSagdieva](https://www.frontendmentor.io/profile/MSagdieva)
- Email - [sagdieva.mariana@gmail.com](https://mailto:sagdieva.mariana@gmail.com)
- Telegram - [@it_maris](https://t.me/@it_maris)
