const spnText = document.querySelector(".text");
const cursor = document.querySelector(".cursor");
const txt = ["witaj swiecie", "hello world", "zegnajcie"];

let activeLetter = -5;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        spnText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;

        if (activeText === txt.length) return;
        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = "";
            addLetter();
        }, 1000);

    }

    setTimeout(addLetter, 500);

}

addLetter();













const showCursor = () => {
    cursor.classList.toggle("active");
}

setInterval(showCursor, 500);