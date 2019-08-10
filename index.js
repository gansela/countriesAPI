//  model

const MODEL_DOM = {
    mainInput: document.querySelector("#search-country"),

    findAllBtn: document.querySelector("#find-all"),
    findOneBtn: document.querySelector("#find-one"),
    capitalCityBtn: document.querySelector("#capital-city"),

    countrySelect: document.querySelector("#country-select"),
    courencySelect: document.querySelector("#courency-select")
}
jQuery(document).ready(function ($) {

    function init() {
        const { mainInput, findAllBtn, findOneBtn, capitalCityBtn, countrySelect, courencySelect } = MODEL_DOM;
        fillDropDown()
        fillDropDownCurrency()
        hideCarosele()
        findAllBtn.addEventListener("click", () => {
            const reasultArray = findAll(mainInput.value.toLowerCase())
            if(!reasultArray.length) return alert("no match")
            clearslider()
            reasultArray.forEach((flag) =>{
                createSlider(flag, 0)
            })
            showCarosele()
        })
        findOneBtn.addEventListener("click", () => {
            const oneReasult = findOne(mainInput.value.toLowerCase())
            if(!oneReasult) return alert("no match")
            clearslider()
            createSlider(oneReasult)
            showCarosele()
        })
        capitalCityBtn.addEventListener("click", () => {
            const reasultArray = findAll(mainInput.value.toLowerCase())
            if(!reasultArray.length) return alert("no match")
            clearslider()
            reasultArray.forEach((flag) =>{
                createSlider(flag, 1)
            })
            showCarosele()
        })
        countrySelect.addEventListener("change", (e) => {
            courencySelect.innerHTML = ""
            reasult =  countries.find(country => country.name === (e.target.value))
            selectCountryCurrency(reasult)
        })
    }
    init()
});





