/* Cached Elements */
const addbtn = document.getElementById(`addBtn`);
const subtBtn = document.getElementById(`subtBtn`);
const userInput = document.getElementById(`userInput`);
const currentResult = document.getElementById(`currentRes`);

/* Event Listeners */
addbtn.addEventListener(`click`, handleClick);
subtBtn.addEventListener(`click`, handleClick);

/* Functions */
function handleClick(event) {
    const currentResContent = currentResult.innerHTML;

    if (event.target.id === 'addBtn') 
    {
        console.log(currentResContent);
    } 
    else if (event.target.id === 'subtBtn') 
    {
        console.log(currentResContent);
    }
}
