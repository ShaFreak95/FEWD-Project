let menuOpen = false

//Menu Bar
document.querySelector(".mobile-menu-button").addEventListener("click", function() {
    if (!menuOpen) {
        document.querySelector(".mobile-menu-button").classList.add("open");
        menuOpen = true;
        document.querySelector(".mobile-menu-container").style.display = "block";
        document.querySelector(".mobile-menu").classList.toggle("show-menu", true);
        document.querySelector(".mobile-menu").classList.toggle("hide-menu", false);
    }
    else {
        document.querySelector(".mobile-menu-button").classList.remove("open");
        menuOpen = false;
        document.querySelector(".mobile-menu").classList.toggle("show-menu", false);
        document.querySelector(".mobile-menu").classList.toggle("hide-menu", true);
        document.querySelector(".mobile-menu-container").style.display = "none";
    }
})

// ************************************************************************
//Sequence Memory
var sequence = []; //collecting sequence of the next box to click
var userSequence = [] //collection the box that user clicked
var level = 0;

let boxClick = document.querySelectorAll("section .box-rows .boxes")

document.querySelector("#start_btn").addEventListener("click", function() {
    document.querySelector(".game-menu").style.display = "none";
    startGame();
    document.querySelector(".sequence-memory-game .level").style.display = "block";
    document.querySelector(".sequence-memory-container .sequence-memory-game .grid-box").style.display = "grid";
})

for (let x = 0; x < 9 ; x++) {
    boxClick[x].addEventListener("click", function(e) {
        let theBoxNumber = x + 1;
        let test = e.target;

        //push the value into the empty array
        userSequence.push(theBoxNumber);

        //animation will be triggered to the box that been clicked
        pressAnimation(test);

        //comparing each array value position
        compareAnswer(userSequence.length - 1)
    })
}

document.querySelector(".wrong-answer .modal-box .flex div > .restart-btn").addEventListener("click", function() {
    location.reload();
})

function compareAnswer(arr) {
    if (userSequence[arr] === sequence[arr]) {
        //Ensure the array list to have the same length as the sequence's array
        if (userSequence.length === sequence.length ) {
            startGame();
        }
    }
    else {
        document.querySelector(".wrong-answer").style.display = "flex";
    }
}

function pressAnimation(pressedBox) {
    pressedBox.style.backgroundColor = "#c79a9a";
    setTimeout ( function() {
        pressedBox.style.backgroundColor = "white";
    }, 300)
}

function startGame() {
    userSequence = [];
    level = ++level;
    document.querySelector("section span").innerHTML = level.toString()

    //ensure the number is in the range of 1-9
    let randNumber = (Math.random()*10) - 1;
    randNumber = Math.round(randNumber);

     if (randNumber <= 0) {
        randNumber = 1;
        //add the first array obj
        sequence.push(randNumber);

        //targeting the element for the clicked box
        let box = document.querySelector("section .box-rows .b" + randNumber)

        // console.log(box);

        //user will notice the change in colour of the box, indicates them to click it 
        box.style.backgroundColor = "red";

        // console.log(box.style.backgroundColor);

        setTimeout (function() {
            box.style.backgroundColor = "white";
        }, 1000)

      }
      else {

        //targeting the element for the clicked box
        let box = document.querySelector("section .box-rows .b" + randNumber)
        //add the first array obj
        sequence.push(randNumber);

        // console.log(box);

        //user will notice the change in colour of the box, indicates them to click it 
        box.style.backgroundColor = "red";

        // console.log(box.style.backgroundColor);

        setTimeout( function() {
            box.style.backgroundColor = "white";
        }, 1000)
      }
}