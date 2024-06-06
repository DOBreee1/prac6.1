document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const resultDiv = document.getElementById("result");

    // Подія подвійного щиглика лівою кнопкою миші
    checkButton.ondblclick = function() {
        const a = parseInt(inputA.value);
        const b = parseInt(inputB.value);

        // Логічна операція "Виключаючи або не" (XNOR)
        const result = (a === b) ? 1 : 0;

        resultDiv.textContent = `Результат: ${result}`;
    }
});
