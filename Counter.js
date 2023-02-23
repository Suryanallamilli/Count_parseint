
let counterElement = document.getElementById("conterValue");
function onIncrement(){
    let previoursCounterValue = counterElement.textContent;
    let updateCountervalue = parseInt(previoursCounterValue) + 1;
    counterElement.textContent = updateCountervalue;

    if (updateCountervalue > 0 ) {
        counterElement.style.color = "green";
    }

    else if (updateCountervalue < 0){

        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }





}

function onReset(){
    updateCountervalue = 0;
    counterElement.textContent = updateCountervalue;
    counterElement.style.color = "black";

}

function onDecrement(){
    let previoursCounterValue = counterElement.textContent;
    let updateCountervalue = parseInt(previoursCounterValue) - 1;
    counterElement.textContent = updateCountervalue;
     if (updateCountervalue > 0 ) {
        counterElement.style.color = "green";
    }

    else if (updateCountervalue < 0){

        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }





}