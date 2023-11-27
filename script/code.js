let btn = document.querySelector(`[data-input]`)
function nextNumber() {
    let counter = +document.getElementById(`number`).value;
    let result = counter + 1;

    if (counter) {
        document.getElementById(`result`).textContent = result.toFixed(0)
    }
    if (result) {
        document.getElementById(`result`).textContent = result.toFixed(0)
    }
}

btn.addEventListener(`click`, nextNumber)