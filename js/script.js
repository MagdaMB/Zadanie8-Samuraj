const spnText = document.querySelector(".text");

const txt = "Et eu tempor esse nulla duis aliqua ut excepteur veniam ad culpa eiusmod. Cupidatat quis id dolor sit esse occaecat dolore nisi sit cillum aute deserunt velit. Sint elit excepteur voluptate minim et. Eu anim non cillum est nostrud nulla id ex ad. Thisis the END";

const cursor = document.querySelector(".cursor");

let indexText = 0;
const addLetter = () => {
    spnText.textContent += txt[indexText];

    indexText++;

    if (indexText == txt.length) {
        clearInterval(indexTyping);
    }
}

const cursorAnimation = () => {
    cursor.classList.toggle("visible");
};
const indexTyping = setInterval(addLetter, 50);

setInterval(cursorAnimation, 400);