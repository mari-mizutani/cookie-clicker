let cookieClick = document.getElementById("cookie");
let countCookie = 0;
document.getElementById("displayCount").innerHTML = countCookie;

//click and count
cookieClick.addEventListener("click",function(){
    countCookie += 1;
    document.getElementById("displayCount").innerHTML = countCookie;
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
    document.getElementById("displayCount").innerHTML = countCookie;
});

let multiplyBtn = document.getElementById("multiply");  


//multiply button function
multiplyBtn.addEventListener("click", function(){
    //when it's over 20, make the button clickable
    if(countCookie >= 20){
        if(countCookie == 20){
            countCookie = countCookie * 2;
            document.getElementById("displayCount").innerHTML = countCookie;
        }else if(countCookie >= 40){
            countCookie = countCookie * 2 -20;
            document.getElementById("displayCount").innerHTML = countCookie;
        }
        
    };
});



