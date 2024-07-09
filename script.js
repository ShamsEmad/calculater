const CalculaterContainer = document.getElementById('contanir');
const Display = document.getElementById('display');

CalculaterContainer.addEventListener('click', e => {
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "C": clear(); break;
            case "DEL": undo(); break;
            case "=": evaluate(); break;
            default:
                add(e.target.textContent);

        }
    }
})
function clear() {
    Display.textContent = "";
}
function undo() {
    let currentContent = Display.textContent;
    Display.textContent = currentContent.substring(0, currentContent.length - 1);
}
function evaluate() {
    try {
        let calculation = math.evaluate(Display.textContent);
        Display.textContent = calculation;
    }
    catch (error) {

        Display.textContent = "Error";
        console.error(error);
    }
}
function add(value) {
    Display.textContent = Display.textContent + value;
}