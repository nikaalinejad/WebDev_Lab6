//create variables

var modelName = "XYZ";
var duration = 0;

//helper function: recalculate() 

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");

    var totalCost = 0;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") { 
        totalCost = duration * 213;
    }

    costLabel.innerHTML = totalCost.toFixed(2);
}

//model logic button

var modelButton = document.getElementById("model-button");

function changeModel() {
    var modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);

//duration button logic

var durationButton = document.getElementById("duration-button");

function changeDuration() {
    var durationText = document.getElementById("duration-text");

    var newDuration = prompt("Enter new duration in days:");

    duration = parseInt(newDuration);
    durationText.innerHTML = duration;

    recalculate();
}

durationButton.addEventListener("click", changeDuration);
