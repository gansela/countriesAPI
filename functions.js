function findAll(val) {
    const reasultArray = countries.filter(country => country.name.toLowerCase().includes(val)).map(country=> country.flag)
    console.log(reasultArray)
    return reasultArray
}

function findOne(val) {
    const reasultObj = countries.find(country => country.name.toLowerCase() === val)
    return reasultObj.flag
}