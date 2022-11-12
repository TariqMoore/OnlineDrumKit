var button = document.querySelector("button")
var buttons = document.querySelectorAll("button.drum");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//For loop is adding the click event to our button array.
for (var i = 0; i<numberOfDrumButtons; i++){

    //Detects what key was pressed.
    document.querySelectorAll("button.drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        keyPressed(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
};

//Detects if the keyboard was pressed and adds the event listener "keydown" to the entire document.
document.addEventListener("keydown", function(event){
    keyPressed(event.key);
    buttonAnimation(event.key);
});


//Create a function that takes a character 'n' as an argument. The result will be used as a check against our switch statement in order to play the correct sound. This will then be called in our eventListener for the keydown and for our click.

//Our function that takes the what key was pressed as an argument and compares it to our switch statement.
function keyPressed(n){
    switch (n) {
        case "w":
            var cymbal = new Audio("sounds/crash.mp3");
            cymbal.play();
            break;
    
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;    
        case "l":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
                console.log(this);
            break;
    }
}


//Add Animation to the key/button that was pressed
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    //Set timeout will remove the pressed class from the element.
    setTimeout( () => {
        activeButton.classList.remove("pressed");
    }, 100);
}