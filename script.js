let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let ngame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let uval = window.localStorage.getItem("user");
console.log(uval);

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//reset button
const resetGame = () => {
    uval = window.localStorage.getItem("user");
    enableBoxes();
    msgcontainer.classList.add("hide");
    count=0;
}

// click event
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (uval === "X") {
                box.innerText = "X";
                box.style.color="#5c3802";
                uval = "O";
            }
            else {
                box.innerText = "O";
                box.style.color="#dcdae2ef";
                uval = "X";
            }
            box.disabled = true;
        
        // console.log("clicked")
         count++;
        let iswinner=checkWinner();
        // count++;
        if(count===9 && !iswinner){
            drawGame();
        }
    }

    });
})

const drawGame=()=>{
    msg.innerText="Draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();


}


const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

//enable buttons
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


//show winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {

            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner",pos1val);
                showWinner(pos1val);
                return true;
            }
        }

    }
    return false;

};
reset.addEventListener("click", resetGame);
ngame.addEventListener("click", function(){
    window.location.pathname="D:/vs_program/tic-tac-toe/index.html";
});
