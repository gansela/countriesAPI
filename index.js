//  model

const MODEL_DOM = {
    mainInput: document.querySelector("#search-country"),

    findAllBtn: document.querySelector("#find-all"),
    findOneBtn: document.querySelector("#find-one"),
    capitalCityBtn: document.querySelector("#capital-city"),
}
jQuery(document).ready(function ($) {

    function init() {
        hideCarosele()
        const { mainInput, findAllBtn, findOneBtn, capitalCityBtn } = MODEL_DOM;
        findAllBtn.addEventListener("click", () => {
            const reasultArray = findAll(mainInput.value.toLowerCase())
            clearslider()
            reasultArray.forEach((flag) =>{
                createSlider(flag)
            })
            showCarosele()
        })
        findOneBtn.addEventListener("click", () => {
            const oneReasult = findOne(mainInput.value.toLowerCase())
            clearslider()
            createSlider(oneReasult)
            showCarosele()
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





