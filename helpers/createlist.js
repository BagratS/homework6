export const render = (countryList, result, searchRes) => {
    countryList.innerText = "";
    const filtered = result.filter(el => el.name.common.includes(searchRes));
    filtered.forEach(element => {
        const div = document.createElement("div");
        div.innerText = element.name.common;
        countryList.append(div);
        if(filtered.length === 1) {
            const flag = document.createElement('div');
            flag.innerText = element.flag;
            const about = document.createElement('a');
            about.innerText = "about";
            about.setAttribute('href', `https://en.wikipedia.org/wiki/${div.innerText}`)
            countryList.append(flag, about);
        }   
    });
    
}