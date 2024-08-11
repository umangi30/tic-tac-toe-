//second file
let plx=document.querySelector("#pl-x");
let plo=document.querySelector("#pl-o");


let x=plx.addEventListener("click", function(){
    localStorage.setItem("user","X");
    window.location.pathname="D:/vs_program/tic-tac-toe/game.html";
    
    
});
let o=plo.addEventListener("click", function(){
    localStorage.setItem("user","O");
    window.location.pathname="D:/vs_program/tic-tac-toe/game.html";
});

// window.addEventListener("load",function(){
//     window.localStorage.getItem("user");
// })