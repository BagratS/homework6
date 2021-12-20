import { countriesInfo } from "./consts/constants.js";
import { render } from "./helpers/createlist.js";

countriesInfo.then(result => {
    let searchRes = '';
    const countryList = document.querySelector("#country-list");

    render(countryList, result, searchRes);
    
    const search = document.querySelector("input");
    search.addEventListener("input", (e) => {
        searchRes = e.target.value;
        render(countryList, result, searchRes);
    })
});