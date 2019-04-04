function temperatureConverter() {
    let numberOfFahrenheit = getInputFahrenheit("inputFahrenheit");
    let numberOfCelcius = converterFtoC(numberOfFahrenheit);
    document.getElementById('outputCelcius').innerHTML = numberOfCelcius;
}
function display(num) {
    document.getElementById('outputCelcius').innerHTML = num;
}
function getInputFahrenheit(id) {
    return document.getElementById(id).value;
}
function converterFtoC(F) {
    return (F - 32) / 1.8;
}

