/*              Cached Elements         */
const addbtn = document.getElementById(`addBtn`);
const subtBtn = document.getElementById(`subtBtn`);
const userInput = document.getElementById(`userInput`);
const currentResult = document.getElementById(`currentRes`);

/*              Event Listeners          */
addbtn.addEventListener(`click`, handleClick);
subtBtn.addEventListener(`click`, handleClick);
 
/*              Functions                */
function checkNegative() {
    const currentResContent = parseInt(currentResult.innerHTML);
    if(currentResContent < 0)
    {
        currentResult.classList.add(`negative`);
    }
    else
    {
        currentResult.classList.remove(`negative`);
    }
}

function handleClick(event) {
    const currentResContent = parseInt(currentResult.innerHTML);
    const userInputVal = parseInt(userInput.value);

    if (event.target.id === 'addBtn') 
    {
        currentResult.textContent = currentResContent + userInputVal;
    } 
    else if (event.target.id === 'subtBtn') 
    {
        currentResult.textContent = currentResContent - userInputVal;
    }

    checkNegative();

}
