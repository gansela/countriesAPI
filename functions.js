function findAll(val) {
    const reasultArray = countries.filter(country => country.name.toLowerCase().includes(val))
        .map((country) => {
            return { "flag": country.flag, "capital": country.capital }
        })
    console.log(reasultArray)
    return reasultArray
}

function findOne(val) {
    const reasultObj = countries.find(country => country.name.toLowerCase() === val)
    return reasultObj
}

function fillDropDown() {
    const { countrySelect } = MODEL_DOM;
    countries.forEach((country) => {
        const op = document.createElement("option")
        op.innerText = country.name
        countrySelect.append(op);
    })
}

function fillDropDownCurrency() {
    const { courencySelect } = MODEL_DOM;
    countries.forEach((country) => {
        const { currencies } = country
        let opString = ""
        const op = document.createElement("option")
        currencies.forEach((currency) => {
            opString += `${currency.name}, ${currency.code}, ${currency.symbol}; `
        })
        op.innerText = opString
        courencySelect.append(op);
    })
}

function selectCountryCurrency(country) {
    const { courencySelect } = MODEL_DOM;
    const { currencies } = country;
    let opString = ""
    const op = document.createElement("option")
    currencies.forEach((currency) => {
        opString += `${currency.name}, ${currency.code}, ${currency.symbol}; `
    })
    op.innerText = opString
    courencySelect.append(op);
}