let cookieClick = document.getElementById("cookie");
let countCookie = 0;
let clickPoint = 0;
document.getElementById("cookieCount").innerHTML = countCookie;
document.getElementById("pointCount").innerHTML = clickPoint;

//click and count cookie
cookieClick.addEventListener("click",function(){
    countCookie += 1;
    document.getElementById("cookieCount").innerHTML = countCookie;
    //count point
    clickPoint += 1;
    document.getElementById("pointCount").innerHTML = clickPoint;
});



// //sound effect
// let bleep = new Audio();
// bleep.src = "click_sound.wav";
// function playBtnSound(num){
//     bleep.play();
// };


//reset button
let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function(){
    countCookie = 0;
    document.getElementById("cookieCount").innerHTML = countCookie;
    clickPoint = 0;
    document.getElementById("pointCount").innerHTML = clickPoint;
});

let multiplyBtn = document.getElementById("multiply");  


//multiply button function
multiplyBtn.addEventListener("click", function(){
    //when it's over 20, make the button clickable
    if(countCookie >= 20){
        countCookie += 2;
        document.getElementById("cookieCount").innerHTML = countCookie;
    };
});




