//  model

const MODEL_DOM = {
    mainInput: document.querySelector("#search-country"),

    findAllBtn: document.querySelector("#find-all"),
    findOneBtn: document.querySelector("#find-one"),
    capitalCityBtn: document.querySelector("#capital-city"),
}
jQuery(document).ready(function ($) {

    function init() {

        const { mainInput, findAllBtn, findOneBtn, capitalCityBtn } = MODEL_DOM;
        findAllBtn.addEventListener("click", () => {
            findAll(mainInput.value.toLowerCase())
        })
        findOneBtn.addEventListener("click", () => {
            oneReasult = findOne(mainInput.value.toLowerCase())

        })
        capitalCityBtn.addEventListener("click", () => {
            findAll(mainInput.value.toLowerCase())

        })
        // showCarosele()
        // clearslider()
        // hideCarosele()
    }
    init()
});





